

const Barra = (props) => {
        return (
                <div className  = "BarraElement">
                        <div className = "Name" >{ props.tag}</div>
                        
                        <div className =  "Barra">
                                <div className = "BarraActual">{props.value}</div>     
                        </div>
                        
                </div>
        )
}
export default Barra;
