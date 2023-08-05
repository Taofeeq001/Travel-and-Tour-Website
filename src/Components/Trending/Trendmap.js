import React from "react";
import switzerland from '../../Images/switzerland.png';
import destination from '../../Images/Destination 1.png';
import amazon from '../../Images/amazon.avif'
import egypt from '../../Images/egypt.webp'
import { AiOutlineCalendar } from "react-icons/ai";
import {CgProfile} from 'react-icons/cg';
import star from '../../Images/star.png';
import {GoLocation} from 'react-icons/go'


const Trend = [
    {
        "image": destination,
        "image2": switzerland,
        "calander": <AiOutlineCalendar/>,
        "days": "8 days",
        "profile": <CgProfile/>,
        "people": "25 People Going",
        "country": "Switzerland",
        "star": star,
        'location': <GoLocation/>,
        "continent": "Europe",
        "heading": "1,000 $",
        "del": "1,200 $",
        'word': "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
        "btn": "Explore Now"
    },
    {
        "image": amazon,
        "image2": switzerland,
        "calander": <AiOutlineCalendar/>,
        "days": "8 days",
        "profile": <CgProfile/>,
        "people": "25 People Going",
        "country": "Amazon",
        "star": star,
        'location': <GoLocation/>,
        "continent": "Europe",
        "heading": "1,000 $",
        "del": "1,200 $",
        'word': "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
        "btn": "Explore Now"
    },
    {
        "image": egypt,
        "image2": switzerland,
        "calander": <AiOutlineCalendar/>,
        "days": "8 days",
        "profile": <CgProfile/>,
        "people": "25 People Going",
        "country": "Giza",
        "star": star,
        'location': <GoLocation/>,
        "continent": "Europe",
        "heading": "1,000 $",
        "del": "1,200 $",
        'word': "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
        "btn": "Explore Now"
    }
]
export default Trend;