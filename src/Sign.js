import "./Sign.css"
let Sign=()=>{
    return(
        <div className="signpage">
            <input id="name" type="text" placeholder="Full Name*"/><br/>
            <input id="Email" type="text" placeholder="Email*"/><br/>
            <input id="no" type="text" placeholder="Phone No*"/><br/>
            <textarea id="msg" type="text" placeholder="Your Message*"/><br/>
            <button id="send">Send Message</button>
            <h1 id="let">Let's plan for a new project!</h1>
            <p className="one"></p>
            <p className="sign1">We understand your project perspective to convert your amazing ideas into reality.
                 Usher your business into a futuristic realm with our high-quality development services.</p>
            <p className="call">Call us for immediate support: +91 9371049039</p>
        </div>
    )
}
export default Sign;