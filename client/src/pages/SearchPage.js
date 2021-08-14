import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LojasListadas from "../components/LojasListadas";
import { FaArrowLeft } from "react-icons/fa";

export default function SearchPage(props) {
  const searchParameters = props.match.params.parameters;
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getSearchResults() {
      const response = await axios.get(
        `/api/search/${searchParameters}`
      );
      setResults(response.data);
    }
    getSearchResults();
  }, [searchParameters]);

  return (
    <>
      <div className="mx-5 d-flex align-items-center justify-content-between">
        <h3>Resultados para a pesquisa de: "{searchParameters}"</h3>
        <Link to="/">
          <FaArrowLeft />
          Voltar ao início
        </Link>
      </div>
      <div className="mx-5 d-flex flex-wrap justify-content-center align-items-center">
        <LojasListadas lojas={results} />
      </div>
    </>
  );
}
