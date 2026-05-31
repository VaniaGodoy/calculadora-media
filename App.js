import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");

  const [resultado, setResultado] = useState("");

  function calcularMedia() {
    if (!nome || !email || !nota1 || !nota2 || !nota3) {
      alert("Preencha todos os campos!");
      return;
    }

    const media =
      (Number(nota1) +
        Number(nota2) +
        Number(nota3)) / 3;

    setResultado(media.toFixed(1));
  }

  function reiniciar() {
    setNome("");
    setEmail("");
    setNota1("");
    setNota2("");
    setNota3("");
    setResultado("");
  }

  return (
    <div
      style={{
        width: "350px",
        margin: "40px auto",
        padding: "15px",
        backgroundColor: "#99abfc",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1c3863",
          fontSize: "20px"
        }}
      >
        CALCULADORA DE MÉDIA
      </h1>

      <input
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          boxSizing: "border-box"
        }}
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <input
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          boxSizing: "border-box"
        }}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px"
        }}
      >
        <input
          style={{ width: "100px", height: "28px", textAlign: "center" }}
          type="text"
          placeholder="Nota1"
          value={nota1}
          onChange={(e) => setNota1(e.target.value)}
        />

        <input
          style={{ width: "100px", height: "28px", textAlign: "center" }}
          type="text"
          placeholder="Nota2"
          value={nota2}
          onChange={(e) => setNota2(e.target.value)}
        />

        <input
          style={{ width: "100px", height: "28px", textAlign: "center" }}
          type="text"
          placeholder="Nota3"
          value={nota3}
          onChange={(e) => setNota3(e.target.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "5px"
        }}
      >
        <button
          onClick={calcularMedia}
          style={{
            flex: 1,
            backgroundColor: "#1e88e5",
            color: "white",
            border: "none",
            padding: "8px",
            cursor: "pointer"
          }}
        >
          CALCULAR MÉDIA
        </button>

        <button
          onClick={reiniciar}
          style={{
            flex: 1,
            backgroundColor: "#c62828",
            color: "white",
            border: "none",
            padding: "8px",
            cursor: "pointer"
          }}
        >
          REINICIAR
        </button>
      </div>

      {resultado !== "" && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#f5f5f5",
          }}
        >
          <p><strong>Nome:</strong> {nome}</p>
          <p><strong>E-mail:</strong> {email}</p>
          <p><strong>Notas:</strong> {nota1}, {nota2}, {nota3}</p>
          <p><strong>Média:</strong> {resultado}</p>
        </div>
      )}
    </div>
  );
}

export default App;