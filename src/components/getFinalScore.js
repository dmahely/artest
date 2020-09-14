const getFinalScore = (results) => {
    const rounds = results.length
    // get score from state
    const calculateScore = (acc, curr) => (curr ? acc + 1 : acc)

    const score = Number(results.reduce(calculateScore))
    return `${score} out of ${rounds}`
}

export { getFinalScore }
