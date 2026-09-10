import { useState } from 'react';

export function Figuras() {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [areaTriangulo, setAreaTriangulo] = useState(null);
  const [areaRectangulo, setAreaRectangulo] = useState(null);
  const [areaCuadrado, setAreaCuadrado] = useState(null);

  const calcularTriangulo = () => {
    const b = parseFloat(val1);
    const h = parseFloat(val2);
    if (!isNaN(b) && !isNaN(h)) setAreaTriangulo((b * h) / 2);
  };

  const calcularRectangulo = () => {
    const b = parseFloat(val1);
    const h = parseFloat(val2);
    if (!isNaN(b) && !isNaN(h)) setAreaRectangulo(b * h);
  };

  const calcularCuadrado = () => {
    const l = parseFloat(val1);
    if (!isNaN(l)) setAreaCuadrado(l * l);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Calculo de areas geometricas</h2>
      
      <div className="row mb-3">
        <div className="col-6">
          <label className="form-label">Valor 1 (Base / Lado):</label>
          <input 
            type="number" 
            className="form-control" 
            value={val1} 
            onChange={(e) => setVal1(e.target.value)} 
          />
        </div>
        <div className="col-6">
          <label className="form-label">Valor 2 (Altura):</label>
          <input 
            type="number" 
            className="form-control" 
            value={val2} 
            onChange={(e) => setVal2(e.target.value)} 
          />
        </div>
      </div>

      <div className="d-flex gap-2 mb-4 justify-content-center">
        <button className="btn btn-primary" onClick={calcularTriangulo}>Área Triángulo</button>
        <button className="btn btn-success" onClick={calcularRectangulo}>Área Rectángulo</button>
        <button className="btn btn-warning" onClick={calcularCuadrado}>Área Cuadrado</button>
      </div>

      <div className="card p-3 bg-light">
        <h4>Resultados:</h4>
        <p className="mb-1"><strong>Triángulo:</strong> {areaTriangulo !== null ? areaTriangulo : '-'}</p>
        <p className="mb-1"><strong>Rectángulo:</strong> {areaRectangulo !== null ? areaRectangulo : '-'}</p>
        <p className="mb-0"><strong>Cuadrado (usa Valor 1):</strong> {areaCuadrado !== null ? areaCuadrado : '-'}</p>
      </div>
    </div>
  );
}