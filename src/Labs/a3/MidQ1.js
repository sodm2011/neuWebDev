/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { useState } from "react";

function MidQ1() {
    //q1
    // const [qwe, asd] = useState(wer);

    // Q2
    // const qwe = [5,4,3,2,1]
    // const wer = qwe.map(asd => asd* asd)
    // console.log("Q2")
    // console.log(wer);

    //Q3
    // const ewq = [234, 345]
    // const rty = [123, ...ewq, 456]
    // const vbn = [123, ...rty, 456]

    // console.log("Q3")
    // console.log(vbn)

    //Q4
    const ewq = {asd: 567}
    const asd = {...ewq, bnm: 543}
    const mnb = {bnm: 654, ...asd, zxc: 654}
    console.log("Q4")
    console.log(mnb)

    return (
      <div>
        <h2>Q1</h2>
        {/* <h2>{qwe}</h2>
        <button onClick={() => asd(qwe + 20)}>ZXC</button>
        <button onClick={() => asd(qwe - 30)}>CXZ</button> */}
      </div>
    );
}

export default MidQ1;