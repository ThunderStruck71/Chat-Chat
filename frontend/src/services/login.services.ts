

export const loginServices = {
    signIn,
    signOut
};

async function signIn(userName: string) {
    const requestOptions = {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({ userName })
    };

    const response = await fetch("/users/login", requestOptions);
    const responseJson = await response.json();

    if (response.status >= 200 && response.status < 300) {
        localStorage.setItem("user", JSON.stringify(responseJson));
        return responseJson;
    } else {
        signOut();
        throw responseJson;
    }
};

function signOut() {
    localStorage.removeItem("user");
}