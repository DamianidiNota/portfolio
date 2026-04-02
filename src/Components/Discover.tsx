
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import ikealogo from '../assets/projects/ikealogo.svg'
import gregoryslogo from '../assets/projects/gregoryslogo.svg'
import polikatikialogo from '../assets/projects/polikatikialogo.svg'
import hollandandbarrettlogo from '../assets/projects/hollandandbarrettlogo.svg'
import sustainlogo from '../assets/brands/SustainableGreece.svg'

import  { useEffect } from "react";

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


function Discover() {

	useEffect(() => {

		const discovertl = gsap.timeline({
			scrollTrigger: {
				trigger: ".discover",
				start: "-160%",
				end: "+=300%",
				scrub: 1
			}
		});
		discovertl
			.fromTo(".discover__img img", { yPercent: -16 }, { yPercent: 16 }) 
	}, []);
  return (
    <>
	

  <section id="highlights" className="section section--discover">
			{/* <div className="wrapper">
				<div className="section__header">
					<h2 className="section__title">HIGHLIGHTED PORTFOLIO</h2>
				</div>
			</div> */}
			<div className="discover">
			<Swiper
				 modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={8}
				slidesPerView={1}
				navigation
				pagination
				loop={true}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				>
				<SwiperSlide  className="discover__item">
					<div className="discover__bg">         
						<figure className="discover__img">
							<picture>						
								<source srcSet="/src/assets/projects/ikea1920x1570.webp" type="image/webp" media="(min-width: 641px)"/>	
								<source srcSet="/src/assets/projects/ikea640x523.webp" type="image/webp" media="(max-width: 640px)"/>		
								<source srcSet="/src/assets/projects/ikea640x523.jp2" type="image/jp2" media="(max-width: 640px)"/>		
								<img fetchpriority="high" src="/src/assets/projects/ikea1920x1570.jpg" alt="Alt text" />
							</picture>
						</figure>
						
					</div>
					<div className="discover__content">
						<div className="discover__header">
						<figure className="discover__logo">
							<picture>
							<img src={ikealogo} alt="ikea logo" />
							</picture>							
						</figure>	
							{/* <h2 className="discover__title">IKEA</h2> */}
							<p>Front-End developer - IKEA WEBSITE 2015 till 2023</p>
						</div>
						<div className="discover__actions">
							<a className="button" href="https://www.ikea.gr" target="_blank">
								<span>VISIT</span>
							</a>
						</div>

					</div>
				</SwiperSlide>
				<SwiperSlide  className="discover__item">
					<div className="discover__bg">                          
						<figure className="discover__img">
							<picture>						
								<source srcSet="/src/assets/projects/gregorys1920x1570.webp" type="image/webp" media="(min-width: 641px)"/>	
								<source srcSet="/src/assets/projects/gregorys640x523.webp" type="image/webp" media="(max-width: 640px)"/>				
								<img loading="lazy" src="/src/assets/projects/gregorys1920x1570.jpg" alt="Alt text" />
							</picture>
						</figure>
						
					</div>
					<div className="discover__content">
						<div className="discover__header">
						<figure className="discover__logo">
							<picture>
							<img src={gregoryslogo} alt="GREGORYS CORPORATE" />
							</picture>							
						</figure>	
							{/* <h2 className="discover__title">GREGORYS CORPORATE</h2> */}
							<p>Front-End developer</p>
						</div>
						<div className="discover__actions">
							<a className="button" href="https://corporate.gregorys.gr" target="_blank">
								<span>VISIT</span>
							</a>
							<a className="button" href="https://corporate.gregorys.gr/taxidi-tou-kafe/" target="_blank">
								<span>HIGHLIGHTED PAGE</span>
							</a>
						</div>

					</div>
				</SwiperSlide>
				<SwiperSlide  className="discover__item">
					<div className="discover__bg">                          
						<figure className="discover__img">
							<picture>						
								<source srcSet="/src/assets/projects/polikatikia1920x1570.webp" type="image/webp" media="(min-width: 641px)"/>	
								<source srcSet="/src/assets/projects/polikatikia640x523.webp" type="image/webp" media="(max-width: 640px)"/>			
								<img loading="lazy" src="/src/assets/projects/polikatikia1920x1570.jpg" alt="Alt text" />
							</picture>
						</figure>
						
					</div>
					<div className="discover__content">
						<div className="discover__header">
						<figure className="discover__logo">
							<picture>
							<img src={polikatikialogo} alt="POLIKATIKIA" />
							</picture>							
						</figure>	
							{/* <h2 className="discover__title">POLIKATIKIA</h2> */}
							<p>Front-End developer</p>
						</div>
						<div className="discover__actions">
							<a className="button" href="https://polikatikia.gr/" target="_blank">
								<span>VISIT</span>
							</a>
							<a className="button" href="https://business.polikatikia.gr/" target="_blank">
								<span>BUSINESS PAGE</span>
							</a>
						</div>

					</div>
				</SwiperSlide>
				<SwiperSlide className="discover__item">
					<div className="discover__bg">                          
						<figure className="discover__img">
							<picture>						
								<source srcSet="/src/assets/projects/holland1920x1570.webp" type="image/webp" media="(min-width: 641px)"/>	
								<source srcSet="/src/assets/projects/holland640x523.webp" type="image/webp" media="(max-width: 640px)"/>			
								<img loading="lazy" src="/src/assets/projects/holland1920x1570.jpg" alt="Alt text" />
							</picture>
						</figure>
							
					</div>
					<div className="discover__content">
						<div className="discover__header">
						<figure className="discover__logo discover__logo--holland">
							<picture>
							<img loading="lazy" src={hollandandbarrettlogo} alt="HOLLAND & BARRETT" />
							</picture>							
						</figure>
							{/* <h2 className="discover__title">HOLLAND & BARRETT</h2> */}
							<p>Front-End developer</p>
						</div>
						<div className="discover__actions">
							<a className="button" href="https://www.hollandandbarrett.gr" target="_blank">
								<span>VISIT</span>
							</a>
						</div>

					</div>
				</SwiperSlide>
				<SwiperSlide className="discover__item">
					<div className="discover__bg">                          
						<figure className="discover__img">
							<picture>						
								<source srcSet="/src/assets/projects/sustainability1920x1570.webp" type="image/webp" media="(min-width: 641px)"/>	
								<source srcSet="/src/assets/projects/sustainability640x523.webp" type="image/webp" media="(max-width: 640px)"/>			
								<img loading="lazy" src="/src/assets/projects/sustainability.jpg" alt="Alt text" />
							</picture>
						</figure>
						
					</div>
					<div className="discover__content">
						<div className="discover__header">
						<figure className="discover__logo discover__logo--visit">
							<picture>
							<img loading="lazy" src={sustainlogo} alt="SUSTAINABLE GREECE" />
							</picture>							
						</figure>	
							{/* <h2 className="discover__title">SUSTAINABLE GREECE</h2> */}
							<p>Front-End developer</p>
						</div>
						<div className="discover__actions">
							<a className="button" href="https://sustainability.visitgreece.gr/" target="_blank">
								<span>VISIT</span>
							</a>
						</div>

					</div>
				</SwiperSlide>
			</Swiper>

			</div>
		</section>
    </>
  )
}

export default Discover
