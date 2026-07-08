import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';


function About() {

	const skills = [
  "HTML5",
  "CSS3",
  "Sass",
  "JavaScript (ES6+)",
  "Figma",
  "Accessibility (WCAG)",
  "SEO",
  "UI/UX Implementation",
  "Responsive Design",
  "Chrome DevTools",
  "Gulp",
  "Visual Studio",
  "VS Code",
  "Git",
  "React",
  "TypeScript",
  "Cross-Browser Compatibility",
  "Email Development",
  "Maintenance Pages",
  "jQuery",
  "CSS Keyframes",
  "BEM",
  "Photoshop",
  "GSAP",
  "Performance Optimization",
  "Testing",
  "Illustrator",
  "Version Control",
  "Swiper",
  "Owl Carousel",
  "Debugging",
  "Bootstrap",
  "Base64",
  "NPM"
];
  return (
    <>
   <section id="about" className="section section--ivory">
			<div className="wrapper">
				<div className="section__header">
					<h2 className="section__title">ABOUT ME</h2>
				</div>
				<div className="content">
					<div className="content__img">
					<Swiper   className="content__img"
					modules={[Navigation, Pagination, Autoplay, EffectFade]}
					slidesPerView={1}
					speed={3000}
					effect={"fade"}
					autoplay={{delay: 6000}}
					>
						<SwiperSlide>
							<figure className="content__fig">
									<picture>						
										<source srcSet="assets/nota4.webp" type="image/webp" />
										<img src="assets/nota4.jpg" alt="Nota damianidi" />
									</picture>
								</figure>
						</SwiperSlide>
						<SwiperSlide>
							<figure className="content__fig">
									<picture>						
										<source srcSet="assets/nota2.webp" type="image/webp" />
										<img src="assets/nota2.jpg" alt="Nota damianidi" />
									</picture>
								</figure>
						</SwiperSlide>
					</Swiper>
					</div>
					<div className="content__desc">
					<p>Senior Front-End Developer with 12 years of experience in creating responsive and user-friendly websites.
						 Proficient in HTML5, CSS3, and JavaScript, with a strong foundation in UI/UX principles. 
						 
					</p>
				<hr></hr>
				<ul className="content__list">
				{skills.map((skills) => (
					<li key={skills}>{skills}</li>
					))}					
				</ul>
				</div>
				</div>
			</div>
		</section>	
    </>
  )
}

export default About
