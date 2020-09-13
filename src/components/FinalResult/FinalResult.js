import React from 'react';
import './FinalResult.css';
import scoreBackground from '../../assets/images/score-background.svg';
import { Button } from '../Button/Button';
import { getFinalScore } from '../getFinalScore';
import { getAlbumResults } from '../getAlbumResults';
import { ShareButton } from '../ShareButton/ShareButton';
import twitterLogo from '../../assets/images/twitter-logo.svg';

const twitterBaseURL = 'https://twitter.com/intent/tweet';

const FinalResult = (props) => {
    const { setRoute, results, albums } = props;

    const score = getFinalScore(results);
    const albumResults = getAlbumResults(albums, results);

    const handleTweetShare = () => {
        const tweet = `I got ${score} playing Artest! What about you? Check out the game on https://dmahely.github.io/artest/`;
        window.open(`${twitterBaseURL}?text=${tweet}`);
    }
    
    return (
        <div className="FinalResult--container">
            <div className="FinalResult--albums">
                {albumResults.map((album, i) => {
                    return <img key={i} src={album.cover} alt="Album cover" className={`FinalResult--single-album ${album.result ? 'correct' : 'incorrect'}`}/>
                })}
            </div>
            <img src={scoreBackground} alt="background"/>
            <p>{score}</p>
            <Button text="Play again" onClick={() => setRoute('start')} />
            <ShareButton icon={twitterLogo} onClick={handleTweetShare} />
        </div>
    );
}

export { FinalResult };