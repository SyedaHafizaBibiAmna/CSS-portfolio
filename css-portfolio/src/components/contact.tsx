import "../style/contact.css";
import "../style/hero.css"
function Contact(){
    return(
        <main className="contac-main">
          
<div className="form-con">
<h1 className="title-hero gradient-text con-title"
                >Contact Us</h1>
    <form action=" " className="form">
        <input type="text" placeholder="Enter Your Name"/>
        <input type="email" placeholder="abc@gamil.com"/>
        <input className="msg" type="text" placeholder="Message"/>
    </form>
    <button className="btn">Submit</button>
</div>
        </main>
    )
}
export default Contact;