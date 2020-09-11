import React from 'react';
import './FinalResult.css';
import scoreBackground from '../../assets/images/score-background.svg';
import { Button } from '../Button/Button';
import { getFinalScore } from '../getFinalScore';
import { getAlbumResults } from '../getAlbumResults';

const FinalResult = (props) => {
    const { setRoute, results, albums } = props;

    const score = getFinalScore(results);
    const albumResults = getAlbumResults(albums, results);
    
    return (
        <div className="FinalResult--container">
            <div className="FinalResult--albums">
                {albumResults.map(album => {
                    // todo: add FinalResult--album-cover className to this element
                    return <img src={album.cover} alt="Album cover" className={album.result ? 'correct' : 'incorrect'}/>
                })}
            </div>
            <img src={scoreBackground} alt="background"/>
            <p>{score}</p>
            <Button text="Play again" onClick={() => setRoute('start')}/>
        </div>
    );
}

export { FinalResult };