import "./App.css";
import { useState } from "react";
import Form from "./componentes/Form";
import Result from "./componentes/Result";

function App() {
  const [listaDominio, setListaDominio] = useState([]);
  
  async function consultar(event) {
    event.preventDefault();

    const domain = event.target.domainInput.value
    const response = await fetch(
      `https://brasilapi.com.br/api/registrobr/v1/${domain}`
    )
    const data = await response.json();
    setListaDominio(prevList => [...prevList, data].reverse())
    /*
    .then((response) => response.json())
    .then((data) => setListaDominio(prevList => [...prevList, data].reverse()))
    .catch((error) => console.log(error));*/
    console.log(listaDominio)
  }

 
  return (
    <main className="App">
      <aside className="infosAside">
        <section className="titleContainer">
          <p className="subtitle">
            verifique se seu domínio já foi registrado no Brasil
          </p>
          <p className="label">
            digite o domínio para consultar
            <br />
            suas informações
          </p>
        </section>
        <Form texto={consultar}/> 
      </aside>
      <Result lista={listaDominio}/>
    </main>
  );
}

export default App;
