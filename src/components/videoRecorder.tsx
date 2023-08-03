import { Button, LinearProgress, Typography } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { UserData } from "src/gd/pages/apply";
import ErrorIcon from "@mui/icons-material/Error";
import getBlobDuration from "get-blob-duration";
import { uploadToCloudinary } from "src/utils/uploadToCloudinary";
import {BsFillCloudCheckFill} from "react-icons/bs";

const mimeType = 'video/webm; codecs="opus,vp8"';

const VideoRecorder = ({
  userData,
  setUserData,
  errorMessage,
  setErrorMessage,
  name,
}: {
  userData: UserData;
  setUserData: Function;
  errorMessage: any;
  setErrorMessage: React.Dispatch<React.SetStateAction<any>>;
  name: string;
}) => {
  const [permission, setPermission] = useState(false);

  const mediaRecorder = useRef<MediaRecorder | null>(null);

  const liveVideoFeed = useRef<HTMLVideoElement | null>(null);

  const [recordingStartTime, setRecordingStartTime] = useState<number | null>(
    null
  );
  const [recordingDuration, setRecordingDuration] = useState<number>(0);

  const [recordingStatus, setRecordingStatus] = useState<
    "inactive" | "recording"
  >("inactive");

  const [stream, setStream] = useState<MediaStream | null>(null);

  const [recordedVideo, setRecordedVideo] = useState<string | null>(null);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const getCameraPermission = async () => {
    setRecordedVideo(null);
    setFileToUpload(null);
    setUserData((prevData: UserData) => ({
      ...prevData,
      [name]: "",
    }));


    if ("MediaRecorder" in window) {
      try {
        const videoConstraints: MediaStreamConstraints = {
          audio: false,
          video: true,
        };
        const audioConstraints: MediaStreamConstraints = { audio: true };

        const audioStream = await navigator.mediaDevices.getUserMedia(
          audioConstraints
        );
        const videoStream = await navigator.mediaDevices.getUserMedia(
          videoConstraints
        );

        setPermission(true);

        setErrorMessage((prevErrors: any) => ({
          ...prevErrors,
          [name]: "",
        }));

        const combinedStream = new MediaStream([
          ...videoStream.getVideoTracks(),
          ...audioStream.getAudioTracks(),
        ]);

        setStream(combinedStream);

        if (liveVideoFeed.current) {
          liveVideoFeed.current.srcObject = videoStream;
        }
      } catch (err: any) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  const startRecording = () => {
    setRecordingStatus("recording");

    if (stream) {
      const media = new MediaRecorder(stream, { mimeType });

      mediaRecorder.current = media;
      setRecordingStartTime(Date.now());
      setRecordingDuration(0);

      let localVideoChunks: Blob[] = [];

      mediaRecorder.current.ondataavailable = (event) => {
        if (typeof event.data === "undefined") return;
        if (event.data.size === 0) return;
        localVideoChunks.push(event.data);
      };

      mediaRecorder.current.onstop = async () => {
        const videoBlob = new Blob(localVideoChunks, { type: mimeType });
        const videoFile = new File([videoBlob], "live.mp4", { type: videoBlob.type });
        const videoUrl = URL.createObjectURL(videoBlob);

        setRecordedVideo(videoUrl);

        try {
          const duration = await getBlobDuration(videoBlob);
          console.log(duration + " seconds");

          if (duration < 30 || duration > 240) {
            setErrorMessage((prevErrors: any) => ({
              ...prevErrors,
              [name]: "Video must be between 30s to 4 minutes",
            }));
            setFileToUpload(null);
          } else {
            setErrorMessage((prevErrors: any) => ({
              ...prevErrors,
              [name]: "",
            }));
            setFileToUpload(videoFile);
          }
        } catch (error) {
          console.error("Failed to get video duration:", error);
        }

        setRecordingDuration(0);
      };

      mediaRecorder.current.start();
    }
  };

  const stopRecording = () => {
    setPermission(false);
    setRecordingStatus("inactive");

    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
    }
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;

    if (recordingStatus === "recording") {
      timerId = setInterval(() => {
        setRecordingDuration(Date.now() - (recordingStartTime || 0));
      }, 1000);
    }

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [recordingStatus, recordingStartTime]);

  function formatDuration(durationInSeconds: number) {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = durationInSeconds % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    const formattedDuration = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    return formattedDuration;
  }

  const handleUpload = async () => {
    setUploading(true);
    const cloudinaryURL = await uploadToCloudinary([fileToUpload], setProgress);
    setUserData((prevData: UserData) => ({
      ...prevData,
      [name]: cloudinaryURL[0],
    }));
    setUploading(false);
  };

  return (
    <div>
      <main>
      {userData.live_description !== "" && <div className="mt-4 w-full sm:w-1/2 rounded-lg flex gap-2 items-center bg-stone-500 px-3 py-2">
            <BsFillCloudCheckFill className="text-white text-2xl"/> <Typography className="text-white"> Uploaded Successfully </Typography>  </div>}
        {uploading ? (
          <div style={{ width: "100%" }}>
            <LinearProgress variant="determinate" value={progress} />
          </div>

        ) : (
          <div className="flex gap-5 mt-5">

            {fileToUpload &&  userData.live_description === "" && (
              <Button
                variant="contained"
                className="bg-green-700 capitalize"
                type="button"
                onClick={handleUpload}
              >
                Upload Now
              </Button>
            )}
            {!permission ? (
              <Button
                variant="contained"
                className="bg-green-700 capitalize"
                onClick={getCameraPermission}
                type="button"
              >
                {fileToUpload ? "Retake" : "Start Camera"}
              </Button>
            ) : null}
            {permission && recordingStatus === "inactive" ? (
              <Button
                variant="contained"
                className="bg-green-700 capitalize"
                onClick={startRecording}
                type="button"
              >
                Start Recording
              </Button>
            ) : null}
            {recordingStatus === "recording" ? (
              <Button
                variant="contained"
                className="bg-green-700 capitalize"
                onClick={stopRecording}
                type="button"
              >
                Stop Recording
              </Button>
            ) : null}
            {recordingStartTime && recordingStatus === "recording" && (
              <div className="flex items-center mt-2 text-gray-800">
                <Typography className="p-0 text-sm">
                  Duration:{" "}
                  {formatDuration(Math.floor(recordingDuration / 1000))}
                </Typography>
              </div>
            )}
           
          </div>
        )}
      </main>

      <div className="w-full sm:w-1/2 min-h-[35vh] border border-gray-200 mt-5 relative">
        {!recordedVideo ? (
          <video
            ref={liveVideoFeed}
            autoPlay
            className="absolute h-full w-full"
          ></video>
        ) : null}
        {recordedVideo ? (
          <video
            className="absolute h-full w-full"
            src={recordedVideo}
            controls
          ></video>
        ) : null}
      </div>
      {errorMessage[name] && errorMessage[name] !== "" && (
        <div className="flex items-center mt-2 gap-2 text-gray-800">
          <ErrorIcon />
          <Typography className="p-0 text-sm">{errorMessage[name]}</Typography>
        </div>
      )}
    </div>
  );
};

export default VideoRecorder;
