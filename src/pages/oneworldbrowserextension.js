import * as React from "react"
import "../../node_modules/video-react/dist/video-react.css"
import { Player } from 'video-react';

// const OneWorldBrowserExtension = () => (
//     <>
//         <div> One World Browser Extension </div>
//         <Player
//             playsInline
//             poster="../images/gatsby-icon.png"
//             src="../images/1world.mp4"
//         />
//     </>
// )
//
// export default OneWorldBrowserExtension

export default props => {
    return (
        <Player
            playsInline
            poster="../images/gatsby-icon.png"
            src="../images/1world.mp4"
        />
    );
};
