import React, { useEffect } from 'react';

const CleanUp = ({
    setRoute,
    setRounds,
    setAlbums,
    setCurrentRound,
    setResults,
}) => {
    useEffect(() => {
        setRoute('start');
        setRounds('5');
        setAlbums([]);
        setCurrentRound(1);
        setResults([]);
    });

    return <div></div>;
};

export { CleanUp };
