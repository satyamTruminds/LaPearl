import React, { useState } from "react";
import SectionHeader from "../../Reusable/SectionHeader";
import Gallery1 from "../../../Assets/gallery/GalleryPortrait01.jpg";
import Gallery2 from "../../../Assets/gallery/GalleryPortrait02.jpg";
import Gallery3 from "../../../Assets/gallery/GalleryPortrait03.jpg";
import Gallery4 from "../../../Assets/gallery/GalleryPortrait04.jpg";
import Gallery5 from "../../../Assets/gallery/GalleryPortrait05.jpg";
import Gallery6 from "../../../Assets/gallery/GalleryPortrait06.jpg";
import Gallery7 from "../../../Assets/gallery/GalleryPortrait07.jpg";
import Gallery8 from "../../../Assets/gallery/GalleryPortrait08.jpg";
import Gallery9 from "../../../Assets/gallery/GalleryPortrait09.jpg";
import Gallery10 from "../../../Assets/gallery/GalleryPortrait10.jpg";
import salonIcon from "../../../Assets/salon.svg";
import locationIcon from "../../../Assets/location.svg";
import clockIcon from "../../../Assets/clock.svg";
import "./style.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import AppointmentButton from "../../Reusable/AppointmentButton";
import Modal from "react-bootstrap/Modal";

const Gallery = () => {
  const [open, setOpen] = React.useState(false);
  const [img, setImg] = useState();

  const gallery = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
    Gallery9,
    Gallery10,
  ];
  const imageClick = (e) => {
    setImg(e);
    setOpen(true);
    console.log(e);
  };
  return (
    <div className="galleryWrapper">
      <div className="galleryWrap">
        <SectionHeader
          header={"Gallery"}
          info="La Pearl's Gallery"
          showInGallery={true}
        />
        <p className="galleryInfo">
          Welcome to our beauty studio's gallery page! Here, you'll find a
          stunning showcase of our exquisite makeup works and a sneak peek into
          our charming studio. The makeup images include makeup for various
          occasions, from ball events to weddings, make up competitions, and
          fashion shoots.
          <p>
            We offer a variety of a wide variety of massage options and beauty
            services, including facials, waxing, eyelash extension, threading,
            makeup, henna tattoos, manicure, and pedicure.
          </p>
        </p>
        {/* <div className='galleryShowcase'> */}
        <ImageList variant="masonry" cols={3} gap={8}>
          {gallery.map((e, index) => {
            return (
              <ImageListItem key={index}>
                <img
                  className="galleryImg"
                  onClick={() => imageClick(e)}
                  src={e}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
        {/* </div> */}
      </div>
      <section className="ContactWrapper" id="contactSection">
        <SectionHeader header={"Contact Us"} showSocial={true} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65238383.71714703!2d76.34844634110172!3d-3.625157028285501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d4003546629fbed%3A0xfd485c10e29f650d!2sLa%20Pearl%20Beauty%20Studio!5e0!3m2!1sen!2sin!4v1682275969111!5m2!1sen!2sin"
            height="450"
            style={{
              border: 0,
              marginTop: "30px",
              width: "100%",
              marginBottom: "30px",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="contactInfoWrapper">
            <div className="contactInfo">
              <img src={locationIcon} />
              <div>
                <h3>Address</h3>
                <p>
                  9 Edith Collier Drive, Otamatea, Whanganui 4500, New Zealand
                </p>
              </div>
            </div>
            <div className="contactInfo">
              <img src={clockIcon} />
              <div>
                <h3>Opening Hours</h3>
                <p>
                  {/* <b>Mon - Sat : 9am - 6pm</b> 
                                    <br/> */}
                  Our usual working hours are Monday to Saturday, between 9am to
                  6pm. Occasionally, we can offer appointments after 6pm and on
                  Sundays to accommodate you.
                </p>
              </div>
            </div>
            <div className="contactInfo">
              <img src={salonIcon} />
              <div>
                <h3>Book an Appoinment</h3>
                <p>
                  To book an appointment, please get in touch using one of the
                  options provided or call us on 021 026 07273.
                </p>
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
      <Modal show={open} size="lg" onHide={() => setOpen(false)}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal title</Modal.Title> */}
        </Modal.Header>

        <Modal.Body>
          <img className="galleryPopImage" src={img} />
        </Modal.Body>
      </Modal>
      <section className="footerMain">All Rights Reserved.</section>
    </div>
  );
};

export default Gallery;
