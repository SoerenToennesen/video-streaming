import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

export function Home() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        try {
            async function fetchVideoMetaData() {
                const response = await fetch('http://localhost:4000/videos');
                const data = await response.json();
                setVideos(data);
            }
            fetchVideoMetaData();
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <div className="App App-header">
            <Header />
            <div className="container">
                <div className="row">
                    {videos.map(video =>
                        <div className="col-md-3" key={video.id}>
                            <Link to={`/player/${video.id}`}>
                                <div className="card border-0">
                                    <img src={`http://localhost:4000${video.poster}`} alt={video.name} />
                                    <div className="card-body">
                                        <p>{video.name}</p>
                                        <p>{video.duration}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}