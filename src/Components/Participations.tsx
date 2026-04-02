
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

export const parts = [
	{
	  title:"Aegean",
	  href: "https://el.aegeanair.com/",
	  src: "/src/assets/portfolio/aegean.jpg",
	  webp:"/src/assets/portfolio/aegean.webp",
	  desc: "Rebranding 2021 and redesign 2017"
	},
	{
		title:"Lego Greece",
		href: "https://www.lego.storegreece.gr/",
		src: "/src/assets/portfolio/lego.jpg",
		webp:"/src/assets/portfolio/lego.webp",
		desc: "bug fixing"
	  },
	{
		title:"Moustakas toys",
		href: "https://www.moustakastoys.gr/",
		src: "/src/assets/portfolio/moustakas.jpg",
		webp:"/src/assets/portfolio/moustakas.webp",
		desc: "bug fixing"
	  },
	  {
		title:"Pamestoixima",
		href: "https://blog.pamestoixima.gr/",
		src: "/src/assets/portfolio/pamestoixima.jpg",
		webp:"/src/assets/portfolio/pamestoixima.webp",
		desc: "streaming pages and bug fixing"
	  },
	  {
		title:"Allsmart",
		href: "https://www.allsmart.gr/",
		src: "/src/assets/portfolio/allsmart.jpg",
		webp:"/src/assets/portfolio/allsmart.webp",
		desc: "pages and bug fixing"
	  },
	  
  ];

  export const parts2 = [
	
	 
	 
	  {
		title:"Startv",
		href: "https://www.star.gr/tv",
		src: "/src/assets/portfolio/star.jpg",
		webp:"/src/assets/portfolio/star.webp",
		desc: "website till 2022 and bugfixing"
	  },
	  {
		title:"Eurobank",
		href: "https://ebanking.eurobank.gr/#/login",
		src: "/src/assets/portfolio/eurobank.jpg",
		webp:"/src/assets/portfolio/eurobank.webp",
		desc: "Pages"
	  },
	  {
		title:"Goodys",
		href: "https://www.goodys.com/",
		src: "/src/assets/portfolio/goodys.jpg",
		webp:"/src/assets/portfolio/goodys.webp",
		desc: "bugfixing and new checkout flow"
	  },
	  {
		title:"Everest",
		href: "https://www.everest.gr/",
		src: "/src/assets/portfolio/everest.jpg",
		webp:"/src/assets/portfolio/everest.webp",
		desc: "bugfixing"
	  },
	  {
		title:"Attica",
		href: "https://www.atticadps.gr/",
		src: "/src/assets/portfolio/attica.jpg",
		webp:"/src/assets/portfolio/attica.webp",
		desc: "bugfixing"
	  },
	 
  ];

function Portfolio() {

  return (
    <>
	

  <section id="section2" className="section section--ivory2">
			<div className="wrapper">
				<div className="section__header">
					<h2 className="section__title">PARTICIPATIONS</h2>
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
					slidesPerView: 1.8,
					},
					768: {
					slidesPerView: 3.5,
					},
					1024: {
						slidesPerView: 4,
					},
					1440: {
						slidesPerView: 5,
					},
				}}>

  				{parts.map((part) => {
                    const { title, href, src, desc, webp } = part;
                    return (
						<SwiperSlide  className="portfolio__item" key={title}>
						
						<div className="portfolio__bg">         
							<figure className="portfolio__img">
								 <picture>	
								 <source srcSet={webp} type="image/webp"/>									
									<img  loading="lazy" src={src} alt="Alt text" />
								</picture> 
							</figure>
						</div>
						<div className="portfolio__content">
							<h4 className="portfolio__title"><a href={href} target="_blank"> {title}</a></h4>
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
					slidesPerView: 1.8,
					},
					768: {
					slidesPerView: 3.5,
					},
					1024: {
						slidesPerView: 4,
					},
					1440: {
						slidesPerView: 5,
					},
				}}>

  				{parts2.map((part2) => {
                    const { title, href, src, desc, webp } = part2;
                    return (
						<SwiperSlide  className="portfolio__item" key={title}>
						
						<div className="portfolio__bg">         
							<figure className="portfolio__img">
								 <picture>	
								 <source srcSet={webp} type="image/webp"/>									
									<img  loading="lazy" src={src} alt="Alt text" />
								</picture> 
							</figure>
						</div>
						<div className="portfolio__content">
							<h4 className="portfolio__title"><a href={href} target="_blank"> {title}</a></h4>
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
