import Title from '../Title/Title'
import './Find.css'

const Find = () => {
  return (
    <div className="find__container">
        <div className='find__title'><Title title='Find Dream House' desc='Lorem ipsum dolor sit amet, consectetur adipiscing eli' /></div>
        <div className='relative flex justify-center items-center'>
            <img src="images/find.png" alt="find" />
            <div className="img__cover__content flex flex-col items-center justify-center absolute">
                <h2>Find Dream Home</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
            </div>
        </div>
        
    </div>
  )
}

export default Find