import React from 'react'

const NoteStyle  = {
        margin: "40px",
        width:  "auto",
        height:  "auto",
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor: "rgba(160, 160, 160, 0.062)",
        borderRadius: "1rem",
        boxShadow: "0px 4px 8px rgba(168, 173, 173, 0.322)"
}
const iconSectionStyle = {
        margin: "20px",
        width: "20%",
        height: "80%",
        backgroundColor: "rgba(82, 131, 221, 0.144)",
        borderRadius: "0.6rem",
        transition: "all 0.3s ease-in-out",
        flexShrink: "0",
        marginRight: "40px",
        zIndex: "1"
}

const infoSectionStyle = {

}


const Note = ( {callback, onClick,  img, title, text, video, modal } ) => {

        //Here declare your function//
        const executeCallback = ()=>{
                callback(true, modal); //Execute the callback
                return true;
        }
        return (
                // <div style = {NoteStyle} className = ".NoteStyle"  >
                //Because I need a hover
                <div className = "NoteStyle" onClick = {executeCallback}  > 
                        <div style = { { display:"flex", }  }>
                                
                                <img style = {iconSectionStyle}  src={img} alt=""/>
                                <div style = {infoSectionStyle} >
                                        <h1>{title}</h1>
                                        <p>
                                        {text}
                                        </p>
                                </div>
                        </div>
                </div>

        )
}
export default Note;
