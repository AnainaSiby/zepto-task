"use client"
import Chips from "../Chips/chips";
import { FaUserCircle } from "react-icons/fa";

export default function ChipSelector(){
    const items = [
        {   
            icon:<FaUserCircle />,
            name:"Anaina",
            email:"anaina@gmail.com"
        },
        {   
            icon:<FaUserCircle />,
            name:"Betty",
            email:"betty@gmail.com"
        },
        {   
            icon:<FaUserCircle />,
            name:"Noel",
            email:"noel@gmail.com"
        },
        {   
            icon:<FaUserCircle />,
            name:"Edward",
            email:"edward@gmail.com"
        },
        {   
            icon:<FaUserCircle />,
            name:"Ashly",
            email:"ashly@gmail.com"
        },
        {   
            icon:<FaUserCircle />,
            name:"Lisa",
            email:"lisa@gmail.com"
        }
    ]
    return(
        <div>
           <Chips initialItems={items} />
        </div>
    )
}