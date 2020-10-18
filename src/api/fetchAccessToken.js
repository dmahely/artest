const fetchAccessToken = async () => {
    const token = await fetch('/token');
    const jsonified = await token.json();

    return jsonified;
};

export { fetchAccessToken };
