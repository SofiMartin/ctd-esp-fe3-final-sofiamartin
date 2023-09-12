import React, {useState} from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se pueden agregar las validaciones correspondientes
    if (name.length < 5 || !/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor verifique que su información sea correcta");
    } else {
      setError(null)
      setSuccess(`Gracias ${name}, te contactaremos pronto al mail proporcionado`);
      // Aquí se podría enviar el formulario a una API o servicio de email
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="Nombre y Apellido"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default Form;