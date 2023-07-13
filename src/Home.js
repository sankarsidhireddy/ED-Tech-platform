import Logo from './Logo';
import Request from './Request';
import Card from './Card';
import "./Home.css"


let Home=()=>{
    let data=[{ "c":"aqua", "image":"https://afourtech.com/wp-content/uploads/2023/03/React-Migration-and-Integration.png",
        "title":"React Migration & Integration Services","dec":"The integration of current online applications and systems with React is expertly assisted by our remote React developers.",
        "arrow":"fa-solid fa-arrow-right",},{"c":"pink", "image":"https://afourtech.com/wp-content/uploads/2023/03/React-custom-web-app-development.png",
        "title":"React Custom WebApp Development","dec":"Employ React programmers that can deliver projects quickly and offer dependable assistance for current projects.",
        "arrow":"fa-solid fa-arrow-right"},{"c":"red","image":"https://afourtech.com/wp-content/uploads/2023/03/Enterprise-react-web-apps.png",
        "title":"Enterprise React Web Apps","dec":"Employ React programmers that can deliver projects quickly and offer dependable assistance for current projects.",
        "arrow":"fa-solid fa-arrow-right"},{"c":"red","image":"https://afourtech.com/wp-content/uploads/2023/03/React-UI-UX-Development.png",
        "title":"React UI/UX Development","dec":"By maximizing the use of UI/UX libraries, we aim to deliver a fantastic user experience across all devices and platforms.",
        "arrow":"fa-solid fa-arrow-right"},{"c":"red","image":"https://afourtech.com/wp-content/uploads/2023/03/Interactive-UI-Development.png",
        "title":"Interactive UI Development","dec":"Employ React programmers that can deliver projects quickly and offer dependable assistance for current projects.",
        "arrow":"fa-solid fa-arrow-right"},{"c":"red","image":"https://afourtech.com/wp-content/uploads/2023/03/Dedicated-React-Developers.png",
        "title":"Dedicated React Developers","dec":"Employ devoted React programmers that are specialists in creating dynamic user interfaces for business apps by utilizing the latest technology.",
        "arrow":"fa-solid fa-arrow-right"}]
    return(
        <div>
     <Logo/>
    <Request/>
    <div>
    <h1 id='hire'>Hire React JS Developers As Per Your Needs</h1>
    <p id='We'>We offer our Indian clientele unmatched React.js development services. 
        Our well-established team of React.js developers uses cutting-edge technology 
        to produce high-quality, secure, and enterprise-oriented applications. The
         following list includes the numerous services for employing 
        React.js developers in India in accordance with your requirements.</p>
    <div className='main'>
    
    {data.map((item,index )=><Card data={item}  index={index} />)}
    </div>
    <img className='course' src='https://afourtech.com/wp-content/uploads/2022/11/Technology-Platform.png'/>
    <div className='pro'>
        <p className='pro1'>DO YOU WANT TO HIRE
        REACT.JS DEVELOPERS FOR YOUR NEXT PROJECT?</p>
        <button className='pro2'>Get started  &nbsp; &nbsp;<i class="fa-solid fa-arrow-right"></i></button>
    </div>
        </div>
        </div>
    )
}
export default Home;