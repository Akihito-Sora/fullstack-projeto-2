import "./Result.css";


function Result({ lista }) {

  function formatData(item) {
    if (!item.status === "REGISTERED") return " - ";

    const date = new Date(item["expires-at"]);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
  
    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;
  
    return day + "/" + month + "/" + year;
  }

  function formatStatus(status) {
    if (status === "REGISTERED") return "registrado";

    return "disponível";
  }

  return (
    <div className="resultContainer">
      {lista.reverse().map((item) => {
        <div className="result">
          <p className="title">{item.fqdn}</p>
          <div className="info">
            <p>Status <br />{formatStatus(item.status)}</p>
            <p>Expira em <br />{formatData(item)}</p>
          </div>
          <a className="registrobr" href='https://registro.br/busca-dominio/?fqdn=${item.fqdn}' target="_blank"> registro.br </a>
        </div>;
      })}
    </div>
  );
}

export default Result;
