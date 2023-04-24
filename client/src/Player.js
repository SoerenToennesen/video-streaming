import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export function Player() {
    const { id } = useParams();
    const [videoId, setVideoId] = useState(id);
    const [videoData, setVideoData] = useState({});

    useEffect(() => {
        try {
            async function fetchVideoData() {
                const res = await fetch(`http://localhost:4000/video/${id}/data`);
                const data = await res.json();
                setVideoData(data);
            }
            fetchVideoData();
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <video controls muted autoPlay>
                    <source src={`http://localhost:4000/video/${videoId}`} type="video/mp4"></source>
                </video>
                <h1>{videoData.name}</h1>
            </header>
        </div>
    )

}
