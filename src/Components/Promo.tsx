export const skills = [
	{
	  skill1:"HTML5",
	  skill2: "SASS",
	  skill3: "CROSS-BROWSER"
	},
  {
	  skill1:"ACCESSIBILITY",
	  skill2: "NEWSLETTERS",
	  skill3: "WAGG"
	},
  {
	  skill1:"VANILLA JAVASCRIPT",
	  skill2: "REACT",
	  skill3: "KEYFRAMES"
	},
  {
	  skill1:"BEM",
	  skill2: "GSAP",
	  skill3: "GULP"
	},
  {
	  skill1:"PHOTOSHOP",
	  skill2: "PERFORMANCE",
	  skill3: "TESTING"
	},
	{
		skill1:"GIT",
		skill2: "CSS3",
		skill3: "JQUERY"
	  },
  ];

//   import { Swiper, SwiperSlide } from 'swiper/react';

//   import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

  import  { useEffect } from "react";
  import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

function Promo() {
	
	useEffect(() => {

		const promotl = gsap.timeline({
			scrollTrigger: {
				trigger: ".promo__bg",
				start: "top top",
				end: "bottom",
				scrub: 1
			}
		});
		promotl
			
			.fromTo(".promo__ground--2", { yPercent: -10, ease: 'none'}, { yPercent: 10, ease: 'none' }, 0)
			.fromTo(".promo__ground--1", { yPercent: -20, ease: 'none'}, { yPercent: 10, ease: 'none' }, 0)
			.fromTo(".promo__skill", { yPercent: -14, ease: 'none'}, { yPercent: 10, ease: 'none' }, 0.2) 
			.fromTo(".cloud", { yPercent: -100, ease: 'none'}, { yPercent: 100, ease: 'none' }, 0.2) 
	}, []);


	const skills2 = ["HTML5", "SASS", "ACCESSIBILITY", "VANILLA JAVASCRIPT", "REACT","GULP","GIT","CROSS-BROWSER","NEWSLETTERS","UNDERMAINTENANCE","JQUERY", "KEYFRAMES", "BEM", "PHOTOSHOP", "GSAP", "CSS3", "PERFORMANCE", "TESTING"];


  return (
    <>
    <section id="promo" className="promo anim-element">
			<div className="wrapper">
				<div className="promo__content">
				{/* <Swiper   className="promo__img"
				 modules={[Navigation, Pagination, Autoplay, EffectFade]}
				 slidesPerView={1}
				 speed={3000}
				 effect={"fade"}
				 autoplay={{delay: 6000}}
				>
					<SwiperSlide>
						<figure className="promo__fig">
								<picture>						
									<source srcSet="/src/assets/nota2.webp" type="image/webp" />
									<img src="/src/assets/nota2.jpg" alt="Nota damianidi" fetchPriority="high"/>
								</picture>
							</figure>
					</SwiperSlide>
					<SwiperSlide >
						<figure className="promo__fig">
								<picture>						
									<source srcSet="/src/assets/nota2.webp" type="image/webp" />
									<img  loading="lazy" src="/src/assets/nota2.jpg" alt="Nota damianidi" />
								</picture>
							</figure>
					</SwiperSlide>
					<SwiperSlide >
						<figure className="promo__fig">
								<picture>						
									<source srcSet="/src/assets/nota3.webp" type="image/webp" />
									<img  loading="lazy" src="/src/assets/nota3.jpg" alt="Nota damianidi" />
								</picture>
							</figure>
					</SwiperSlide>
				</Swiper> */}

					<div className="promo__desc">
							<h2>
								FRONT-END DEVELOPER
							</h2>
							<p><b>10+ YEARS</b> EXPERIENCE</p>
						{/* <hr />
						<div className="promo__descItem">
							<h2>WEB DESIGNER</h2>
							<p> <b>4 YEARS </b> EXPERIENCE</p>
							<p className="promo__date">2009 - 2014</p>
						</div> */}
					</div>
				</div>
			</div>
			<div className="skills">    
				<div className="skills__wrap">
					{skills2.map((skills) => (
					<p className="skills__item" key={skills}>{skills}</p>
					))}
				</div>
				<div className="skills__wrap">
					{skills2.map((skills) => (
					<p className="skills__item" key={skills}>{skills}</p>
					))}
				</div>
					
			</div>
			<div className="promo__bg">
				<div className="sun"><div className="sun__inner"></div></div>
				<div className="promo__ground promo__ground--1"></div>
				<div className="promo__ground promo__ground--2"></div>
				<div className="promo__ground promo__ground--3"></div>
				<div className="bird-container bird-container-one">
					<div className="bird bird-one"></div>
					</div>        
					<div className="bird-container bird-container-two">
					<div className="bird bird-two"></div>
					</div>  
					<div className="bird-container bird-container-three">
					<div className="bird bird-three"></div>
					</div> 
					<div className="bird-container bird-container-four">
					<div className="bird bird-four"></div>
				</div>
				<div className="promo__clouds">
					<div className="cloud cloud--1"></div>
					<div className="cloud cloud--2"></div>
					<div className="cloud cloud--3"></div>
					<div className="cloud cloud--4"></div>
					<div className="cloud cloud--5"></div>
					<div className="cloud cloud--6"></div>
					<div className="cloud cloud--7"></div>
					<div className="cloud cloud--8"></div>
					<div className="cloud cloud--9"></div>
					<div className="cloud cloud--10"></div>
				</div>
        {skills.map((skill, number) => {
                    const { skill1 } = skill;
                    return (
                      <div className={`promo__skill promo__skill--${ number }`} key={skill1}>
                        
						  <div className="promo__tree">
						  	<div className="promo__treeInner promo__treeInner--1"><span></span></div>	
							  <div className="promo__treeInner promo__treeInner--2"><span></span></div>	
                           {/* <svg className="promo__tree" data-name="Layer 1" id="Layer_1" viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg">
                            <line className="promo__tree1" x1="69.5" x2="76.83" y1="60.37" y2="67.7" />
                            <polygon className="promo__tree2"
                              points="33.83 60.47 25.11 72.27 5.84 45.44 35.28 5.76 62.65 43.94 41.81 72.03 33.83 60.47" />
                            <polygon className="promo__tree2"
                              points="76.29 73.32 70.67 80.94 58.09 62.55 77.02 37.79 94.94 62.69 81.52 80.85 76.29 73.32" />
                            <path className="promo__tree3"
                              d="M50.59,41.46,34.83,57.22V52.28L46.18,40.93a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-9.94,9.94V37.31a1,1,0,0,0-2,0V49.45l-9.94-9.94a1,1,0,0,0-1.42,1.42L32.83,52.28v4.94L17.06,41.46a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L32.83,60.05V94.57a1,1,0,0,0,2,0V60.05L52,42.87a1,1,0,0,0,0-1.41A1,1,0,0,0,50.59,41.46Z" />
                            <path className="promo__tree3"
                              d="M85,59.58a1.12,1.12,0,0,0-1.6,0l-5.7,5.7V58.66a1.13,1.13,0,0,0-2.26,0V94.57a1.13,1.13,0,0,0,2.26,0V68.47l7.3-7.3A1.12,1.12,0,0,0,85,59.58Z" />
                          </svg>  */}
						  </div>	
                        </div>

                    );
                  })}

				
			</div>
		</section>
    </>
  )
}

export default Promo
