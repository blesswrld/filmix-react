// import React, { useEffect, useState } from "react";

// import styles from "./VideoPlayer.module.css";
// import ClassNames from "classnames";

// export default function VideoPlayer() {
//     const [scriptHtml, setScriptHtml] = useState("");

//     useEffect(() => {
//         const dataUrl = window.location.href;
//         fetch(
//             "//js.espanplay.site/get_player?w=610&h=370&type=widget&kp_id=&players=apicollaps,alloha,trailer&r_id=videoplayers&ani=COLLAPS&ati=&adi=&alni=ALLOHATV&alti=&aldi=&tti=&ru=" +
//                 dataUrl
//         )
//             .then((res) => res.text())
//             .then((data) =>
//                 setScriptHtml(data.match(/<iframe.*?<\/iframe>/gm)[1])
//             );
//     }, []);

//     return (
//         <div
//             className={ClassNames("uitools", styles.video)}
//             id="videoplayers"
//             dangerouslySetInnerHTML={{ __html: scriptHtml }}
//         ></div>
//     );
// }

// IT DOESNT WORK NOW
