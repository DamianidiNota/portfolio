import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';


function About() {

	const skills = ["HTML5", "CSS3","SASS", "VANILLA JAVASCRIPT", "FIGMA", "ACCESSIBILITY", "SEO", "UI/UX IMPLEMENTATION", "RESPONSIVE DESIGN", "DEVTOOLS", "GULP", "VISUAL STUDIO", "VSCode", "GIT", "REACT", "TYPESCRIPT", "CROSS-BROWSER", "NEWSLETTERS", "UNDERMAINTENANCE PAGES", "JQUERY", "KEYFRAMES", "BEM", "PHOTOSHOP", "GSAP", "PERFORMANCE OPTIMIZATION", "WCAG", "TESTING",
		"ILLUSTRATOR", "VERSION CONTROL", "SWIPER", "OWL", "DEBUGGING", "BOOTSTRAP", "BASE64", "LCP","CLS","NPM"];

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
										<source srcSet="/src/assets/nota2.webp" type="image/webp" />
										<img src="/src/assets/nota2.jpg" alt="Nota damianidi" />
									</picture>
								</figure>
						</SwiperSlide>
						 {/* <SwiperSlide >
							<figure className="promo__fig">
									<picture>						
										<source srcSet="/src/assets/nota1.webp" type="image/webp" />
										<img  loading="lazy" src="/src/assets/nota1.jpg" alt="Nota damianidi" />
									</picture>
								</figure>
						</SwiperSlide>  */}
						<SwiperSlide >
							<figure className="content__fig">
									<picture>						
										<source srcSet="/src/assets/nota3.webp" type="image/webp" />
										<img  loading="lazy" src="/src/assets/nota3.jpg" alt="Nota damianidi" />
									</picture>
								</figure>
						</SwiperSlide>
					</Swiper>
					</div>
					<div className="content__desc">
					<p>Detail-oriented Front-End Developer with 10 years of experience in creating responsive and user-friendly websites. Proficient in HTML5, CSS3, and JavaScript, with a strong foundation in UI/UX principles. Passionate about building creative animated websites.
					</p>
				{/* <p>
					I am Nota Damianidi, a 34-year-old Front-End Developer with a strong background in graphic and web design. </p><p>
					My journey began in Greece, where I studied graphic and web design, sparking my passion for the digital world. </p><p>
					After four years as a web designer, I transitioned into coding, which has been my focus ever since.
					</p><p>
					In 2014, I joined <a href="https://www.atcom.gr/" target="_blank" title="Atcom">Atcom Internet & Multimedia S.A.</a>, the largest website company in Greece, as a Front-End Developer and I have contributed to numerous high-profile projects.
					
				</p> */}
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
