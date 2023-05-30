import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import profile from "../../../Assets/profile.jpg";
import "./style.css";
import quote from '../../../Assets/quote.svg'
import Kyra from '../../../Assets/Testimonials/Kyra Garrett.jpg'
import Shontelle from '../../../Assets/Testimonials/Shontelle Mortensen.jpg'
import Mahalia from '../../../Assets/Testimonials/Mahalia Mareikura.jpg'
import Ngareta from '../../../Assets/Testimonials/Ngareta Patea.jpg'
import Stevie from '../../../Assets/Testimonials/Stevie-Rae Brynes.jpg'
import Toni from '../../../Assets/Testimonials/Toni Connell-Regan.jpg'

const Testimonial = () => {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      centerMode = {true}
      // centerSlidePercentage = {45}
      showIndicators={false}
      autoPlay={true}
      className="testimonialCarousel"
    >
      <div className="testimonial">
        <div className="testimonialOwner">
          <img className="testimonialOwnerImage" src={Kyra} />
          <p className="ownerName">Kyra Garrett</p>
        </div>
        <hr className="hrMain" />
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"start"}}>
          <img className="quoteIcon" src={quote}/>
          <p className="testimonialContent">
            Honesty, feel so refreshed every time I come for an appointment. My favourite go to when I need some self-love X.
          </p>
        </div>
      </div>  
      <div className="testimonial">
        <div className="testimonialOwner">
          <img className="testimonialOwnerImage" src={Shontelle} />
          <p className="ownerName">Shontelle Mortensen</p>
        </div>
        <hr className="hrMain" />
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"start"}}>
          <img className="quoteIcon" src={quote}/>
          <p className="testimonialContent">
            Amazing services! Thank you so much for my beautiful makeup on my wedding day, my facial was amazing on my sensitive skin, just all round happy with everything. Thankyou! Highly recommended.          
          </p>
        </div>
      </div>
      <div className="testimonial">
        <div className="testimonialOwner">
          <img className="testimonialOwnerImage" src={Mahalia} />
          <p className="ownerName">Mahalia Mareikura</p>
        </div>
        <hr className="hrMain" />
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"start"}}>
          <img className="quoteIcon" src={quote}/>
          <p className="testimonialContent">
            Highly recommended: very professional with quality standards. All the services I have had, have been excellent, including waxing, threading, and massage services among others. Her space is very clean and tidy, with very relaxing music. Looking forward to getting my makeup done by her shortly. 
          </p>
        </div>
      </div>    
      <div className="testimonial">
        <div className="testimonialOwner">
          <img className="testimonialOwnerImage" src={Ngareta} />
          <p className="ownerName">Ngareta Patea</p>
        </div>
        <hr className="hrMain" />
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"start"}}>
          <img className="quoteIcon" src={quote}/>
          <p className="testimonialContent">
            I always have a great experience. During the massage, Sumiti has a way of allowing me to unconsciously sleep - in my experience, this is a true mark of professional service!
          </p>
        </div>
      </div>    
      <div className="testimonial">
        <div className="testimonialOwner">
          <img className="testimonialOwnerImage" src={Stevie} />
          <p className="ownerName">Stevie-Rae Byrnes</p>
        </div>
        <hr className="hrMain" />
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"start"}}>
          <img className="quoteIcon" src={quote}/>
          <p className="testimonialContent">
          Have been getting my eyebrows done here for years now, love her work and finishes late which is super useful as most places close before finishing work.
          </p>
        </div>
      </div>    
      <div className="testimonial">
        <div className="testimonialOwner">
          <img className="testimonialOwnerImage" src={Toni} />
          <p className="ownerName">Toni Connell-Regan</p>
        </div>
        <hr className="hrMain" />
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"start"}}>
          <img className="quoteIcon" src={quote}/>
          <p className="testimonialContent">
          Beautiful, relaxing Deluxe Facial with a Facial massage. Absolutely loved it!
          </p>
        </div>
      </div>    
    </Carousel>
  );
};

export default Testimonial;
