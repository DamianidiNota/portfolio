
export const brands = [
	{
	  title:"ikea",
	  src: "src/assets/projects/ikealogo.svg"
	},
	{
		title:"illy",
		src: "src/assets/brands/illy.svg"
	  },
	  {
		title:"Gregorys",
		src: "src/assets/projects/gregoryslogo.svg"
	  },
	  {
		title:"sklavenitis",
		src: "src/assets/brands/sklavenitis.svg"
	  },
	  {
		title:"Polikatikia",
		src: "src/assets/projects/polikatikialogo.svg"
	  },
	  {
		title:"hollandandbarrett",
		src: "src/assets/projects/hollandandbarrettlogo.svg"
	  },
	 
	  {
		title:"protothema",
		src: "src/assets/brands/protothema.svg"
	  },
	  {
		title:"SustainableGreece",
		src: "src/assets/brands/SustainableGreece.svg"
	  },
	  {
		title:"opap",
		src: "src/assets/brands/opap.svg"
	  },
	  {
		title:"iqos",
		src: "src/assets/brands/iqos.svg"
	  },
	  {
		title:"vianex",
		src: "src/assets/brands/vianex.svg"
	  },
	  {
		title:"eurobank",
		src: "src/assets/brands/eurobank.svg"
	  },
	  {
		title:"Aegean",
		src: "src/assets/brands/Aegean.svg"
	  },
	  {
		title:"piop",
		src: "src/assets/brands/piop.svg"
	  },
	  {
		title:"bed&bath",
		src: "src/assets/brands/bedbath.svg"
	  },
  ];

function Brands() {
  return (
    <>
  		<section id="clients" className="section section--brands">
			<div className="wrapper">
				<div className="section__header">
					<h2 className="section__title">HIGHLIGHTED CLIENTS</h2>
				</div>		
				<div className="brands">
				{/* {brands.map((brand) => {
                    const { title, src} = brand;
                    return (
						<div className={`brands__item brands__item--${ title }`} key={title}>			     
								<figure className="brands__img">
									<picture>								
										<img  loading="lazy"  src={src} alt={title} title={title} />
									</picture> 
								</figure>
						</div>
                    );
                  })} */}


				  {brands.map((brand) => {
					const {title , src} = brand;

					return(
						<div className={`brands__item brands__item--${ title } `} key={title}>
						<figure className="brands__img">
									<picture>								
										<img  loading="lazy"  src={src} alt={title} title={title} />
									</picture> 
								</figure>
						</div>
					)
				  })}
				  </div>	
			</div>
		</section>	
    </>
  )
}

export default Brands
