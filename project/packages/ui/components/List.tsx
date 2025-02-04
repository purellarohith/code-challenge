import React from "react";

type Pokemon = {
  name: string;
  url: string;
};

type PokemonList = {
  data: Pokemon[];
};

export const List: React.FC<PokemonList> = ({ data }: PokemonList) => {
  return (
    <div>
      <div id="list">
        {data.map((val, index) => (
          <label key={val.name}>{`${index + 1}) ${val.name}`}</label>
        ))}
      </div>
    </div>
  );
};
