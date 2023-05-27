import React, { useState } from 'react'
import AppointmentPopUp from '../AppointmentPopUp'


const AppointmentButton = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
  return (
    <div>
        <button className='navAppointmentButton' onClick={handleOpen}>Book Appointment</button>
        <AppointmentPopUp open={open} setOpen={setOpen} />
    </div>
  )
}

export default AppointmentButton