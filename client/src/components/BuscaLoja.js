import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";

export default function BuscaLoja() {
  let history = useHistory();
  const inputRef = useRef();
  const handleSearch = () => {
    history.push(`/search/${inputRef.current.value}`);
  };

  // TODO: Finalizar busca e page redirect

  return (
    <>
      <div className="d-flex flex-column">
        <label htmlFor="storeSearch">
          <strong>Digite o nome da loja desejada</strong>
        </label>
        <form onSubmit={() => handleSearch()}>
          <input
            ref={inputRef}
            type="text"
            name="loja"
            placeholder="Procurando por algo?"
            onke
          />
          <button type="submit">
            <FaSearch size={23} />
          </button>
        </form>
      </div>
    </>
  );
}
