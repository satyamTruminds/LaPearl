import React, { useEffect, useState } from 'react'
import Logo from '../../../Assets/La_Pearl_Logo_White.png'
import Location from '../../../Assets/location.png'
import Clock from '../../../Assets/clock.png'
import Whatsapp from '../../../Assets/whatsapp.png'
import Instagram from '../../../Assets/instagram.png'
import Phone from '../../../Assets/phone-call.png'
import Fb from '../../../Assets/messenger.png'
import "./style.css"
import { Link } from 'react-router-dom'
import AppointmentButton from '../AppointmentButton'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const SideNav = () => {
    const [currentPage, setCurrentPage] = useState();

    useEffect(() => {
      console.log(window.location.pathname);

      setCurrentPage(window.location.pathname);
    }, []);

  return (
    <>
        <Navbar bg="rgba(236,70,152,1)" expand="lg" sticky='top' className='mobileNavWrapper'>
        <Container>
            <Navbar.Brand href="#home">
                <img className='logo' src={Logo}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            {currentPage && <Nav className="me-auto">
                <Nav.Link><Link to="/" onClick={() => setCurrentPage("/")} className={(currentPage === "/" || currentPage === "")  ? `navButton active` : `navButton`}>Our Services</Link></Nav.Link>
                <Nav.Link><Link to="/about" onClick={() => setCurrentPage("/about")} className={currentPage === "/about" ? `navButton active` : `navButton`}>About Us</Link></Nav.Link>
                <Nav.Link><Link to="/gallery" onClick={() => setCurrentPage("/gallery")} className={currentPage === "/gallery" ? `navButton active` : `navButton`}>Gallery</Link></Nav.Link>
                <Nav.Link><Link to="/blog" onClick={() => setCurrentPage("/blog")} className={currentPage === "/blog" ? `navButton active` : `navButton`}>Blog</Link></Nav.Link>
                <Nav.Link style={{marginTop:"5px"}}><AppointmentButton /></Nav.Link>
            </Nav>}
            </Navbar.Collapse>
        </Container>
        </Navbar>
        <div className='desktopNavWrapper'>
            <img className='logo' src={Logo}/>
            <div className='navWrapper'>
                <Link className={(currentPage === "") ? `navButton active` : `navButton`} onClick={() => setCurrentPage("/")} to="/">Our Services</Link>
                <Link className={currentPage === "/about" ? `navButton active` : `navButton`} onClick={() => setCurrentPage("/about")} to="/about" >About Us</Link>
                <Link className={currentPage === "/gallery" ? `navButton active` : `navButton`} onClick={() => setCurrentPage("/gallery")} to="/gallery" >Gallery</Link>
                <Link className={currentPage === "/blog" ? `navButton active` : `navButton`} onClick={() => setCurrentPage("/blog")} to="/blog">Blog</Link>
            </div>
            <div className='navAppointment'>
                <AppointmentButton />
                <div className='navAppointmentDetails' style={{marginTop:"20px"}}>
                    <img src={Location}/>
                    <p>9 Edith Collier Drive, St. John hill. 4500 Whanganui, New Zealand</p>
                </div>
                <div className='navAppointmentDetails'>
                    <img src={Clock}/>
                    <p>Mon - Fri : 10am - 4pm <br />Sat - Sun : 11am - 5pm</p>
                </div>
                <div className='navSocials'>
                    <a className='navSocialLink' href="tel:+64272451641">
                        <img className='navSocialIcon' src={Phone}/>
                    </a>
                    <a className='navSocialLink' target='_blank' href="https://www.facebook.com/pages/category/hair-salon/La-Pearl-Beauty-Studio-652425244861774/">
                        <img className='navSocialIcon' src={Fb}/>
                    </a>
                    <a className='navSocialLink' target='_blank' href="https://www.facebook.com/pages/category/hair-salon/La-Pearl-Beauty-Studio-652425244861774/">
                        <img className='navSocialIcon' src={Instagram}/>
                    </a>
                    <a className='navSocialLink' target='_blank' href="https://wa.link/hgo2a3">
                        <img className='navSocialIcon' src={Whatsapp}/>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default SideNav