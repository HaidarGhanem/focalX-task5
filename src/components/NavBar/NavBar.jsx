import { useState } from 'react'
import './NavBar.css'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const NavBar = () => {

  const Menu = () => (
    <>
      <p><a href="">Home</a></p>
      <p><a href="">About</a></p>
      <p><a href="">Services</a></p>
      <p><a href="">New Property</a></p>
      <p><a href="">Contact</a></p>
    </>
  )

  const [ toggle , setToggle ] = useState(false)

  return (
    <>
      <div className="navbar__container flex justify-between items-center ">
        <img src="images/logo.png" alt="flora_logo" />
        <ul className='navbar__content flex '>
          <Menu />
        </ul>
        <button className='login__btn text-white flex justify-center items-center'>Login</button>
      

        <div className="navbar__menu">
          {
            toggle
            ? <IoClose color='#025595' size='25.69px' onClick={()=>setToggle(false)}/>
            : <IoMenu color='#025595' size='25.69px' onClick={()=>setToggle(true)}/>
          }
        </div>
      </div>
      {
            toggle && (
              <div className="navbar__slide flex justify-center flex-col items-center">
                  <div className='menu__items flex flex-col text-start'>
                    <Menu />
                  </div>
                  <button className='menu__login__btn text-white flex justify-center items-center'>Login</button>
                </div>
                
            
            )
          }
    </>
  )
}

export default NavBar