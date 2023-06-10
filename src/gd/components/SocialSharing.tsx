import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, InstapaperShareButton } from 'react-share';
import {
    FacebookIcon,
    InstapaperIcon,
    TwitterIcon,
    WhatsappIcon,
  } from "react-share";

const SocialSharing = ({path, title}: {path: string, title: string}) => {

  const baseURL = process.env.NODE_ENV === 'production'
  ? process.env.BASE_LIVE_URL
  : process.env.BASE_LOCAL_URL;

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

  return (
    <div className='text-secondaryTheme flex gap-5'>
      <FacebookShareButton url={`${baseURL}/${path}`} onClick={handleFacebookShare}>
        <FacebookIcon size={40} round/>
      </FacebookShareButton>
      <TwitterShareButton url={`${baseURL}/${path}`} title={title} onClick={handleTwitterShare}>
        <TwitterIcon size={40} round/>
      </TwitterShareButton>
      <WhatsappShareButton url={`${baseURL}/${path}`} onClick={handleWhatsAppShare}>
        <WhatsappIcon size={40} round/>
      </WhatsappShareButton>
      <InstapaperShareButton url={`${baseURL}/${path}`} title={title} onClick={handleInstagramShare}>
        <InstapaperIcon size={40} round/>
      </InstapaperShareButton>
    </div>
  );
};

export default SocialSharing;
