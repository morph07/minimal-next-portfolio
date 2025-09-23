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
    username: "Lamberto Guevarra",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/lamberto-guevarra-b47a36109",
  },
  {
    name: "Gmail",
    username: "lambertorguevarra",
    icon: Icons.gmail,
    link: "mailto:lambertorguevarra@gmail.com",
  },
];
