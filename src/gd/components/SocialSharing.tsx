import { useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  InstapaperShareButton,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  FacebookIcon,
  InstapaperIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const SocialSharing = ({ path, title }: { path: string; title: string }) => {
  const baseURL =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_BASE_LIVE_URL
      : process.env.REACT_APP_BASE_LOCAL_URL;

  const [value, setValue] = useState(window.location.href);
  const [copy, setCopy] = useState(false);

  const handleFacebookShare = () => {
    // Implement the sharing functionality for Facebook
    // using the library's provided functionality or API
  };

  const handleTwitterShare = () => {
    // Implement the sharing functionality for Twitter
    // using the library's provided functionality or API
  };

  const handleWhatsAppShare = () => {
    // Implement the sharing functionality for WhatsApp
    // using the library's provided functionality or API
  };

  const handleInstagramShare = () => {
    // Implement the sharing functionality for Instagram
    // using the library's provided functionality or API
  };
 console.log('value', path)
  return (
    <>
      <div className="w-[28vw] flex flex-col gap-5">
        <div className="h-[56px] w-full flex items-center justify-between bg-white">
          <input className="h-full px-3 focus:outline-none border-none" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <CopyToClipboard text={value} onCopy={() => setCopy(true)}>
            <button className={`w-full p-3 h-full text-secondaryTheme ${copy ? "bg-green-700" : "bg-stone-600" }`}>
              {copy ? "Copied" : "Copy"}
            </button>
          </CopyToClipboard>
        </div>
        <div className="text-secondaryTheme w-full flex justify-between">
          <FacebookShareButton
            url={`${baseURL}/${path}`}
            onClick={handleFacebookShare}
          >
            <FacebookIcon size={40} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={`${baseURL}/${path}`}
            title={title}
            onClick={handleTwitterShare}
          >
            <TwitterIcon size={40} round />
          </TwitterShareButton>
          <WhatsappShareButton
            url={`${baseURL}/${path}`}
            onClick={handleWhatsAppShare}
          >
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>
          <InstapaperShareButton
            url={`${baseURL}/${path}`}
            title={title}
            onClick={handleInstagramShare}
          >
            <InstapaperIcon size={40} round />
          </InstapaperShareButton>
        </div>
      </div>
    </>
  );
};

export default SocialSharing;
