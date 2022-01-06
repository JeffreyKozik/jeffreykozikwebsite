import * as React from "react"
import "../../node_modules/video-react/dist/video-react.css"
import { Player } from 'video-react';
import demoVideo from "../images/1world.mp4";

const OneWorldBrowserExtension = () => (
    <>
        <div> One World Browser Extension </div>
        <video controls>
            <source src={demoVideo} type="video/mp4"></source>
        </video>
    </>
)

// const OneWorldBrowserExtension = () => (
//     <>
//         <div> One World Browser Extension </div>
//         <video controls>
//             <source src="../images/1world.mp4" type="video/mp4">
//         </video>
//     </>
// )

export default OneWorldBrowserExtension

// export default props => {
//     return (
//         <Player
//             playsInline
//             poster="../images/gatsby-icon.png"
//             src="../images/1world.mp4"
//         />
//     );
// };
