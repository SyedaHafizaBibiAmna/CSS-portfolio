import "../style/education.css";
import "../style/hero.css";

function Education(){
    return(
        <main className="edu-main">
            <div className="edu-text">
                <h1 className="title-hero gradient-text"
                >Education</h1>
            </div>
            {/* education list */}
            <div className="edu-box-con">
                <div>
                    <ul>
                        <li className="edu-li">
                    <h1 className="uni-text">
                        Bachelor of Business Administration</h1>
                <span>Benazir Bhutto Shaheed University</span></li>
                <li className="edu-li">
                    <h1 className="uni-text">
                    Governor Sindh Initiative for
                    Artificial Intelligence, Web 3.0 & Metaverse</h1>
                <span>Governor House Sindh</span></li>
                </ul>
                </div>  
                  
            </div>
           
        </main>
    )
}
export default Education;