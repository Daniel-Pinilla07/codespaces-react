import './App.css';
//Crear un Componente
function Person(props){
  return(
    <div className="person" style = {{backgroundColor: props.color}}>
      <h3>Nombre: {props.nombre}</h3>
      <p>Edad: {props.edad}</p>
      <p>Salario: {props.salario}</p>
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1>
      {/*Esto es un comentario*/}
      <Person nombre="Richi" edad="19" salario="9999999" color = "#90d5ff"/>
      <Person nombre="Juancho" edad="20" salario="999999"/>
      <Person nombre="Matius" edad="20" salario="999999"color = "#6cb8e7"/>
    </div>
  );
}
