export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
  iconName: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "WhatsApp",
    url: "https://wa.me/254740551000?text=Hi%20Emman,%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project.",
    handle: "+254 740 551 000",
    iconName: "MessageSquare",
  },
  {
    platform: "Email",
    url: "mailto:e13084420@gmail.com?subject=Project%20Inquiry%20from%20Portfolio&body=Hi%20Emman,%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.",
    handle: "e13084420@gmail.com",
    iconName: "Mail",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/emman-karimi",
    handle: "in/emman-karimi",
    iconName: "Linkedin",
  },
  {
    platform: "GitHub",
    url: "https://github.com/emman-karimi",
    handle: "github.com/emman-karimi",
    iconName: "Github",
  },
];
