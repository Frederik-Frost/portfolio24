// Parent
// Fetches the social media links

import { getSocialMediaLinks } from "@/sanity/sanity-utils";

import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTiktok,
  FaSpotify,
  FaTwitch,
  FaSoundcloud,
  FaSnapchat,
  FaPinterest,
  FaReddit,
  FaXTwitter
} from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";

const SoMeLinks = async () => {
  const socialMediaLinks = await getSocialMediaLinks();

  const getMatchingIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "linkedin":
        return <FaLinkedin />;
      case "github":
        return <FaGithub />;
      case "twitter":
        return <FaTwitter />;
      case "x-twitter":
        return <FaXTwitter />;
      case "instagram":
        return <FaInstagram />;
      case "facebook":
        return <FaFacebook />;
      case "youtube":
        return <FaYoutube />;
      case "twitch":
        return <FaTwitch />;
      case "spotify":
        return <FaSpotify />;
      case "soundcloud":
        return <FaSoundcloud />;
      case "tiktok":
        return <FaTiktok />;
      case "snapchat":
        return <FaSnapchat />;
      case "pinterest":
        return <FaPinterest />;
      case "reddit":
        return <FaReddit />;
    }
  };

  return (
    <div className="flex flex-row gap-4">
      {socialMediaLinks.map((link) => (
        <a key={link._id} href={link.url} target="_blank" rel="noopener noreferrer" className="text-xl">
          {getMatchingIcon(link.name)}
        </a>
      ))}
    </div>
  );
};

export default SoMeLinks;
