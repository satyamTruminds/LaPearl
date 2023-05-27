import React from 'react'
import SectionHeader from '../../Reusable/SectionHeader'
import Sumiti from '../../../Assets/SumitiAbout.jpg'
import './style.css'
import Faqs from '../../Reusable/Faqs'
import award from '../../../Assets/award.png'
import medal from '../../../Assets/medal.png'
import work from '../../../Assets/work-schedule.png'
import donation from '../../../Assets/donation.png'
import voucher from '../../../Assets/voucher.png'
import diamond from '../../../Assets/diamond.png'
import best from '../../../Assets/best.png'
import notes from '../../../Assets/notes.png'
import { Carousel } from "react-responsive-carousel";
import salonIcon from '../../../Assets/salon.svg'
import locationIcon from '../../../Assets/location.svg'
import clockIcon from '../../../Assets/clock.svg'
import AppointmentButton from '../../Reusable/AppointmentButton'

const About = () => {
  return (
    <div className='aboutWrapper'>
        <div className='aboutMainWrapper'>
            <SectionHeader header={'About  Us'} info={"What makes us, special!"}/>
            <div className='aboutLanding'>
                <img className='sumitiPic' src={Sumiti} />
                <div>
                    <h1>Hi, <br/> I’m Sumiti</h1>
                    <hr />
                    <p> Dear lovely ladies,<br />I am Sumiti, an award-winning and experienced beauty therapist, a mother of two beautiful kids, and a wife.</p> <p>I believe that every woman deserves to feel her best. I am passionate about helping women feel confident, beautiful, and relaxed. Whether you are looking to shape your eyebrows, get a relaxing massage or a rejuvenating facial, or makeup for your special day, I am here to help.</p><p>I am committed to creating a safe and welcoming environment for all women who come to me for treatments. I know that beauty is not just about looking good, but also feeling good from the inside out. That's why I always take the time to listen to my clients, understand their needs, and provide personalized recommendations that work for them.</p><p>I look forward to meeting and pampering you.</p>
                </div>
            </div>
            {/* <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            centerMode = {false}
            showIndicators={false}
            autoPlay={true}
            className="aboutCarousel"
            > */}
            <div className="aboutCarousel">
                <div className='aboutSlide'>
                    <img src={award}/>
                    <p>Award winning</p>
                </div>
                <div className='aboutSlide'>
                    <img src={medal}/>
                    <p>Certified</p>
                </div>
                <div className='aboutSlide'>
                    <img src={diamond}/>
                    <p>Affordable luxury</p>
                </div>
                <div className='aboutSlide'>
                    <img src={best}/>
                    <p>High quality products</p>
                </div>
                <div className='aboutSlide'>
                    <img src={voucher}/>
                    <p>Gift Vouchers</p>
                </div>
                <div className='aboutSlide'>
                    <img src={work}/>
                    <p>Flexible appointments</p>
                </div>
                <div className='aboutSlide'>
                    <img src={notes}/>
                    <p>Customised deals for special events</p>
                </div>
                <div className='aboutSlide'>
                    <img src={donation}/>
                    <p>Pamper Packages</p>
                </div>
            </div>
            {/* </Carousel> */}
            <section className='FaqWrapper'>
                <SectionHeader header={'FAQs'} info={'Read more on frequently asked questions'} />
                <Faqs />
            </section>
        </div>
        <section className='ContactWrapper' id="contactSection">
            <SectionHeader header={'Contact Us'} showSocial={true} />
            <div style={{display: 'flex', flexDirection: "column", alignItems:"center"}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65238383.71714703!2d76.34844634110172!3d-3.625157028285501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d4003546629fbed%3A0xfd485c10e29f650d!2sLa%20Pearl%20Beauty%20Studio!5e0!3m2!1sen!2sin!4v1682275969111!5m2!1sen!2sin" height="450" style={{border:0, marginTop: "30px", width:"100%", marginBottom:"30px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className='contactInfoWrapper'>
                    <div className='contactInfo'>
                        <img src={locationIcon} />
                        <div>
                            <h3>Address</h3>
                            <p>9 Edith Collier Drive, Otamatea, Whanganui 4500, New Zealand</p>
                        </div>
                    </div>
                    <div className='contactInfo'>
                        <img src={clockIcon} />
                        <div>
                            <h3>Opening Hours</h3>
                            <p>
                                {/* <b>Mon - Sat : 9am - 6pm</b> 
                                <br/> */}
                                Our usual working hours are Monday to Saturday, between 9am to 6pm. Occasionally, we can offer appointments after 6pm and on Sundays to accommodate you.
                            </p>
                        </div>
                    </div>
                    <div className='contactInfo'>
                        <img src={salonIcon} />
                        <div>
                            <h3>Book an Appoinment</h3>
                            <p>To book an appointment, please get in touch using one of the options provided or call us on 021 026 07273.</p>
                            {/* <p>
                                Mon - Fri : 10am - 4pm <br/>
                                Sat - Sun : 11am - 5pm
                            </p> */}
                            <AppointmentButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='footerMain'>
            All Rights Reserved.
        </section>
    </div>
  )
}

export default About