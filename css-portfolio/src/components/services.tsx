import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaCameraRetro } from "react-icons/fa";
import { RiFileExcel2Line } from "react-icons/ri";


function Services(){
    return(
        <main className="main">
            <div className="ser-container">
{/* top div */}
<div className="top-div-ser">
    <h2 className="title-ser">My Services</h2>
    <p className="des-ser">Web Development for Small Businesses and Startups</p>
</div>
{/* bottom div */}
<div className="boxes-con">
    <div className="box">
        <FaLaptopCode className="ser-icon"/>
        <h3>Web Development</h3>
        <span>E-Commerce</span>
    </div>
    <div className="box">
        <TfiWrite className="ser-icon"/>
        <h3>Content Writing</h3>
        <span>Social Media</span>
    </div>
    <div className="box">
        <AiOutlineFileSearch className="ser-icon"/>
        <h3>Reseach Work</h3>
        <span>Market/Product Research</span>
    </div>
    <div className="box">
        <FaCameraRetro className="ser-icon"/>
        <h3>Photography</h3>
        <span>Asthetic,Product Photography</span>
    </div>
    <div className="box">
        <RiFileExcel2Line className="ser-icon"/>
        <h3>Ms Excelt</h3>
        <span>Accounts, Budget Reports</span>
    </div>
    {/* <div className="box">
        <FaLaptopCode className="ser-icon"/>
        <h3>Web Development</h3>
        <span>Blog, E-Commerce</span>
    </div>
    <div className="box">
        <FaLaptopCode className="ser-icon"/>
        <h3>Web Development</h3>
        <span>Blog, E-Commerce</span>
    </div> */}
</div>
            </div>
        </main>
    )
}
export default Services