export interface ContactData {
  name: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  whatsappUrl: string;
  whatsappPreFill: string;
  phoneRaw: string;
  phoneDisplay: string;
  email: string;
  emailSubject: string;
  emailBody: string;
  emailUrl: string;
  linkedinUrl: string;
  githubUrl: string;
}

export const contactData: ContactData = {
  name: "Emman Karimi",
  whatsappNumber: "254740551000",
  whatsappDisplay: "+254 740 551 000",
  whatsappUrl: "https://wa.me/254740551000?text=Hi%20Emman,%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project.",
  whatsappPreFill: "Hi Emman, I found your portfolio and I'd like to discuss a project.",
  phoneRaw: "+254740551000",
  phoneDisplay: "0740551000",
  email: "e13084420@gmail.com",
  emailSubject: "Project Inquiry from Portfolio",
  emailBody: "Hi Emman, I'd like to discuss a project with you.",
  emailUrl: "mailto:e13084420@gmail.com?subject=Project%20Inquiry%20from%20Portfolio&body=Hi%20Emman,%20I%27d%20like%20to%20discuss%20a%20project%20with%20you.",
  linkedinUrl: "https://linkedin.com/in/emman-karimi",
  githubUrl: "https://github.com/emman-karimi",
};
