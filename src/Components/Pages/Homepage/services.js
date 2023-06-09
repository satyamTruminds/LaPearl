import Service1 from '../../../Assets/Services/Service01 Facial.jpeg'
import Service2 from '../../../Assets/Services/Service02 Massage.jpeg'
import Service3 from '../../../Assets/Services/Service03 Waxing.jpeg'
import Service4 from '../../../Assets/Services/Service04 Eyelash Extension .jpeg'
import Service5 from '../../../Assets/Services/Service05 Eyes.jpeg'
import Service6 from '../../../Assets/Services/Service06 Threading.jpeg'
import Service7 from '../../../Assets/Services/Service07 Makeup.jpeg'
import Service8 from '../../../Assets/Services/Service08 Henna.jpeg'
import Service9 from '../../../Assets/Services/Service09 Manicure_Pedicure.jpeg'


const services = {
    "Facials":{
        "Mini (30 minutes)":{
            serviceDesc:"A basic skin care treatment including skin analysis, cleanse, toner and moisturize.",
            servicePrice:"$35"
        },
        "Deluxe (1 hour)":{
            serviceDesc:"A complete skin care treatment including double cleanse, skin analysis, exfoliation, massage, mask, toner and moisturiser.",
            servicePrice:"$55"
        },
        "Deluxe with Hydrojelly Mask (1 hour)":{
            servicePrice:"$65"
        },
        "Luxury Facial (90 minutes)":{
            serviceDesc:"Includes Deluxe Facial + Foot, Hand, and Scalp Massage.",
            servicePrice:"$85"
        },
        img: Service1
    },
    "Massage":{
        "Hot Stone (Back – 30 minutes)":{
            servicePrice:"$40"
        },
        "Hot Stone (Full Body – 1 hour)":{
            servicePrice:"$65"
        },
        "Swedish (Full Body – 1 hour)":{
            servicePrice:"$55"
        },
        "Indian Head Massage (30 minutes)":{
            servicePrice:"$40"
        },
        "Pregnancy Massage (1 hour)":{
            servicePrice:"$65"
        },
        "Reflexology (30 minutes)":{
            servicePrice:"$40"
        },
        "Reflexology (1 hour)":{
            servicePrice:"$65"
        },
        "Back Massage (30 minutes)":{
            servicePrice:"$40"
        },
        "Back Massage (45 minutes)":{
            servicePrice:"$55"
        },
        "Back Massage (1 hour)":{
            servicePrice:"$65"
        },
        "Head and Shoulder Massage (30 minutes)":{
            servicePrice:"$40"
        },
        "Foot Massage (30 minutes)":{
            servicePrice:"$40"
        },
        img: Service2

    },
    "Waxing":{
        "Half Leg (30 minutes)":{
            servicePrice:"$30"
        },
        "Full Leg (45 minutes)":{
            servicePrice:"$40"
        },
        "Bikini Line (25 minutes)":{
            servicePrice:"$20"
        },
        "Under Arms (25 minutes)":{
            servicePrice:"$25"
        },
        "Lower Arm (30 minutes)":{
            servicePrice:"$25"
        },
        "Full Arm (30 minutes)":{
            servicePrice:"$35"
        },
        "Eyebrows / Chin / Upper Lips (15 minutes)":{
            servicePrice:"$10"
        },
        "Neck (25 minutes)":{
            servicePrice:"$15"
        },
        img: Service3
    },
    "Manicure/Pedicure":{
        "Mini (30 minutes)":{
            serviceDesc:"Includes file and shape, cuticle work and paint.",
            servicePrice:"$35"
        },
        "Deluxe (1 hour)":{
            serviceDesc:"Full treatment including file and shape, cuticle work, exfoliation, massage and paint.",
            servicePrice:"$55"
        },
        img:Service9
    },   
    "Heena Tattoo":{
        "Per Option":{
            serviceDesc:"Options of different side of hands, arms, feet, legs and shoulders.",
            servicePrice:"$10"
        },
        "Custom Designs":{
            serviceDesc:"In general and for special occasions.",
            servicePrice:"By quotation"
        },
        img: Service8
    },
    "Eyes":{
        "Eye Complete (35 minutes)":{
            serviceDesc:"Includes eyelash tint, eyebrow tint and eyebrow shape.",
            servicePrice:"$40"
        },
        "Eyelash Tint":{
            servicePrice:"$20"
        },
        "Eyebrow Tint":{
            servicePrice:"$20"
        },
        "Eyebrow Shape (by Threading)":{
            servicePrice:"$7"
        },
        img:Service5
    },
    "Threading":{
        "Per Option":{
            serviceDesc:"Options include styling of eyebrows and removal of hair from forehead, eyebrows, upper lips and chin using a fine thread.",
            servicePrice:"$7"
        },
        img: Service6
    },
    "Makeup":{
        "Day / Evening (30 minutes)":{
            servicePrice:"$50"
        },
        "Wedding (90 minutes)":{
            servicePrice:"$70"
        },
        img:Service7
    },
    "Eyelash Extension":{
        "Classic (approximately 90 minutes)":{
            servicePrice:"$70"
        },
        "Lash removal":{
            servicePrice:"$20"
        },
        img: Service4
    },
}

export default services;