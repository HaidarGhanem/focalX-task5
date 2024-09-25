import Title from '../Title/Title'
import './Works.css'

const Works = () => {
  return (
    <div className="works__container">
        <Title title='How it Works' desc='Lorem ipsum dolor sit amet, consectetur adipiscing eli' />

        <div className='works__cards__container flex flex-wrap justify-center items-center'>
            <div className='works__card flex flex-col justify-center items-start'>
                <img src="images/search.png" alt="search" />
                <h3>Search Apartment</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.</span>
            </div>

            <div className='works__card flex flex-col justify-center items-start' style={{background:'#025595' , color: 'white'}}>
                <img src="images/select.png" alt="select" />
                <h3>Select Apartment</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.</span>
            </div>
       
            <div className='works__card flex flex-col justify-center items-start'>
                <img src="images/confirm.png" alt="confirm" />
                <h3>Confirm Apartment</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.</span>
            </div>
        </div>
    </div>
  )
}

export default Works