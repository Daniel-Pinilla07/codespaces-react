import{useState} from 'react';
export function Calculadora(){
    //Estados o Hooks para los numeros operadores y resultados

    const[num1,setNum1]= useState('');
    const[num2,setNum2]= useState('');                    
    const[resultado,setResultado]= useState(null);
    const[signo,setSigno]= useState('suma');

    const calcular = (e)=>{
        e.preventDefault();
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
    if (isNaN(n1 || !num1 || isNaN(n2) || !num2)){
        setResultado('Por favor digite los dos numeros');
        return;
    }
    let res;
    switch(signo){
        case 'suma': res = n1 + n2;
            break;
        case 'resta': res = n1 - n2;
            break;
        case 'multi': res = n1 * n2;
            break;
        case 'divi': if (n2 === 0){
                        res = 'No se puede dividr por cero';
                        }else {
                            res = n1 / n2;
                        }
                        break;
        default: res = 0;
    }
    setResultado(res);
    }
    return(
        <div style = {{
            padding:'20px',
            maxWidth: '300px',
            margin: '0 auto',
            fontFamily: 'sans-serif'
        }}>
            <h2>Calculadora con React</h2>
            <form onSubmit={calcular}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}>
                    {/*Primer numero */}
                    <input 
                        type="number"
                        value = {num1}
                        placeholder = 'Digite el numero'
                        onChange = {(e)=>setNum1(e.target.value)}
                    />
                {/* Selector de la operacion*/}
                <select value={signo} onChange={(e)=>setSigno(e.target.value)}>
                    <option value="suma">+</option>
                    <option value="resta">-</option>
                    <option value="multi">*</option>
                    <option value="divi">÷</option>
                </select>
                {/*Segundo numero */}
                    <input 
                        type="number"
                        value = {num2}
                        placeholder = 'Digite el numero'
                        onChange = {(e)=>setNum2(e.target.value)}
                    />
                {/*Boton de accion*/}
                <button type="submit">Calcular</button>
            </form>
            {/*Mostrar Resultado*/}
            Resultado: {resultado}
        </div>
    )
}