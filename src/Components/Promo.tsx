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
			
			.fromTo(".promo__ground--2", { yPercent: -15, ease: 'none'}, { yPercent: 15, ease: 'none' }, 0)
			.fromTo(".promo__ground--1", { yPercent: -25, ease: 'none'}, { yPercent: 15, ease: 'none' }, 0)
			.fromTo(".promo__skill", { yPercent: -20, ease: 'none'}, { yPercent: 15, ease: 'none' }, 0.2) 
			.fromTo(".cloud", { yPercent: -100, ease: 'none'}, { yPercent: 100, ease: 'none' }, 0.2) 
	}, []);


	const skills2 = ["HTML5", "SASS", "ACCESSIBILITY", "VANILLA JAVASCRIPT", "REACT","GULP","GIT","CROSS-BROWSER","NEWSLETTERS","UNDERMAINTENANCE","JQUERY", "KEYFRAMES", "BEM", "PHOTOSHOP", "GSAP", "CSS3", "PERFORMANCE", "TESTING"];


  return (
    <>
    <section id="promo" className="promo anim-element">
			<div className="wrapper">
				<div className="promo__content">
				

					<div className="promo__desc">
							<h2>
								SENIOR FRONT-END DEVELOPER
							</h2>
							<p><b>12 YEARS</b> EXPERIENCE</p>
						
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
