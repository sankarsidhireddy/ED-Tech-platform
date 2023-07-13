import "./App.css"
import "./Login.css"
let Login=()=>{
    return(
        <div className="login1">
        <img className="img1" src="https://afourtech.com/wp-content/uploads/2023/03/AFourLogoWhite.png"/>
        <h1 id="h1">LOGIN FORM</h1>
        <h2 id="h2">Request a proposal</h2>
        <h3 id="H3">Add offer line here</h3>
        <p id="tec">Technology</p>
        <input id="input1" type="text" placeholder="Type technology or skill set*"/>
        <p id="ex">Experience</p>
        <p id="na">Name</p>
        <p id="ph">Phone No</p>
        <input id="n1" type="text" placeholder="Full Name*"/>
        <input id="n2" type="text" placeholder="Phone No*"/>
        <p id="b1">Business Email</p>
        <input id="n3" type="email" placeholder="Business Email*"/>
        <p id="m1">Message</p>
        <textarea type="text" placeholder="Message*"/>
        <button id="B1">Get a call back</button>
        </div>
         
    )
}
export default Login;