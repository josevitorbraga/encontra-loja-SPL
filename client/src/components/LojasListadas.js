import React from "react";
import { Card } from "react-bootstrap";

export default function LojasListadas(props) {
  return (
    <>
      {props.lojas.map(item => (
        <Card
          id={item.loja_luc}
          key={item.id}
          style={{ width: "15rem", height: "20rem", margin: "0.8rem" }}
        >
          <Card.Img
            variant="top"
            src={`https://sites.madnezz.com.br/api/site/upload/loja/${item.loja_logo}`}
          />
          <Card.Body>
            <Card.Title>
              <strong>{item.loja_nome}</strong>
            </Card.Title>
            <Card.Text>{item.loja_texto}</Card.Text>
            <strong>LUC:</strong> {item.loja_luc}
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
