/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Pathname } from "react-router";

function Q1({cvb}) {

    const {asd, bnm} = useParams();

    //Q6
    // const { pathname } = useLocation();

    //Q7
//     const ewq = ["234", "345", "456"]
// const wer = ["123", ...ewq, "567"]
// const rty = wer.find((asd, bnm) => asd === "456")
    
// console.log("Q7")
// console.log(rty)


    // Q9
    // const ewq = [42,33, 24]
    // const qwe = [51, ...ewq, 15]
    // const wer = qwe.findIndex((asd) => asd === 24)
    // console.log(wer)

    // Q11
    // const qwe = {asd: 123, sdf: 654}
    // const cxz = {sdf: 345, ...qwe, asd: 456, zxc: 567}
    // const {sdf, asd} = cxz
    // console.log(asd)
    // console.log(sdf)

    // Q13
    // const qwe = 987
    // const asd = 321
    // const  ytr = [321, qwe, 432, asd, 987]
    // const[rew, ewq] = ytr
    // console.log(rew)
    // console.log(ewq)

    // Q15
    // const ewq = [2, 3, 4]
    // const bnm = [1, ...ewq, 5]
    // const wer = bnm.filter(qwe => qwe > 1)
    // console.log("Q15")
    // console.log(wer)


    //16
    const [dsa, zxc] = useState([123, 234, 345, 456]);
    const qwe = (ert) => {
      zxc([ert, ...dsa]);
    };
    const wer = (rty) => {
      zxc(dsa.filter((x) => x !== rty));}
    // const [ dsa, zxc] = useState([123, 234, 345, 456])
    // const qwe = (ert) => {
    //     zxc([ert, ...dsa])
    // }

    // const wer = (rty) => {
    //     zxc( dsa.filter((x) => x !== rty))
    // }

    return (
        <div>
            {/* <Link to="FDS/ZXC" id="234"
                className={pathname.includes("CXZ") ? "SDF": ""}>
                    DSA
                </Link>
            <Link to="FDS/CXZ" id="123"
            className={pathname.includes("ZXC") ? "ASD": ""}>
                FDS
            </Link> */}

            {/* Q16 */}
            {/* <h2>Q16</h2>
            <h2>{JSON.stringify(dsa)}</h2>
            <button onClick={() => qwe(567)}>EWQ</button>
            <button onClick={() => wer(234)}>REW</button> */}

            <h2>{parseInt(asd)+parseInt(bnm) - parseInt(cvb)}</h2>
        </div>
    )
        }
        

export default Q1;