import { useEffect } from "react";
import { Link } from "react-scroll";

// Mock
import { menuLinks, MenuLink } from "../mocks/LinksMenuMock";

interface NavBarLinksProps extends MenuLink {
  active: string;
  href: string;
  text: string;
}

function NavBarLinks({ active, href, text }: NavBarLinksProps) {
  const classNameLink = `${active} w-full py-4 px-3 md:py-2 cursor-pointer `;

  const changeActiveLink = (id: string) => {
    const [oldAchorActive, newAchorActive] = [
      document.querySelector(".active-true"),
      document.getElementById(id + "-link"),
    ];

    if (oldAchorActive && newAchorActive) {
      oldAchorActive.classList.remove("active-true");
      newAchorActive.classList.add("active-true");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (observeElement) => {
        observeElement.forEach((observeElement) => {
          if (observeElement.isIntersecting) {
            const id = observeElement.target.id;
            changeActiveLink(id);
          }
        });
      },
      { threshold: 0.9 }
    );

    menuLinks.forEach((element) => {
      const observeElement = document.getElementById(element.href);

      if (observeElement) {
        observer.observe(observeElement);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Link
      to={href}
      spy={false}
      smooth={true}
      offset={-50}
      duration={500}
      className={classNameLink}
      id={href + "-link"}
    >
      {text}
    </Link>
  );
}

export default NavBarLinks;
