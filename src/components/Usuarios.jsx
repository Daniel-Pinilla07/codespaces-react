export default function Usuarios(props){
        return(
        <div>
            <h1>Soy Usuario {props.nombre} y tengo {props.edad} años.</h1>
            <h2>La dirección es {props.direccion.calle} la ciudad es {props.direccion.ciudad}</h2>
        </div>
    )
}