import "./App.css";
import { useState, useEffect } from "react";
import Form from "./componentes/Form";
import Result from "./componentes/Result";

function App() {
  const [listaDominio, setListaDominio] = useState([]);
  /*
  useEffect(() => {
    async function fetchData(domain){
      await fetch(`https://brasilapi.com.br/api/registrobr/v1/${domain}`)
        .then((response) => response.json())
        .then((data) =>
          setListaDominio((prevList) => [...prevList, data].reverse())
        )
        .catch((error) => console.log(error));
    }
  async function consultar(event) {
    event.preventDefault();
    const domain = event.target.domainInput.value;
    await fetchData(domain);
  }
    consultar();
  }, []);
*/

  async function consultar(event) {
    event.preventDefault();

    const domain = event.target.domainInput.value.replace(/\s/g, "");
    await fetch(`https://brasilapi.com.br/api/registrobr/v1/${domain}`)
      .then((response) => response.json())
      .then((data) =>
        setListaDominio((prevList) => [...prevList, data].reverse())
      )
      .catch((error) => console.log(error));
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
        <Form texto={consultar} />
      </aside>
      <Result lista={listaDominio} />
    </main>
  );
}

export default App;
