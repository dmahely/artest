// checks if an access token is valid by checking its expiry date against the current time
// returns true if more than 5 minutes are left for the access token
const isAccessTokenValid = async () => {
    const currentTokenExpiry = Number(localStorage.getItem('expiry'));
    const currentTime = Date.now();
    const differenceInMinutes =
        (currentTokenExpiry - currentTime) / (1000 * 60);

    if (differenceInMinutes > 5) return true;
    else return false;
};
export { isAccessTokenValid };
