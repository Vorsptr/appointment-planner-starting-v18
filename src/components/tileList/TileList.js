import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ list }) => {
  return (
    <div>
      {list &&
        list.map((item, index) => {
          let { name, ...rest } = item;
          return <Tile key={index} name={name} description={rest} />;
        })}
    </div>
  );
};
