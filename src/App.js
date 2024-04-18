import "./App.css";
import Form from "./componentes/Form";
import Result from "./componentes/Result";

function App() {
  const listDominio = [];
 
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
        <Form lista={listDominio}/> 
      </aside>
      <Result lista={listDominio}/>
    </main>
  );
}

export default App;
