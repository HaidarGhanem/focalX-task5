
import Title from '../Title/Title'
import './Deals.css'

const Deals = ({ deals }) => {
  return (
    <div className="deals__container">
        <Title title='Best Real Estate Deals' desc='Lorem ipsum dolor sit amet, consectetur adipiscing eli' />
        <div className="deals__content">
            <div className="deals__menu flex justify-start">
                <h3>Residential Property</h3>
                <h2>Commercial Property</h2>
                <h2>Agriculture Property</h2>
                <h2>Industrial Property</h2>
            </div>
            <div className='deals__photos flex justify-start flex-wrap'>
                {
                    deals.map((element)=>{
                        return (

                            <div className='deals__photo__box relative'>
                                <img src={element} alt="deal" />
                                <div className='photo__box__info flex absolute'>
                                    <div className='info__one flex justify-center items-center'>Featured</div>
                                    <div className='info__one flex justify-center items-center'>3D</div>
                                </div>
                            </div>
            
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Deals