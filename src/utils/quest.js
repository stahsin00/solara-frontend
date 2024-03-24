const baseUrl = `${process.env.REACT_APP_SERVER_URL}/tasks`;

export async function questList(userId) {
    const apiUrl = `${baseUrl}/tasks/${userId}`;

    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const { tasks } = await response.json();
        return tasks;
    } else {
        const { message } = await response.json();
        throw new Error(message);
    }
}

export async function questComplete(userId, taskId) {
    const apiUrl = `${baseUrl}/completetask/${userId}/${taskId}`;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('unable to complete task');
    }
}

export async function questDelete(userId, taskId) {
    const apiUrl = `${baseUrl}/${userId}/${taskId}`;

    const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const {message} = await response.json();
        throw new Error(message);
    }
}

export async function questCreate(userId, newTask) {
    const apiUrl = `${baseUrl}/addtask/${userId}`;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
    });

    if (response.ok) {
        const {message} = await response.json();
        return message;

    } else {
        const {message} = await response.json();
        throw new Error(message);
    }
}