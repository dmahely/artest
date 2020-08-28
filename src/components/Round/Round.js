import React from 'react';
import './Round.css'
import { Progress } from '../Progress/Progress.js';
import { Artist } from '../Artist/Artist.js';

// state: number of rounds, current round, selected, correct answer
// functions: fetch album and array of possible artists

const Round = (props) => {
    const {setRoute} = props;
    return (
        <div className="Round--container">
            <Progress width="50"/>
            <img className="Round--album-image" src="https://images-na.ssl-images-amazon.com/images/I/71uR2KhRrZL._AC_SL1066_.jpg" alt="Album name" />
            <div className="Round--artists-container">
                <Artist number="1" name="Teyana Taylor" image="https://www.rollingstone.com/wp-content/uploads/2020/06/teyana-taylor.jpg" setRoute={setRoute}/>
                <Artist number="2" name="Beyoncé" image="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0MTU0MTc3NzkzMTA3MzU1/beyonce-attends-tidal-x-1015-on-october-15-2016-in-new-york-city-photo-by-theo-wargogetty-images-for-tidal-sqaure.jpg" setRoute={setRoute}/>
                <Artist number="3" name="Kendrick Lamar" image="https://upload.wikimedia.org/wikipedia/commons/3/32/Pulitzer2018-portraits-kendrick-lamar.jpg" setRoute={setRoute}/>
                <Artist number="4" name="Pharrel Williams" image="https://www.cheatsheet.com/wp-content/uploads/2019/10/Pharrell-Williams.jpg" setRoute={setRoute}/>
            </div>
        </div>
    );
}

export { Round };