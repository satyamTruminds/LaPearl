import './style.css'

const ServiceCard = (props) => {
  return (
    <div className='serviceCardWrapper'>
      <img src={props.src}/>
      <div className='serviceCard'>
        <table>
          <thead><th><h3>{props.service}</h3></th></thead>
          <tbody>
            {
              Object.keys(props.details).filter(e => e!=="img").map((e) => {
                return(
                  <tr>
                    <td className='serviceDet'>
                      <h4>{e}</h4>
                      {props.details[e].serviceDesc ? <p>{props.details[e].serviceDesc}</p> : <></>}
                    </td>
                    <td className='servicePrice'><b>{props.details[e].servicePrice}</b></td>
                  </tr>
                )
              })
            }
            {/* <tr>
              <td>
                <h4>Mini (30 minutes)</h4>
                <p>A basic skin care treatment including skin analysis, cleanse, toner and moisturize.</p>
              </td>
              <td><b>$35</b></td>
            </tr>
            <tr>
              <td>
                <h4>Deluxe (1 hour)</h4>
                <p>A complete skin care treatment including double cleanse, skin analysis, exfoliation, massage, mask, toner and moisturiser.</p>
              </td>
              <td><b>$55</b></td>
            </tr>
            <tr>
              <td>
                <h4>Deluxe with Hydrojelly Mask (1 hour)</h4> */}
                {/* <p>All services in Deluxe with Hydrojelly Mask</p> */}
              {/* </td>
              <td><b>$65</b></td>
            </tr>
            <tr>
              <td>
                <h4>Luxury Facial (90 minutes)</h4>
                <p>Includes Deluxe Facial + Foot, Hand, and Scalp Massage.</p>
              </td>
              <td><b>$85</b></td>
            </tr> */}
          </tbody>
        </table>
        {/* <button className='navAppointmentButton'>Book An Appointment</button> */}
      </div>
    </div>
  )
}

export default ServiceCard