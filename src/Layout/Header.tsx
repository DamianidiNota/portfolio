import Nav from "../Layout/Nav";

function Header() {

  function openmenu() {
      document.body.classList.toggle('menu-opened')
  }
  function darkmode() {
    const root = document.getElementsByTagName( 'html' )[0];
    root.classList.toggle('darkmode')


  }

  return (
    <>
     <header className="header">
        <div className="wrapper header__wrapper">
          <div className="header__left">
            <h1 className="logo" aria-label="Nota Damianidi">
              <span className="logo__wrapper">
                NOTA DAMIANIDI
              </span>
            </h1>           
          </div>
          <div className="header__right">
            <Nav></Nav>
            <button className="button-darkmode" aria-label="click for dark mode" onClick={darkmode}></button>
            <button className="burgerMenu" aria-label="click to open menu" onClick={openmenu}>
              <span className="burgerMenu__bar burgerMenu__bar--top"></span>
              <span className="burgerMenu__bar burgerMenu__bar--middle"></span>
              <span className="burgerMenu__bar burgerMenu__bar--bottom"></span>
          </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
