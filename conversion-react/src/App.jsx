import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [monedas, setMonedas] = useState([])

  useEffect(() => { // se ejecuta la primera vez
    fetch('http://localhost:3000/monedas' )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
        setMonedas(data);
      })
  }, [])

  return (
    <>
      
      <h1>Información de monedas</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Origen</th>
            <th>Destino</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {
            monedas.map( (item, index) => {
              return (
                <tr key={index}>
                   <td>{item.id}</td> 
                   <td>{item.origen}</td> 
                   <td>{item.destino}</td> 
                   <td>{item.valor}</td> 
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <ul>
        {
          // paises.map( (item, index) => <li key={index}>{ item.name.common }</li>)
        }
      </ul>

    </>
  )
}

export default App
