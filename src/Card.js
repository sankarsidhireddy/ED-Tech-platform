import "./Card.css"
let Card=(props)=>{
   let data=props.data
   let ind=props.index
  


function GenCol(){
    let gencol=()=> Math.floor(Math.random() *256)
   return  `rgb( ${gencol()},${gencol()},${gencol()}`
}
// function GenCol2(){
//     let gencol= Math.floor(Math.random() *256)
//    return  `rgb( ${gencol},${gencol},${gencol}`
// }
let ran=GenCol()

// if(ind%2==0){ran=GenCol2() }

   return(
    // <div> <h1>Hire React JS Developers As Per Your Needs</h1> </div>
           
    
    <div className="maincon" style={{backgroundColor:ran}} >
        <div className="img"><img src={data.image}/></div>
        <div className="title">{data.title}</div>
        <div className="dec">{data.dec}</div>
        <div><i className={data.arrow}></i></div>
    </div>

    
   )
}
export default Card;