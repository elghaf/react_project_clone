import React,{useState} from 'react'
import Title from '../components/Title'

function Esignature() {
const inputStyle= {
    border:"none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0",
};
document.body.style.background = "#eee";

const [name, setName] = useState("noble");

const handlerNameChange = (e) =>{
setName(e.target.value)
}
return (
    <div className='container text-center'>
        <Title classes={"title"} text={name}/>
        <Title classes={"main-title"} text="Date"/>
        <p>
            ayoub is one of the best programmer in the world inchaallah,
            ila bra allah
            </p>
    <footer className='d-flex' style={{
        justifyContent: "space-around",
        position:"relative",
        top:"70vh"
    }}>
         <input type='date' value={""} style={inputStyle}/>
         <input type='text' value={name} style={inputStyle} onChange={handlerNameChange}/>
    </footer>
    </div>
  )
}

export default Esignature