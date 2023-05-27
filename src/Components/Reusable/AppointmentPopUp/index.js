import Whatsapp from "../../../Assets/whatsapp.png";
import Instagram from "../../../Assets/instagram.png";
import Phone from "../../../Assets/phone-call.png";
import Fb from "../../../Assets/messenger.png";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import locationIcon from "../../../Assets/location.svg";
import clockIcon from "../../../Assets/clock.svg";
import './style.css'

const AppointmentPopUp = (props) => {
  const handleClose = () => {
    props.setOpen(false);
  };
  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      className="popUpWrapper"
    >
      <DialogContent>
        <h1 style={{marginBottom:"0"}}>Book Your Appointment</h1>
        <p style={{marginTop:"10px"}}>
          To book an appointment, please get in touch using one the options
          provided
        </p>
        <div className="navSocials">
          <a className="navSocialLink" href="#">
            <img className="navSocialIcon" src={Phone} />
          </a>
          <a className="navSocialLink" href="#">
            <img className="navSocialIcon" src={Fb} />
          </a>
          <a className="navSocialLink" href="#">
            <img className="navSocialIcon" src={Instagram} />
          </a>
          <a className="navSocialLink" href="#">
            <img className="navSocialIcon" src={Whatsapp} />
          </a>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65238383.71714703!2d76.34844634110172!3d-3.625157028285501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d4003546629fbed%3A0xfd485c10e29f650d!2sLa%20Pearl%20Beauty%20Studio!5e0!3m2!1sen!2sin!4v1682275969111!5m2!1sen!2sin"
          height="300"
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentPopUp;
