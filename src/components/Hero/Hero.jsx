import './Hero.css'

const Hero = () => {
  return (
    <div className="hero__container">
        <div className='hero__content flex flex-col'>
          <h1>Discover a place you will love to live</h1>
          <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.</text>
          <div className='hero__info flex flex-wrap justify-center items-center'>

            <div className="hero__card flex justify-center items-end">
              <div className="card__box flex justify-center items-center">
                <img src="images/location.png" alt="location" />
              </div>

              <div className="card__text flex flex-col ">
                <p>Location</p>
                <span>Ahmedabad, India</span>
              </div>
            </div>

            <div className="hero__card flex justify-center items-end">
              <div className="card__box flex justify-center items-center">
                <img src="images/dollar.png" alt="dollar" />
              </div>

              <div className="card__text flex flex-col ">
                <p>Price</p>
                <span>$1000 - $10,000</span>
              </div>
            </div>

            <div className="hero__card flex justify-center items-end">
              <div className="card__box flex justify-center items-center">
                <img src="images/house.svg" alt="house" />
              </div>

              <div className="card__text flex flex-col ">
                <p style={{width:'126px'}}>Type of Property</p>
                <span>Apartment</span>
              </div>
            </div>
             
          </div>
          {/* <img className='hero__img' src="images/building.svg" alt="building" /> */}
        </div>
    </div>
  )
}

export default Hero