import "./Form.css";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

function Form(props) {
  const [show, setShow] = useState(true);

  const verificar = (event) => {
    const valeuInput = event.target.value.replace(/\s/g, "");
    if (!valeuInput) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <section className="searchContainer">
      <form
        onSubmit={props.texto}
        className="searchInputContainer"
        id="serachDomainForm"
      >
        <div className="inputContainer">
          <input
            className="searchInput"
            type="text"
            placeholder="domínio"
            id="domainInput"
            onKeyUp={verificar}
          />
          <Alert show={show} variant="success">
            <p className="alert">O dominio não pode ser vazio</p>
          </Alert>
        </div>
        <button type="submit" className="submitButton">
          consultar
        </button>
      </form>
    </section>
  );
}

export default Form;
