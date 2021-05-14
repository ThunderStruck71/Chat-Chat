export const usersServices = {
    getAll
};

async function getAll() {
    const requestOptions = {
        method: "GET",
        headers: { 'Content-Type': "application/json" },
    };

    const response = await fetch("/users/all", requestOptions);
    const responseJson = await response.json();

    return responseJson;
}