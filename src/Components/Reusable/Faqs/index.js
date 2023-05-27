import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import './style.css'

const Faqs = () => {
  return (
    <div style={{paddingTop:"35px"}}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What services do you offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer a variety of a wide variety of massage options and beauty services, including facials, waxing, eyelash extension, threading, makeup, henna tattoos, manicure, and pedicure. <Link to="/">Click here</Link> for a full list and prices.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What are your hours of operation?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our usual working hours are Monday to Saturday, between 9am to 6pm. Occasionally, we can offer appointments after 6pm and on Sundays to accommodate you. <a href="#contactSection">Click here</a> to contact us and book an appointment.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How can I make an appointment? Do you accept walk-ins?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can make an appointment through phone, What’s App, Facebook Messenger, and Instagram. Our busy schedule unfortunately doesn’t allow us to offer walk-ins. <a href="#contactSection">Click here</a> to contact us and book an appointment.          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What products do you use in your services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We only use high quality products for our services like Algologie for skin care, OPI for nails, and premium grapeseed and almond oil for massages. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Can I purchase gift vouchers?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, you can purchase gift vouchers for your loved ones, either for a specific service or for a specific amount which can be used for multiple services.           </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Do you offer package deals?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, we do offer customised package deals to make the deals special and suitable to your needs. <a href="#contactSection">Please get in touch</a> to discuss your requirements.           
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Do you have parking available?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, there is plenty of on-street free parking.           
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What methods of payment do you accept?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We currently payments through cash, pay to mobile, and online banking.          
          </Typography>
        </AccordionDetails>
      </Accordion>      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            What kind of pressure do you use for massage?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We can vary the pressure to suit your preferences; ranging between soft and gentle, and firm.           
          </Typography>
        </AccordionDetails>
      </Accordion>      
    </div>
  )
}

export default Faqs