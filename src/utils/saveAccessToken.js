const saveAccessToken = (tokenObject) => {
    console.log(tokenObject);
    const { token, expiresAt } = tokenObject;
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('expiry', JSON.stringify(expiresAt));
};

export { saveAccessToken };
