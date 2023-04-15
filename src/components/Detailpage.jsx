import React from 'react';
import records from '../shows.json';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Shows from './Shows';

function Detailpage() {
    const { link } = useParams()
    const filter = records.filter((data) => {
        return data.imdbID === link;
    });
    const video = filter[0].vid
    const searchTerm = filter[0].Title.split(' ')[0];

    const pattern = new RegExp(searchTerm, 'i');

    const similarShows = records.filter(show => pattern.test(show.Title) && show.Title !== filter[0].Title);

    const displayShows = similarShows.length > 0 ? similarShows : records.slice(0, 12);
    const detailClick = (value) => {
        if (value === "watch") {
            alert("Currently, the watch feature is not available");
        }
        else if (value === "download") {
            alert("Currently the download feature is not available");
        }
        else if (value === "subscription") {
            alert("Currently, the subscription feature is not available");
        }
    }

    return (
        <div className='details'>
            <div className='videodiv'>
                <video src={video} controls allowFullScreen muted={1} autoplay={1} width={800} height={500} title={filter[0].Title} />
                <div className="commondetail">
                    <h3>{filter[0].Title} {`(${filter[0].Year})`}</h3>
                    <p>{filter[0].Des} </p>
                    <div className="detbut">
                        <Button variant="success" onClick={() => detailClick("watch")}>Watch</Button>
                        <Button variant="primary" onClick={() => detailClick("download")}>Download</Button>
                    </div>
                    <Button variant="warning" className='detbut3' onClick={() => detailClick("subscription")}>Buy Subscription</Button>
                </div>
            </div>
            <p className='related'>Related</p>
            {displayShows.map((element, index) => {
                return (
                    <Shows
                        key={index}
                        Poster={element.Poster}
                        imdbID={element.imdbID}
                        Title={element.Title}
                        Year={element.Year}
                    />
                )

            })}


        </div>
    );
}

export default Detailpage;
