
export const routes = [
  {
    title: "HIGHLIGHTED PORTFOLIO",
    href: "#highlights",
  },
  
  {
    title: "EXPERIENCE",
    href: "#experience",
  },
 
 
  {
    title: "ABOUT",
    href: "#about",
  },
  {
    title: "CLIENTS",
    href: "#clients",
  },
  {
    title: "PORTFOLIO",
    href: "#portfolio",
  },
  {
    title: "CONTACT",
    href: "#footer",
  },
];

export  const Nav = () => {

  function closemenu() {
    document.body.classList.remove('menu-opened')
}
  return (
    <div className="header__nav">
       <nav className="main-nav">
        <ul className="main-nav__ul">
          {routes.map((route) => {
            const { href, title } = route;
            return (
              <li className="main-nav__li"  key={title}>
                <a href={href}  onClick={closemenu}>
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav