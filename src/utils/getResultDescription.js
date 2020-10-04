import { resultText } from '../utils/resultText';

const getResultDescription = (score, rounds) => {
    let ranking = '';
    const resultPercentage = (score / rounds) * 100;
    if (resultPercentage > 80) ranking = 'excellent';
    else if (resultPercentage > 40) ranking = 'average';
    else ranking = 'poor';

    // get random result description
    const randomIndex = Math.floor(Math.random() * resultText[ranking].length);
    return resultText[ranking][randomIndex];
};

export { getResultDescription };
