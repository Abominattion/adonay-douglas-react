export interface MenuLink {
  href: string;
  text: string;
  icon: string;
  active: string;
}

const menuLinks: MenuLink[] = [
  {
    href: "home",
    text: "Home",
    icon: "fa-solid fa-house",
    active: "active-true",
  },
  {
    href: "sobre",
    text: "Sobre",
    icon: "fa-solid fa-circle-info",
    active: "active-false",
  },
  {
    href: "portifolio",
    text: "Portifólio",
    icon: "fa-solid fa-sheet-plastic",
    active: "active-false",
  },
  {
    href: "contato",
    text: "Contato",
    icon: "fa-solid fa-address-book",
    active: "active-false",
  },
];

export { menuLinks };
