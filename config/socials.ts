import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@morph07",
    icon: Icons.gitHub,
    link: "https://github.com/morph07",
  },
  {
    name: "LinkedIn",
    username: "Ambet Guevarra",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/ambet-guevarra",
  },
  {
    name: "Twitter",
    username: "@ambetguevarra",
    icon: Icons.twitter,
    link: "https://twitter.com/ambetguevarra",
  },
  {
    name: "Gmail",
    username: "ambet.guevarra02",
    icon: Icons.gmail,
    link: "mailto:lambertorguevarra@gmail.com",
  },
];
