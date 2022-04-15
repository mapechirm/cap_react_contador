import React from "react";
import "../static/sass/contador.sass";

function Contador() {
  const [contador, setContador] = React.useState(0);

  const aumentar = () => setContador(contador + 1);

  const disminuir = () => setContador(contador - 1);

  return (
    <>
      <div className={contador >= 1 ? "mayor" : contador < 0 ? "menor" : ""}>
        Contador: {contador}
      </div>
      <hr />
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </>
  );
}

export default Contador;
