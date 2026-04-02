import aboutnetlogo from '../assets/aboutnet.svg'
import atcomlogo from '../assets/atcomlogo.svg'
import nophoto from '../assets/nophoto.svg'
import freelance from '../assets/freelance.svg'


import  { useEffect } from "react";
import { gsap } from "gsap";
  
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Experience() {

	useEffect(() => {

		



			ScrollTrigger.matchMedia({

				"(min-width:768px)": function () {
		
					const promotl = gsap.timeline({
						scrollTrigger: {
							trigger: ".section--experience",
							start: "-10%",
							end: "+=180%",
							scrub: 1
						}
					});
					promotl
						.fromTo(".code", { yPercent: -10}, { yPercent:100 }) 
		
				},
				"(max-width: 767px)": function () {
		
					const promotl = gsap.timeline({
						scrollTrigger: {
							trigger: ".section--experience",
							start: "-20%",
							end: "+=150%",
							scrub: 1
						}
					});
					promotl
						.fromTo(".code", { yPercent: -40}, { yPercent:300 }) 
		
				}
			});
	}, []);
  return (
    <>
   <section id="experience" className="section section--experience section--ivory2">
			<div className="wrapper">
				<div className="section__header">
					<h2 className="section__title">EXPERIENCE</h2>
				</div>
				
				<div className="list">
					<div className="list__item">	
					<figure className="list__img">
							<picture>
							<img src={atcomlogo} alt="aboutnetlogo logo" />
							</picture>							
						</figure>	
						<div className="list__desc">
							<h3>
								Front End Developer</h3>
								<p><a href="https://www.atcom.gr/" target="_blank" title="Atcom Internet & Multimedia S.A.">Atcom Internet & Multimedia S.A.</a></p>
							<p className="list__date">Apr 2014 - Jun 2024 · 10 yrs 3 mos</p>
						</div>
					</div>
					<div className="list__item">
						<figure className="list__img list__img--freelance">
							<picture>
							<img src={freelance} alt=" logo" />
							</picture>							
						</figure>		
						<div className="list__desc">
							<h3>Web Designer</h3>
							<p>Freelance</p>
							<p className="list__date">Nov 2012 - Apr 2014</p>
						</div>
					</div>
					<div className="list__item">
						<figure className="list__img">
							<picture>
							<img src={aboutnetlogo} alt="aboutnetlogo logo" />
							</picture>							
						</figure>
						<div className="list__desc">
							<h3>Web Designer</h3>
							<p><a href="https://www.aboutnet.gr/" target="_blank" title="ABOUTNET.GR WEB SERVICES">ABOUTNET.GR WEB SERVICES</a></p>
							
							<p className="list__date">Apr 2011 - Nov 2012 · 1 yr 8 mos</p>
						</div>
					</div>
					<div className="list__item">
						<figure className="list__img list__img--nophoto">
							<picture>
							<img src={nophoto} alt="aboutnetlogo logo" />
							</picture>							
						</figure>		
						<div className="list__desc">
							<h3>Web Designer</h3>
							<p>Diasnet</p>
							<p className="list__date">Nov 2009 - Dec 2010 · 1 yr 2 mos</p>
						</div>
					</div>
				</div>
				<p className="code"></p>
			</div>
		</section>	
    </>
  )
}

export default Experience
