import React, { useEffect } from 'react';

const CleanUp = (props) => {
    const {
        setRoute,
        setRounds,
        setAlbums,
        setCurrentRound,
        setResults,
    } = props;

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
