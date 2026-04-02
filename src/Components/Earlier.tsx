
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

export const earlys = [
	
	  {
		title:"Bedandbath",
		href: "https://www.atcom.gr/productions/recent-productions/bedandbath/",
		src: "/src/assets/portfolio/bedandbath.jpg",
		webp:"/src/assets/portfolio/bedandbath.webp",
		desc: "2016"
	  },
	  {
		title:"Freemeteo",
		href: "https://freemeteo.gr/mobile/",
		src: "/src/assets/portfolio/freemeteo.jpg",
		webp:"/src/assets/portfolio/freemeteo.webp",
		desc: "mobile site"
	  },
	  {
		title:"Novasports",
		href: "https://www.atcom.gr/productions/recent-productions/novasports/",
		src: "/src/assets/portfolio/novasports.jpg",
		webp:"/src/assets/portfolio/novasports.webp",
		desc: "sport news"
	  },
	  {
		title:"Agronews",
		href: "https://www.agronews.gr/",
		src: "/src/assets/portfolio/agronews.jpg",
		webp:"/src/assets/portfolio/agronews.webp",
		desc: "news"
	  },
	 
	  {
		title:"Hsauz",
		href: "https://www.atcom.gr/productions/recent-productions/hauz/",
		src: "/src/assets/portfolio/hauz.jpg",
		webp:"/src/assets/portfolio/hauz.webp",
		desc: "eshop"
	  },
	  {
		title:"Haralas",
		href: "https://www.atcom.gr/productions/recent-productions/haralas/",
		src: "/src/assets/portfolio/haralas.jpg",
		webp:"/src/assets/portfolio/haralas.webp",
		desc: "eshop"
	  },	
	  {
		title:"Zaplous",
		href: "https://www.atcom.gr/productions/recent-productions/zaplous/",
		src: "/src/assets/portfolio/zaplous.jpg",
		webp:"/src/assets/portfolio/zaplous.webp",
		desc: "travel"
	  },
	  {
		title:"Globalsat",
		href: "https://www.atcom.gr/productions/recent-productions/globalsat/",
		src: "/src/assets/portfolio/globalsat.jpg",
		webp:"/src/assets/portfolio/globalsat.webp",
		desc: "eshop"
	  },
  ];



function Portfolio() {

  return (
    <>
	

  <section id="section2" className="section section--earlier">
			<div className="wrapper">
				<div className="section__header">
					<h2 className="section__title">EARLIER</h2>
				</div>
			
			<div className="portfolio">
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={4}
				slidesPerView={3}
				pagination={{ clickable: true }}
				loop={true}
				breakpoints={{
					0: {
					slidesPerView: 1.7,
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

  				{earlys.map((early) => {
                    const { title, href, src, desc,webp } = early;
                    return (
						<SwiperSlide  className="portfolio__item portfolio__item--box" key={title}>
						
						<div className="portfolio__bg">         
							<figure className="portfolio__img">
								 <picture>						
								 <source srcSet={webp} type="image/webp"/>				
									<img  loading="lazy" src={src} alt="Alt text" />
								</picture> 
							</figure>
						</div>
						<div className="portfolio__content">
							<h5 className="portfolio__title"><a href={href} target="_blank"> {title}</a></h5>
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
