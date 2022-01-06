import * as React from "react"
import "node_modules/video-react/dist/video-react.css"
import { Player } from 'video-react';

const OneWorldBrowserExtension = () => (
    <>
        <div> One World Browser Extension </div>
        <Player
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
    </>
)

export default OneWorldBrowserExtension
