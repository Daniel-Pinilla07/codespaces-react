import './cards.css'
const Autos = [
    {
        id: 1,
        nombre: "Pichirilo",
        imagen: "https://png.pngtree.com/png-vector/20240611/ourlarge/pngtree-a-yellow-1960s-volkswagen-beetle-png-image_12657819.png",
        alt: "Imagen de carro amarillo",
    },
    {
        id: 2,
        nombre: "Camioneta",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPEoZSoeiA2n0x3d5zpIGC_Ld2TllLX-pwqIcLaU2y37mECYuyHgpF3Ck&s=10",
        alt: "Imagen de camioneta negra",
    },
    {
        id: 3,
        nombre: "Trailer",
        imagen: "https://png.pngtree.com/png-clipart/20240418/original/pngtree-black-truck-transport-png-image_14879353.png",
        alt: "Imagen de trailer negro",
    },
]

export default function Cards(){
    return (
        Autos.map((item, index)=>{
            return (
                <div className = "card" key = {index}>
                    <h1>#: {item.id} Nombre: {item.nombre}</h1>
                    <img className ="image" src= {item.imagen} alt= {item.alt} />
                </div>
            )
        })
    )
}