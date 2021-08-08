import axios from "axios";
import React, { useEffect, useState } from "react";
import LojasListadas from "../components/LojasListadas";

export default function HomePage() {
  const [lojas, setLojas] = useState([]);
  const [numeroLojas, setNumeroLojas] = useState([]);

  useEffect(() => {
    async function getStores() {
      const response = await axios.get("http://localhost:3333/api");
      setLojas(response.data.loja);
    }

    getStores();
  }, []);

  useEffect(() => {
    setNumeroLojas(lojas.map(item => item.loja_luc));
  }, [lojas]);

  return (
    <>
      <div className="contentHeader">
        <h3>
          Procure pela loja desejada no topo da pagina ou selecione o numero:
        </h3>
        <div>
          <select name="storeNumber" id="storeNumber" placeholder="numero">
            {numeroLojas
              .sort(function (a, b) {
                if (a < b) {
                  return -1;
                }
                if (a > b) {
                  return 1;
                }
                return 0;
              })
              .map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="mx-5 d-flex flex-wrap justify-content-center align-items-center">
        <LojasListadas lojas={lojas} />
      </div>
    </>
  );
}
