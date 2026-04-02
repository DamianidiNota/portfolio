

export const socials = [
  {
    title:"linkedin",
    href: "https://www.linkedin.com/in/nota-damianidi-20b276b9/",
    img:"/src/assets/linkedin.svg",
  }
];

function Footer() {


  // useEffect(() => {
   
    // const gotop = document.querySelector('.goToTop');

    // gotop.addEventListener('click', () => window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth',
    // }));
    
    // function scrollEvents() {
    //   const wScroll = window.scrollY,
    //     windheight = window.innerHeight;
    
    //   if (wScroll > windheight / 2) {
    //     gotop.classList.add('goToTop--active');
    //   } else {
    //     gotop.classList.remove('goToTop--active');
    //   }
    // }
    
    // scrollEvents();
    
    // window.addEventListener('scroll', scrollEvents);
// }, []);
  

  return (
    <>
   

    <footer id="footer" className="footer">
       
            <button className="goToTop" data-plugin-gototop aria-label="go to top"></button>
            {/* <div className="footer__top">
              <div className="wrapper">
              </div>
            </div> */}
            <div className="footer__main">
            <div className="wrapper footer__mainWrapper">
                <div className="footer__col">
                    <h3 className="footer__title">Contact</h3>
                  <div  className="footer__mail">
                  <div  className="footer__mailIcon">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="mail email e-mail letter" id="mail_email_e-mail_letter"><path d="M28,13a1,1,0,0,0-1,1v8a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14a1,1,0,0,0-2,0v8a3,3,0,0,0,.88,2.12A3,3,0,0,0,6,25H26a3,3,0,0,0,2.12-.88A3,3,0,0,0,29,22V14A1,1,0,0,0,28,13Z"/><path d="M15.4,18.8a1,1,0,0,0,1.2,0L28.41,9.94a1,1,0,0,0,.3-1.23,3.06,3.06,0,0,0-.59-.83A3,3,0,0,0,26,7H6a3,3,0,0,0-2.12.88,3.06,3.06,0,0,0-.59.83,1,1,0,0,0,.3,1.23ZM6,9H26a.9.9,0,0,1,.28,0L16,16.75,5.72,9A.9.9,0,0,1,6,9Z"/></g></svg>
                    </div>
                    <a href="mailto:notadamianidi@gmail.com" className="footer__mailLink">
                      notadamianidi@gmail.com
                    </a>
                  </div>
                  
                </div>
                <div className="footer__col">
                  <p className="footer__initials">
                    ND
                  </p>
                </div>
                <div className="footer__col footer__col--social">
                <h3 className="footer__title">Social</h3>
                <ul className="social">
                  {socials.map((social) => {
                    const { title, href } = social;
                    return (
                      <li  className={`social__li`} key={title}>	 
                        <a className={`social__link social__link--${title}`} href={href} target="_blank">
                          {title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                </div>
                </div>
            </div>
    </footer>
    </>
  )
}

export default Footer
