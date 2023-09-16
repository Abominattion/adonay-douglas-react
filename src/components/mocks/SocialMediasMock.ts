export interface SocialMedia {
  href: string;
  icon: string;
  text: string;
}

const socialMedias: SocialMedia[] = [
  {
    href: "https://github.com/oh-dony",
    icon: "fab fa-github",
    text: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/adonay-douglas-2095291ab/",
    icon: "fa-brands fa-linkedin",
    text: "LinkedIn",
  },
  {
    href: "https://codepen.io/abominattion",
    icon: "fab fa-codepen",
    text: "CodePen",
  },
  {
    href: "mailto:adonay.douglas.profissional@gmail.com",
    icon: "fa-brands fa-google",
    text: "Email",
  },
];

export { socialMedias };
