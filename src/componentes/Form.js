import { useState } from "react";
import "./Form.css";

function Form({lista}) {

  async function consultar(event) {
    event.preventDefault();

    const response = await fetch(
      `https://brasilapi.com.br/api/registrobr/v1/${domain}`
    );
    const data = await response.json();
    
    lista.push(data);
  }

  const [domain, setdomain] = useState();

  return (
    <section className="searchContainer">
      <form className="searchInputContainer" id="serachDomainForm">
        <div className="inputContainer">
          <input
            className="searchInput"
            type="text"
            placeholder="domínio"
            id="domainInput"
            onChange={(e) => setdomain(e.target.value.replace(/\s/g, ""))}
          />
          <p id="error"></p>
        </div>
        <button type="submit" onClick={consultar} className="submitButton">
          consultar
        </button>
      </form>
    </section>
  );
}

export default Form;
