import { Link } from "react-router-dom"
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { useState, useEffect } from 'react'

export default function About () {
    const [ pageLoaded, setPageLoaded ] = useState(false)
    useEffect(()=>{
        setPageLoaded(true)
    }, [])
    return (
        <div className={pageLoaded ? "about-page visible" : "hidden"}>
            <h1 className="bold"><span>About</span> Me<span>.</span></h1>
            <div className="paras">
                <p>Hey there! I am Ansh Chauhan, an undergrad student @UMich’27 who loves coffee, coding, and cats. Welcome to my personal website.</p>
                <p>This website acts as a collection of all my projects and prospective ventures. I started my code journey learning Scratch (scratch.mit.edu) and progressed onto Python. I moved onto Front End Development with HTML/CSS/JS and finally ReactJS. With a high focus towards designing I tend to keep my UI/UX minimal and clean and easy to navigate.</p>
                <p>Alongside coding, coffee makes up for a lot of my daily schedule. Whether brewing French Press or Espresso, you can come over for coffee whenever. I always love a good brew at any time of the day.</p>
            </div>
            <Link to="/" className="button">
                <BsFillArrowLeftCircleFill id="icon"/>
                Home
            </Link>
        </div>
    )
}