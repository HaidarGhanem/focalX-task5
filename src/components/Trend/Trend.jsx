import Title from '../Title/Title'
import './Trend.css'

const Trend = ({ photos }) => {
  return (
    <div className="trend__container">
        <Title title='Most Trending' desc='Lorem ipsum dolor sit amet, consectetur adipiscing eli'  />
        <div className="trend__content flex justify-center items-center flex-wrap">
          {
            photos.map((element)=>{
              return(
                <div className="trend__card flex flex-col items-start">
                  <img src={element} alt="prop" />
                  <div className="trend__card__details flex flex-col items-start">
                      <h3>$300000</h3>
                      <p>Luxury Apartment in California</p>
                  </div>
                  <div className='card__details__location flex items-center justify-start'>
                      <img src='images/location2.png' alt="location2" />
                      <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Trend