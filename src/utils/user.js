export async function userLogin(username, password) {
    const data = {username: username, password: password};
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/login`;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        const { userId } = await response.json();
        return userId
    } else {
        const { message } = await response.json();
        throw new Error(message);
    }
}

export async function userRegister(username, password) {
    const data = {username: username, password: password};
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/user/register`;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        const { message } = await response.json();
        return message;

    } else {
        const { message } = await response.json();
        throw new Error(message);
    }
}