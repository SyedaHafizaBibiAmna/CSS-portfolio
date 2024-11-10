import "../style/hero.css";
import Image from "next/image";
import "../style/about.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

function About(){
    return(
        <div className="header-container">
            <div className="header-boxes-con">
                {/* left */}
                <div>
                   <Image src={"/images/about.jpg"}
                   width={200}
                   height={200}
                   className="header-image"
                   alt="Profile"/>
                  <div className="social-icon">
                 <Link href={""}> <FaFacebookSquare className="s-icon"/></Link>
                  <Link href={""}> <FaInstagram className="s-icon" /> </Link> 
                   <Link href={""}> <SiGmail className="s-icon"/> </Link>
                  </div>
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero gradient-text">
                        About Me
                    </h1>
                    <p className="des-hero">I’m a Business Graduate Specializing
                         in HR Management and a Passionate Web Developer.
                          I Combine Business Strategy with Technical Skills
                           to Create Solutions that Boost Efficiency and Employee Engagement.
                            Excited about the Intersection of HR and Technology, I’m
                             Eager to Help Organizations Thrive. Let’s
                              Connect and Collaborate!</p>
                          {/* <button className="hero-btn">Hire Me</button> */}
                </div>
            </div>

        </div>
    )
}
export default About;