const fetchAccessToken = async () => {
    const token = await fetch(`${process.env.REACT_APP_BACKEND_URL}/token`);
    const jsonified = await token.json();

    return jsonified;
};

export { fetchAccessToken };
