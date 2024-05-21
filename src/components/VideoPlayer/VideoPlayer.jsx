import React, { useEffect, useState } from "react";
import { google } from "googleapis";
import YouTube from "react-youtube";

const apiKey = "AIzaSyDgtpA3oFKmj_O4QaaeMg3N9CfIcYzSYB8";

export const Videos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const youtube = google.youtube({
                version: "v3",
                auth: apiKey,
            });

            const response = await youtube.playlistItems.list({
                part: "snippet",
                playlistId: "UCmgOzUhlDitK9Epvr6YH5jA",
                maxResults: 5,
            });

            setVideos(response.data.items);
        };

        fetchData();
    }, []);

    return (
        <div>
            {videos.map((video) => (
                <YouTube
                    key={video.id}
                    videoId={video.snippet.resourceId.videoId}
                />
            ))}
        </div>
    );
};

