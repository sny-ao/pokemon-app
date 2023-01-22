import React from "react";
import "./Card.css";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImage">
        <img src={pokemon.sprites.front_default} alt="pokemon" />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        <label>タイプ:</label>
        {pokemon.types.map((type) => {
          return (
            <span key={type.type.name} className="typeName">
              {type.type.name}
            </span>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <span className="title">重さ：</span>
          <span>{pokemon.weight / 10}kg</span>
        </div>
        <div className="cardData">
          <span className="title">高さ：</span>
          <span>{pokemon.height / 10}m</span>
        </div>
        <div className="cardData">
          <div className="title">アビリティ</div>
          {pokemon.abilities.map((ability) => {
            return (
              <span key={ability.ability.name} className="alility">
                {ability.ability.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
