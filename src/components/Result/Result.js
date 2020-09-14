import React, { useEffect } from 'react'
import './Result.css'
import { Button } from '../Button/Button'
import { getCurrentRoundResult } from '../getCurrentRoundResult'
import { getCurrentRoundArtistId } from '../getCurrentRoundArtistId'
import { fetchRelatedArtists } from '../fetchRelatedArtists'

const Result = (props) => {
    const {
        setRoute,
        setCurrentRound,
        rounds,
        currentRound,
        albums,
        setAlbums,
        results,
    } = props

    const roundResult = getCurrentRoundResult(albums, currentRound, results)

    useEffect(() => {
        const albumsObj = albums
        const nextRound = currentRound + 1

        const getNextRoundOptions = async () => {
            const artistId = getCurrentRoundArtistId(albumsObj, nextRound)

            const albums = await fetchRelatedArtists(
                albumsObj,
                artistId,
                nextRound
            )
            setAlbums(albums)
        }

        // if this is not the last round
        if (rounds >= nextRound) getNextRoundOptions()
    }, [])

    const { albumCoverArt, albumName, result, artistName } = roundResult

    // for changing the route and updating current round
    const handleClick = (e) => {
        if (currentRound < rounds) {
            setCurrentRound((currentRound) => currentRound + 1)
            setRoute('play')
        } else {
            setRoute('end')
        }
    }

    return (
        <div
            className={`Result--container ${result ? 'correct' : 'incorrect'}`}
        >
            <img
                className="Result--album-image"
                src={albumCoverArt}
                alt={albumName}
            />
            <p className="Result--result">{result ? 'Correct' : 'Incorrect'}</p>
            <p className="Result--payload">
                {artistName} is the artist behind {albumName}
            </p>
            <Button text="Continue" onClick={() => handleClick()} />
        </div>
    )
}

export { Result }
