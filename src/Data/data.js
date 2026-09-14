import iconFacebook from "../assets/images/icon-facebook.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";
import iconYouTube from "../assets/images/icon-youtube.svg";

const data = [
  {
    id: 1,
    platform: "Facebook",
    icon: iconFacebook,
    user: "@nathanf",
    followers: 1987,
    today: "+12",
  },
  {
    id: 2,
    platform: "Twitter",
    icon: iconTwitter,
    user: "@nathanf",
    followers: 1044,
    today: "-99",
  },
  {
    id: 3,
    platform: "Instagram",
    icon: iconInstagram,
    user: "@realnathanf",
    followers: 11283,
    today: "+1099",
  },
  {
    id: 4,
    platform: "YouTube",
    icon: iconYouTube,
    user: "Nathan F.",
    followers: 8239,
    today: "-144",
  },
];

export const todayStats = [
  {
    id: 1,
    platform: "Facebook",
    indicator: "Page views",
    amount: 87,
    percentage: "+3%",
  },
  {
    id: 2,
    platform: "Facebook",
    indicator: "Likes",
    amount: 52,
    percentage: "-2%",
  },
  {
    id: 3,
    platform: "Instagram",
    indicator: "Likes",
    amount: 5462,
    percentage: "+2257%",
  },
  {
    id: 4,
    platform: "Instagram",
    indicator: "Profile views",
    amount: 52366,
    percentage: "+1375%",
  },
  {
    id: 5,
    platform: "Twitter",
    indicator: "Retweets",
    amount: 117,
    percentage: "+303%",
  },
  {
    id: 6,
    platform: "Twitter",
    indicator: "Likes",
    amount: 507,
    percentage: "+553%",
  },
  {
    id: 7,
    platform: "YouTube",
    indicator: "Likes",
    amount: 107,
    percentage: "-19%",
  },
  {
    id: 8,
    platform: "YouTube",
    indicator: "Total views",
    amount: 1407,
    percentage: "-12%",
  },
];

export default data;
