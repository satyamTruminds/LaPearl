import './style.css'
import Whatsapp from '../../../Assets/whatsapp.png'
import Instagram from '../../../Assets/instagram.png'
import Phone from '../../../Assets/phone-call.png'
import Fb from '../../../Assets/messenger.png'
import AppointmentButton from '../AppointmentButton'

const SectionHeader = (props) => {
  return (
    <div className='sectionHeaderWrapper'>
      <div>
        <h1 className='sectionHeader'>{props.header}</h1>
        <p className='sectionInfo'>{props.info}</p>
      </div>
      {props.showInGallery && <div className='headerActionWrapper'><a target="_blank" href="/#serviceSection" className='navAppointmentButton secondary'>Price List</a><a href="#contactSection" className='navAppointmentButton'>Contact Us</a></div>}
      {props.showButton && <div className='AppointmentButtonMobileWrapper'><AppointmentButton /></div>}
      {props.showSocial && <div className='navSocials'>
                <a className='navSocialLink' href="#">
                    <img className='navSocialIcon' src={Phone}/>
                </a>
                <a className='navSocialLink' href="#">
                    <img className='navSocialIcon' src={Fb}/>
                </a>
                <a className='navSocialLink' href="#">
                    <img className='navSocialIcon' src={Instagram}/>
                </a>
                <a className='navSocialLink' href="#">
                    <img className='navSocialIcon' src={Whatsapp}/>
                </a>
            </div>}
    </div>
  )
}

export default SectionHeader