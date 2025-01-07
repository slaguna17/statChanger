import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'


function Footer(){
    return(
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Support the page by sending your suggestions!
                </p>
                <p className='footer-subscription-text'>
                    Please send us an email at statchanger@gmail.com
                </p>
                <div className='input-areas'>
                    <form>
                        <input type="email" name="email" placeholder="Email" className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Send!</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/signup'>How it works</Link>
                        <Link to='/'>Testimonial</Link>
                        <Link to='/'>Carrers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Nintendo Media</h2>
                        <a href="https://www.instagram.com/nintendo/" target='_blank'>Instagram</a>
                        <a href="https://es-la.facebook.com/Nintendo/" target='_blank'>Facebook</a>
                        <a href="https://www.youtube.com/c/nintendo/videos" target='_blank'>Youtube</a>
                        <a href="https://twitter.com/NintendoAmerica?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target='_blank'>Twitter</a>
                    </div>
                </div>
            </div>    
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            StatChanger <i class="fa-solid fa-explosion"></i>
                        </Link>
                    </div>
                    <small className='website-rights'> <i className="fa-solid fa-copyright" /> Nintendo 2022</small>
                    <div className='social-icons'>
                        <a href="https://www.facebook.com/sergio.laguna.92/" target="_blank" aria-label='Facebook' className='social-icon-link facebook'>
                            <i className='fab fa-facebook'></i>
                        </a>
                        <a href="https://twitter.com/slaguna17" target="_blank" aria-label='Twitter' className='social-icon-link twitter'>
                            <i className='fab fa-twitter'></i>
                        </a>
                        <a href="https://www.instagram.com/slaguna17/" target="_blank" aria-label='Instagram' className='social-icon-link instagram'>
                            <i className='fab fa-instagram'></i>
                        </a>
                        <a href="https://www.youtube.com/channel/UCkjLCXcv3p4rsixpE-898Mg" target="_blank" aria-label='Youtube' className='social-icon-link youtube'>
                            <i className='fab fa-youtube'></i>
                        </a>
                        {/* <a to="/" target="_blank" aria-label='LinkedIn' className='social-icon-link linkedin'>
                            <i className='fab fa-linkedin'></i>
                        </a> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer