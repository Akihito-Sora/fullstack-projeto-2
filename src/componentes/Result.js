import "./Result.css";

function Result({ lista }) {
  function formatData(item) {
    if (item.status === "REGISTERED") {
      const date = new Date(item["expires-at"]);
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (day < 10) day = "0" + day;
      if (month < 10) month = "0" + month;

      return day + "/" + month + "/" + year;
    }
    return " --- ";
  }

  function formatStatus(status) {
    if (status === "REGISTERED") return "registrado";

    return "disponível";
  }

  return (
    <div className="resultContainer">
      {lista.map((item) => (
        <div className="result">
          <p className="title">{item.fqdn}</p>
          <div className="info">
            <div>
              <p className="infoTitle">Status</p>
              <p className="center">{formatStatus(item.status)}</p>
            </div>
            <div>
              <p className="infoTitle">Expira em </p>
              <p className="center"> {formatData(item)}</p>
            </div>
          </div>
          <a
            className="registrobr"
            href={`https://registro.br/busca-dominio/?fqdn=${item.fqdn}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            registro.br
          </a>
        </div>
      ))}
    </div>
  );
}

export default Result;
