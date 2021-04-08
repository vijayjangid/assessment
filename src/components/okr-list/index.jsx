import React from "react";
import { Okr } from "../okr";

export const OkrList = ({ data }) => (
  <div>
    <ul>
      {data.map(({ id, title }) => (
        <Okr key={id} title={title} />
      ))}
    </ul>
  </div>
);
