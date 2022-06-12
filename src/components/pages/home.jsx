import "./styles.css";
import { useState } from "react";
import {
  FaInstagram,
  FaGithubSquare,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";
import { BsFillCameraFill, BsTextParagraph } from "react-icons/bs";
import { SiAdobephotoshop } from "react-icons/si";
import QuickLink from "./components/QuickLink";
export default function Home() {
  const [bgState, setBgState] = useState({ transform: "scale(1)" });
  const [imgState, setImgState] = useState({
    transform: "scale(1) rotate(0deg)",
  });
  const [msgState, setMsgState] = useState({
    transform: "scale(1) rotate(0deg)",
  });
  const [msg, setMsg] = useState("Hello!");
  const [wNotif, setWNotif] = useState(0);
  const [dNotif, setDNotif] = useState(0);
  const [rNotif, setRNotif] = useState(0);
  const [pNotif, setPNotif] = useState(0);
  return (
    <div className="home">
      <div className="hero">
        <div className="profile">
          <div
            className="img"
            onMouseEnter={() => {
              setBgState({
                transform: "scale(0.9)",
                backgroundImage:
                  "linear-gradient(45deg,var(--xiketic-vlight),var(--xiketic-vlight2))",
              });
              setImgState({ transform: "scale(1.2) rotate(5deg)" });
              setMsgState({ transform: "scale(1.1) rotate(-5deg)" });
              setMsg("(he/him)");
            }}
            onMouseLeave={() => {
              setBgState({
                transform: "scale(1)",
                backgroundImage:
                  "linear-gradient(45deg,var(--xiketic-light),var(--xiketic-vlight2))",
              });
              setImgState({ transform: "scale(1) rotate(0deg)" });
              setMsgState({ transform: "scale(1) rotate(0deg)" });
              setMsg("Hello!");
            }}
            style={bgState}
          >
            <img
              src="/img/profile.png"
              alt="Profile Pic"
              className="profile-img"
              style={imgState}
            />
            <div className="hello" style={msgState}>
              {msg}
            </div>
            <div className="about medium" style={{ position: "absolute" }}>
              About Me
            </div>
          </div>
          <div className="content">
            <h1 className="bold">Ansh Chauhan</h1>
            <p className="bio medium">Web Dev & Coffee.</p>
            <div className="socials">
              <FaInstagram className="icon" />
              <FaGithubSquare className="icon" />
              <FaEnvelope className="icon" />
            </div>
          </div>
        </div>
        <div className="quick-links">
          <div className="col">
            <div
              className="wrapper"
              onMouseEnter={() => {
                setWNotif(1);
              }}
              onMouseLeave={() => {
                setWNotif(0);
              }}
            >
              <div className="notif" style={{ opacity: wNotif }}>
                <FaCode className="icon" />
              </div>
              <QuickLink
                head="Web Development"
                description="A collection of my web dev work"
              />
            </div>
            <div
              className="wrapper"
              onMouseEnter={() => {
                setDNotif(1);
              }}
              onMouseLeave={() => {
                setDNotif(0);
              }}
            >
              <div className="notif" style={{ opacity: dNotif }}>
                <SiAdobephotoshop className="icon" />
              </div>
              <QuickLink
                head="Graphic Design"
                description="Designs that will blow your mind"
              />
            </div>
          </div>
          <div className="col">
            <div
              className="wrapper"
              onMouseEnter={() => {
                setRNotif(1);
              }}
              onMouseLeave={() => {
                setRNotif(0);
              }}
            >
              <div className="notif" style={{ opacity: rNotif }}>
                <BsTextParagraph className="icon" />
              </div>
              <QuickLink head="Resume" description="My Resume" />
            </div>
            <div
              className="wrapper"
              onMouseEnter={() => {
                setPNotif(1);
              }}
              onMouseLeave={() => {
                setPNotif(0);
              }}
            >
              <div className="notif" style={{ opacity: pNotif }}>
                <BsFillCameraFill className="icon" />
              </div>
              <QuickLink
                head="Photography"
                description="Oh the places I went"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
