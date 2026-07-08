
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


export const portfolios = [
	{
		title:"Sklavenitis",
		href: "https://www.sklavenitis.gr/",
		src: "assets/portfolio/sklavenitis.jpg",
		webp:"assets/portfolio/sklavenitis.webp",
		desc: "eshop"
	  },
	

	  {
		title:"Illy",
		href: "https://www.illy.gr/",
		src: "assets/portfolio/illy.jpg",
		webp:"assets/portfolio/illy.webp",
		desc: "eshop"
	  },
	  {
		title:"Gregorys",
		href: "https://www.gregorys.gr/",
		src: "assets/portfolio/gregorys.jpg",
		webp:"assets/portfolio/gregorys.webp",
		desc: "eshop"
	  },
	  {
		title:"Vianex",
		href: "https://www.vianex.gr/100years",
		src: "assets/portfolio/vianex.jpg",
		webp:"assets/portfolio/vianex.webp",
		desc: "vianex 100 years"
	  },
	  
  ];


  export const portfolios2 = [
	
	  {
		title:"Holland&barrett",
		href: "https://www.hollandandbarrett.gr/",
		src: "assets/portfolio/holland.jpg",
		webp:"assets/portfolio/holland.webp",
		desc: "eshop"
	  },
	  {
		title:"Sustainabilitygreece",
		href: "https://sustainability.visitgreece.gr/",
		src: "assets/portfolio/sustainable.jpg",
		webp:"assets/portfolio/sustainable.webp",
		desc: "corporate"
	  },
	  {
		title:"Gregorys Corporate",
		href: "https://corporate.gregorys.gr/",
		src: "assets/portfolio/gregoryscorporate.jpg",
		webp:"assets/portfolio/gregoryscorporate.webp",
		desc: "corporate"
	  },
	  {
		title:"Polikatikia",
		href: "https://polikatikia.gr/",
		src: "assets/portfolio/polikatikia.jpg",
		webp:"assets/portfolio/polikatikia.webp",
		desc: "corporate"
	  },
	  
  ];

  export const portfolios3 = [
	{
		title:"Protothema",
		href: "https://www.protothema.gr/",
		src: "assets/portfolio/protothema.jpg",
		webp:"assets/portfolio/protothema.webp",
		desc: "2017 - 2022 "
	  },
	  {
		title:"Chiosrunning",
		href: "https://www.chiosrunning.gr/",
		src: "assets/portfolio/chiosrunning.jpg",
		webp:"assets/portfolio/chiosrunning.webp",
		desc: "corporate"
	  }, 
	 
	  {
		title:"Rainbowwatters",
		href: "https://www.rainbowwaters.gr/",
		src: "assets/portfolio/rainbowwaters.jpg",
		webp:"assets/portfolio/rainbowwaters.webp",
		desc: "eshop"
	  },
	  {
		title:"Cityofathens",
		href: "https://www.cityofathens.gr/",
		src: "assets/portfolio/cityofathens.jpg",
		webp:"assets/portfolio/cityofathens.webp",
		desc: "corporate"
	  },
  ];
function Portfolio() {

  return (
    <>
	

  <section id="portfolio" className="section section--beige" >
			<div className="wrapper">
				<div className="section__header">
					<h2 className="section__title">PORTFOLIO</h2>
				</div>
			
			<div className="portfolio">
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={16}
				slidesPerView={3}
				scrollbar={{ draggable: true }}
				loop={true}
				breakpoints={{
					0: {
					slidesPerView: 1.3,
					},
					768: {
					slidesPerView: 2.5,
					},
					1024: {
						slidesPerView: 3,
					},
					1440: {
						slidesPerView: 4,
					},
				}}>

  				{portfolios.map((portfolio) => {
                    const { title, href, src, desc, webp } = portfolio;
                    return (
						<SwiperSlide  className="portfolio__item" key={title}>
						
						<div className="portfolio__bg">         
							<figure className="portfolio__img">
								 <picture>				
								 <source srcSet={webp} type="image/webp"/>					
									<img  loading="lazy" src={src} alt={title} />
								</picture> 
							</figure>
						</div>
						<div className="portfolio__content">
							<h4 className="portfolio__title"><a href={href} target="_blank">{title}</a></h4>
							<p> {desc}</p>
						</div>
						</SwiperSlide>
                    );
                  })}
	
				</Swiper>
			</div>
			<div className="portfolio">
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={16}
				slidesPerView={3}
				scrollbar={{ draggable: true }}
				loop={true}
				breakpoints={{
					0: {
						slidesPerView: 1.3,
					},
					768: {
					slidesPerView: 2.5,
					},
					1024: {
						slidesPerView: 3,
					},
					1440: {
						slidesPerView: 4,
					},
				}}>

  				{portfolios2.map((portfolio) => {
                    const { title, href, src, desc, webp } = portfolio;
                    return (
						<SwiperSlide  className="portfolio__item" key={title}>
						
						<div className="portfolio__bg">         
							<figure className="portfolio__img">
								 <picture>				
								 <source srcSet={webp} type="image/webp"/>					
									<img  loading="lazy" src={src} alt={title} />
								</picture> 
							</figure>
						</div>
						<div className="portfolio__content">
							<h4 className="portfolio__title"><a href={href} target="_blank">{title}</a></h4>
							<p> {desc}</p>
						</div>
						</SwiperSlide>
                    );
                  })}
	
				</Swiper>
			</div>
			<div className="portfolio">
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={16}
				slidesPerView={3}
				loop={true}
				scrollbar={{ draggable: true }}
				breakpoints={{
					0: {
						slidesPerView: 1.3,
					},
					768: {
					slidesPerView: 2.5,
					},
					1024: {
						slidesPerView: 3,
					},
					1440: {
						slidesPerView: 4,
					},
				}}>

  				{portfolios3.map((portfolio) => {
                    const { title, href, src, desc, webp } = portfolio;
                    return (
						<SwiperSlide  className="portfolio__item" key={title}>
						
						<div className="portfolio__bg">         
							<figure className="portfolio__img">
								 <picture>				
								 <source srcSet={webp} type="image/webp"/>					
									<img  loading="lazy" src={src} alt={title} />
								</picture> 
							</figure>
						</div>
						<div className="portfolio__content">
							<h4 className="portfolio__title"><a href={href} target="_blank">{title}</a></h4>
							<p> {desc}</p>
						</div>
						</SwiperSlide>
                    );
                  })}
	
				</Swiper>
			</div>
			</div>
		</section>
    </>
  )
}

export default Portfolio
