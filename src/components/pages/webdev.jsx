import { useEffect, useState } from "react"
import {AiFillGithub} from "react-icons/ai"
import {FaGlobeAmericas} from "react-icons/fa"
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import Tilty from "react-tilty"
import raw from './data.json'
import { Link } from "react-router-dom"
export default function WebDev(){
    const [ pageLoaded, setPageLoaded ] = useState(false)
    const [data, setData] = useState([])
    useEffect(()=>{
        setPageLoaded(true)
        setData(raw.webdev.projects)
    }, [data])
    return (
        <div className={ pageLoaded ? "webdev visible" : "hidden"}>
            <div className="hero">
                    <Link to="/" id="backbutton">
                        <BsFillArrowLeftCircleFill />
                    </Link>
                <h1 className="bold">Web Dev & Design.</h1>
                <p>A collection of my website designs and development projects</p>
            </div>
            <div className="items">
            {data.map((project)=>{
                    return(
                        <Item head={project.name} desc={project.description} link={project.link} hlink={project.github} key={project.link}/>
                    )
                })}
            </div>
        </div>
    )
}

function Item(props) {
    return(
        <Tilty className="item" glare={true} maxGlare={0.3} max={25}>
                    <div className="icons">{props.icons}</div>
                    <h2>{props.head}</h2>
                    <h3>{props.desc}</h3>
                    <a href={props.hlink}><AiFillGithub className="icon"/>View on Github</a>
                    <a href={props.link}><FaGlobeAmericas className="icon"/>Visit Project</a>
        </Tilty>
    )
}