const saveAccessToken = (tokenObject) => {
    const { token, expires_at } = tokenObject;
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('expiry', JSON.stringify(expires_at));
};

export { saveAccessToken };
