import "./Form.css";

function Form(props) {

  return (
    <section className="searchContainer">
      <form onSubmit={props.texto} className="searchInputContainer" id="serachDomainForm">
        <div className="inputContainer">
          <input
            className="searchInput"
            type="text"
            placeholder="domínio"
            id="domainInput"
          />
          <p id="error"></p>
        </div>
        <button type="submit" className="submitButton">
          consultar
        </button>
      </form>
    </section>
  );
}

export default Form;
