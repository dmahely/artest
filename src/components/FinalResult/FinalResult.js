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
        console.log(twitterBaseURL);
        const tweet = `I got ${score} playing Artest! What about you? Check out the game on https://dmahely.github.io/artest/`;
        window.open(`${twitterBaseURL}?text=${tweet}`);
    }
    
    return (
        <div className="FinalResult--container">
            <div className="FinalResult--albums">
                {albumResults.map((album, i) => {
                    // todo: add FinalResult--album-cover className to this element
                    return <img key={i} src={album.cover} alt="Album cover" className={album.result ? 'correct' : 'incorrect'}/>
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