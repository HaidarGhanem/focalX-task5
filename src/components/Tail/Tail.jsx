import './Tail.css'

const Tail = () => {
  return (
    <div className="tail__container flex flex-col justify-start">
        <div className='big__tail flex flex-wrap justify-start'>
            <div className='tail__one flex flex-col justify-start'>
                <img src="images/logo.png" alt="logo" style={{width: '65.92px', height: '50.66px'}} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.</p>
            </div>
            <div className='tail__two flex flex-col justify-start'>
                <h3>Service</h3>
                <ul className='flex flex-col'>
                    <li>Payment & Tax</li>
                    <li>Features</li>
                    <li>View Booking</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className='tail__two flex flex-col about__tail justify-start'>
                <h3>About</h3>
                <ul className='flex flex-col'>
                    <li>About us</li>
                    <li>News</li>
                    <li>Pricing</li>
                    <li>New Property</li>
                </ul>
            </div>
            <div className='tail__two flex flex-col justify-start'>
                <h3>Our Location</h3>
                <p>2972 Westheimer Rd. Santa Ana, Ilpnois 85486 </p>
                <div className='tail__media flex justify-start'>
                    <a href=""><img src="images/fb.png" alt="facebook" /></a>
                    <a href=""><img src="images/tw.png" alt="twitter" /></a>
                    <a href=""><img src="images/in.png" alt="linkedIn" /></a>
                </div>
            </div>
        </div>

        <div className='tail__border'></div>

        <div className='small__tail flex justify-start flex-wrap'>
            <p>Copyright 2024 flora. All Rights Reserved</p>
            <div className='small__tail__end flex justify-start'>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Tail