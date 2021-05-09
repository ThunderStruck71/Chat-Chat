

export const loginServices = {
    signIn,
    signOut
};

function signIn(userName: string) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName })
    };

    return fetch(`/users/login`, requestOptions)
        .then((response: Response) => {
            return response.json().then(jsonData => {
                if (response.status >= 200 && response.status < 300) {
                    return jsonData;
                } else {
                    signOut();
                    throw jsonData;
                }
            })
        })
};

function signOut() {
    localStorage.removeItem("user");
}