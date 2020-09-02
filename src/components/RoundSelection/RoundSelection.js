import React, { useContext, useEffect } from 'react';
import './RoundSelection.css';
import { Option } from '../Option/Option';
import { AccessTokenContext } from '../../hooks/TokenContext';

const baseURL = process.env.REACT_APP_SPOTIFY_BASE_URL;

const RoundSelection = (props) => {
    const {setRoute, setRounds} = props;
    const accessToken = useContext(AccessTokenContext);
    
    useEffect(() => {
        const fetchRandomAlbums = async(accessToken) => {

        const queryParam = 'one%'; // to be randomized
        const offsetParam = 100; // a number between 1 and 2000
        const typeParam = 'album';
        const limitParam = 5; // initial batch

        const queryParams = new URLSearchParams({
            q: queryParam,
            type: typeParam,
            limit: limitParam,
            offset: offsetParam
          });

        const stringifiedQueryParams = queryParams.toString();

        // append params to baseURL
        const searchEndpoint = `${baseURL}/search?` + stringifiedQueryParams;

        const album = fetch(searchEndpoint, {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken.token
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

        return album;
    }

    fetchRandomAlbums(accessToken);
    }, []);

    return (
        <div className="RoundSelection--container">
            <span className="RoundSelection--question">How many rounds do you want to play?</span>
            <div className="RoundSelection--options-container">
                <Option text="5" color="yellow" onClick={() => { setRoute('play'); setRounds(5) }} />
                <Option text="10" color="pink" onClick={() => { setRoute('play'); setRounds(10) }} />
                <Option text="15" color="green" onClick={() => { setRoute('play'); setRounds(15) }} />
                <Option text="20" color="navy" onClick={() => { setRoute('play'); setRounds(20) }} />
            </div>
        </div>
    );
}

export { RoundSelection };