/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

function Q5({fds}) {
    const [yui, rty] = useState(fds);
    return (
      <div>
        <h2>{yui}</h2>
        <input
          value={yui}
          onChange={(qwe) => rty(qwe.target.value)}
        />
      </div>
    );
  }

export default Q5;