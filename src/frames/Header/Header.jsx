import Hero from '../../components/Hero/Hero'
import NavBar from '../../components/NavBar/NavBar'
import './Header.css'

const Header = () => {
  return (
    <>
    <div className="header__container relative">
        
        <NavBar />
        <Hero />
        <img className='hero__img' src="images/building.svg" alt="building" />
    </div>
    </>
  )
}

export default Header