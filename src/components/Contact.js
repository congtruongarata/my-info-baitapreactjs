
import '../App.js'
import { FaFacebookSquare, FaGooglePlusSquare, FaDribbbleSquare, FaTwitterSquare } from 'react-icons/fa'

function Contact() {
    return (
        <>
            <div className="card-box">
                <div className="section-title">
                    <h2>Contact</h2>
                    <div className='title-border'></div>
                </div>
                <div className="contact">
                    <form action="">
                        <div className="inputBox">
                            <input className="inputItem" type='text' placeholder='Name' required />
                            <input className="inputItem" type='number' placeholder='Phone' required />
                            <input className="inputItem" type='email' placeholder='Email' required />
                        </div>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Your message' required></textarea>
                        <button type='submit'>Submit Now</button>
                    </form>

                    <div class="social-links header-links text-center">
                        <ul>
                            <li><a href="#" ><FaFacebookSquare className='fbgh' /></a></li>
                            <li><a href="#" ><FaTwitterSquare className='fbgh' /></a></li>
                            <li><a href="#" ><FaGooglePlusSquare className='fbgh' /></a></li>
                            <li><a href="#" ><FaDribbbleSquare className='fbgh' /></a></li>
                        </ul>
                        <p>© 2022.Design Nguyen Cong Truong</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact