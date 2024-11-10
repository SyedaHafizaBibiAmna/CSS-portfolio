import Link from "next/link";
import "../style/hero.css";
import Image from "next/image";

function Hero(){
    return(
        <div className="header-container">
            <div className="header-boxes-con">
                {/* left */}
                <div className="grid-container">
  <div className="motion-item">
    <div className="image-container">
      <img src="/images/hero-image.png"
      width={250}
      height={250}
      alt="Hero Image" />
    </div>
  </div>
</div>
                {/* <div>
                   <Image src={"/images/hero-image.png"}
                   width={200}
                   height={200}
                   className="header-image"
                   alt="Profile"/>
                </div> */}
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero gradient-text">
                        I'm Syeda Hafiza Bibi Amna
                        Begginner Web Developer
                    </h1>
                    <p className="des-hero"> "Passionate beginner Web Developer eager to Learn, Create,
                         and Grow in the World of Front-End and
                          Back-End Development."</p>
                          <button className="hero-btn">
                            <Link href={"https://milestone1-2-eosin.vercel.app/"}
                            className="hero-btn-link" target="_blank">
                            Hire Me</Link></button>
                </div>
            </div>

        </div>
    )
}
export default Hero;