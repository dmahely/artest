const apiTokenURL = process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN_URL,
    client_id = process.env.REACT_APP_CLIENT_ID,
    client_secret = process.env.REACT_APP_CLIENT_SECRET

const fetchAccessToken = async () => {
    // encodes client id and secret to base64
    const authParam = btoa(client_id + ':' + client_secret)
    const tokenResponse = await fetch(apiTokenURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + authParam,
        },
        body: new URLSearchParams({
            grant_type: 'client_credentials',
        }),
    })

    // jsonify the api response and return the access token
    const tokenVal = await tokenResponse.json()
    const token = tokenVal.access_token

    // calculate expiry date and time (current time + one hour)
    const expires_at = Date.now() + 60 * 60 * 1000

    return { token, expires_at }
}

export { fetchAccessToken }
