import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export default function BuscaLoja() {
  let history = useHistory();
  const inputRef = useRef();
  const handleSearch = () => {
    history.push(`/search/${inputRef.current.value}`);
    inputRef.current.value = "";
    inputRef.current.blur();
  };

  // TODO: Finalizar busca e page redirect

  return (
    <>
      <div className="d-flex flex-column">
        <label htmlFor="storeSearch">
          <strong>Digite o nome da loja desejada</strong>
        </label>
        <div>
          <input
            ref={inputRef}
            type="text"
            name="loja"
            placeholder="Procurando por algo?"
            onKeyPress={e => e.key === "Enter" && handleSearch()}
          />
          <button onClick={() => handleSearch()}>
            <FaSearch size={23} />
          </button>
        </div>
      </div>
    </>
  );
}
