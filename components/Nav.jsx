import { Link } from "react-scroll";
const links = [
  {
    path: "home",
    name: "خانه",
    offset: 0,
  },
  {
    path: "menu",
    name: "منو",
    offset: -50,
  },
  {
    path: "about",
    name: "درباره ما",
    offset: -150,
  },
  {
    path: "contact",
    name: "ارتباط با ما",
    offset: 0,
  },
];

const Nav = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            to={link.path}
            spy={true}
            smooth={true}
            offset={link.offset}
            duration={500}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
