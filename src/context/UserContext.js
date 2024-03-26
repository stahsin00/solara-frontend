import React, {useState, useContext} from 'react'

const UserContext = React.createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider(props) {
    const [userId, setUserId] = useState();
    const [username, setUsername] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [tasksChanged, setTasksChanged] = useState(false);
    const [currentTask, setCurrentTask] = useState();
    const [selectedPage, setSelectedPage] = useState('Quests');
    const [selectedTab, setSelectedTab] = useState('All');

    const logout = () => {
        setUserId(null);
        setUsername(null);
        setIsLoggedIn(false);
        setTasks([]);
        setCurrentTask(null);
    }

    const value = {
        userId, 
        setUserId,
        username,
        setUsername,
        isLoggedIn, 
        setIsLoggedIn,
        tasks,
        setTasks,
        tasksChanged,
        setTasksChanged,
        currentTask,
        setCurrentTask,
        selectedPage,
        setSelectedPage,
        selectedTab,
        setSelectedTab,
        logout
    }

    return (<UserContext.Provider value={value}>{props.children}</UserContext.Provider>)
}