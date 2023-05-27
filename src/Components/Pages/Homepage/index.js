import React from 'react'
import Faqs from '../../Reusable/Faqs'
import Slider from '../../Reusable/Slider'
import SectionHeader from '../../Reusable/SectionHeader'
import ServiceCard from '../../Reusable/ServiceCard'
import ServiceIMg from "../../../Assets/serviceImg.jpg"
import Testimonial from '../../Reusable/Testimonial'
import salonIcon from '../../../Assets/salon.svg'
import locationIcon from '../../../Assets/location.svg'
import clockIcon from '../../../Assets/clock.svg'
import { Carousel } from "react-responsive-carousel";
import "./style.css"
import AppointmentButton from '../../Reusable/AppointmentButton'
import services from './services'

const HomePage = () => {
  return (
    <div className='homepageWrapper'>
        <Slider />
        <div style={{padding: "20px 0px 0", width:"100%"}}>
            <div className='homeHeader'>
                <h1>Welcome to <span style={{color:"rgb(236,70,152)"}}>La Pearl Beauty Studio!</span></h1>
                <p style={{marginTop:"10px", fontFamily:"Jost", fontWeight:"400"}}><b>Our Promise:</b> Affordable luxury.</p>
            </div>
            <section className='serviceWrapper' id="serviceSection">
                <div className='sectionHeaderStickyWrapper'>
                    <SectionHeader showButton={true} header={'Our Services'} info={'We offer a variety of a wide variety of beauty services and massage options.'} />
                </div>
                <div className='serviceView'>
                    {Object.keys(services).map((e)=> {
                        return(
                            <ServiceCard src={ServiceIMg} details={services[e]} service={e} />
                        )
                    })}
                </div>
            </section>
            <section className='TestimonialsWrapper'>
                <SectionHeader style={{background:"white"}} header={'Our Client Testimonials'} info={'What our customers are saying about us'} />
                <Testimonial />
            </section>
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
                                <p>To book an appointment, please get in touch using one the options provided</p>
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
    </div>
  )
}

export default HomePage