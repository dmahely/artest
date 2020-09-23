import React from 'react';
import './FinalResult.css';
import scoreBackground from '../../assets/images/score-background.svg';
import { Button } from '../Button/Button';
import { getFinalScore } from '../getFinalScore';
import { getAlbumResults } from '../getAlbumResults';
import { ShareButton } from '../ShareButton/ShareButton';
import twitterLogo from '../../assets/images/twitter-logo.svg';
import facebookLogo from '../../assets/images/facebook-logo.svg';

const twitterBaseURL = 'https://twitter.com/intent/tweet';
const facebookBaseURL =
    'https://www.facebook.com/sharer/sharer.php?u=example.org';

const FinalResult = (props) => {
    const { setRoute, results, albums } = props;

    const [score, rounds] = getFinalScore(results);
    const albumResults = getAlbumResults(albums, results);

    const handleTweetShare = () => {
        const tweet = `I got ${score}/${rounds} playing Artest! What about you? Check out the game on https://dmahely.github.io/artest/`;
        window.open(`${twitterBaseURL}?text=${tweet}`);
    };

    const handleFacebookShare = () => {
        window.open(`${facebookBaseURL}`);
    };

    return (
        <div className="FinalResult--container">
            <div className="FinalResult--albums">
                {albumResults.map((album, i) => {
                    return (
                        <img
                            key={i}
                            src={album.cover}
                            alt="Album cover"
                            className={`FinalResult--single-album ${
                                album.result ? 'correct' : 'incorrect'
                            }`}
                        />
                    );
                })}
            </div>

            <p className="FinalResult--user-text">Awesome job!</p>
            <div className="FinalResult--score-container">
                <img src={scoreBackground} alt="background" />
                <p className="FinalResult--score-text">
                    {score}
                    <span className="FinalResult--score-text-span">
                        {' '}
                        out of{' '}
                    </span>
                    {rounds}
                </p>
            </div>
            <Button text="Play again" onClick={() => setRoute('start')} />
            <ShareButton icon={twitterLogo} onClick={handleTweetShare} />
            <ShareButton icon={facebookLogo} onClick={handleFacebookShare} />
        </div>
    );
};

export { FinalResult };
