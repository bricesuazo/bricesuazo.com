import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRedditAlien,
  FaRegEnvelope,
  FaSpotify,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import type { IconType } from "react-icons/lib";

export const links: {
  id: number;
  name: string;
  slug: string;
  url: string;
  icon: IconType;
}[] = [
  {
    id: 0,
    name: "Email",
    slug: "email",
    url: "mailto:contact@bricesuazo.com",
    icon: FaRegEnvelope,
  },
  {
    id: 1,
    name: "GitHub",
    slug: "github",
    url: "https://github.com/bricesuazo/",
    icon: FaGithub,
  },
  {
    id: 2,
    name: "Twitter",
    slug: "twitter",
    url: "https://twitter.com/brice_suazo",
    icon: FaTwitter,
  },
  {
    id: 3,
    name: "Facebook",
    slug: "facebook",
    url: "https://www.facebook.com/bricesuazo",
    icon: FaFacebook,
  },
  {
    id: 4,
    name: "Instagram",
    slug: "instagram",
    url: "https://www.instagram.com/brice_suazo/",
    icon: FaInstagram,
  },
  {
    id: 5,
    name: "YouTube",
    slug: "youtube",
    url: "https://www.youtube.com/bricesuazo",
    icon: FaYoutube,
  },
  {
    id: 6,
    name: "TikTok",
    slug: "tiktok",
    url: "https://www.tiktok.com/@bricesuazo",
    icon: FaTiktok,
  },
  {
    id: 7,
    name: "LinkedIn",
    slug: "linkedin",
    url: "https://www.linkedin.com/in/bricesuazo/",
    icon: FaLinkedin,
  },
  {
    id: 8,
    name: "Spotify",
    slug: "spotify",
    url: "https://open.spotify.com/user/5zjazbzw6c4tzfm9aui3h4jxx",
    icon: FaSpotify,
  },
  {
    id: 9,
    name: "Reddit",
    slug: "reddit",
    url: "https://www.reddit.com/user/BriceSuazo",
    icon: FaRedditAlien,
  },
];

export const projects: {
  id: number;
  name: string;
  slug: string;
  url: string;
}[] = [
  {
    id: 0,
    name: "eBoto Mo",
    slug: "eboto",
    url: "https://eboto-mo.com",
  },
  {
    id: 1,
    name: "scrtmsg.me",
    slug: "scrtmsg",
    url: "https://scrtmsg.me",
  },
  {
    id: 2,
    name: "Jib",
    slug: "jib",
    url: "https://jib.im",
  },
  {
    id: 3,
    name: "CvSU.me",
    slug: "cvsu.me",
    url: "https://cvsu.me",
  },
  {
    id: 4,
    name: "Gulaman Entertainment",
    slug: "gulaman",
    url: "https://gulamanentertainment.com",
  },
  {
    id: 5,
    name: "Gulaman Entertainment Link Page",
    slug: "link.gulaman",
    url: "https://links.gulamanentertainment.com",
  },
];
