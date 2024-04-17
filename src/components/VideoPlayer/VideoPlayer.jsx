import React from "react";
import YouTube from "react-youtube";

export const VideoPlayer = ({ videoId }) => {
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div>
            <YouTube videoId={videoId} opts={opts} />
        </div>
    );
};

