const baseUrl = `${process.env.REACT_APP_SERVER_URL}`;

export async function userLogin() {
    console.log("redirecting");
    window.open(`${baseUrl}/auth/login`, "_self");
}

export async function userLogout() {
    const apiUrl = `${baseUrl}/auth/logout`;

    const response = await fetch(apiUrl, {
        method: 'POST',
        credentials: "include"
    });

    if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
    } 
}

export async function userInfo() {
    const apiUrl = `${baseUrl}/user`;

    const response = await fetch(apiUrl, {
        method: 'GET',
        credentials: "include"
    });

    if (response.ok) {
        const user = await response.json();
        return user;
    } else {
        throw new Error('unable to fetch user info');
    }
}