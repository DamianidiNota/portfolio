

import  { useEffect } from "react";

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function ImgFooter() {

	useEffect(() => {

		const discovertl = gsap.timeline({
			scrollTrigger: {
				trigger: ".imageSection",
				start: "-160%",
				end: "+=300%",
				scrub: 1
			}
		});
		discovertl
			.fromTo(".imageSection__img img", { yPercent: -20 }, { yPercent: 20 }) 
		
	}, []);
  return (
    <>
	

	<section className="imageSection " >   
      <figure className="imageSection__img">
			<picture>						
				<source srcSet="assets/flowers.webp" type="image/webp" media="(min-width: 641px)"/>	
				<source srcSet="assets/flowers-sml.webp" type="image/webp" media="(max-width: 640px)"/>		
				<img loading="lazy" src="assets/flowers.jpg" alt="Alt text" />
			</picture>
		</figure>
    </section>
    </>
  )
}

export default ImgFooter
