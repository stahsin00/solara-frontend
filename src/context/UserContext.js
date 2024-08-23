import React, {useState, useContext, useEffect} from 'react'
import { userInfo, userLogout } from '../utils/user';

const UserContext = React.createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider(props) {
    const [user, setUser] = useState();

    const [tasks, setTasks] = useState([]);
    const [tasksChanged, setTasksChanged] = useState(false);
    const [currentTask, setCurrentTask] = useState();

    const [selectedPage, setSelectedPage] = useState('Quests');
    const [selectedTab, setSelectedTab] = useState('All');

    useEffect(() => {
        const run = async () => {
          try {
            const userResponse = await userInfo();
            setUser(userResponse);
          } catch {
            // TODO
          }
          
        };
        run();
      }, [tasksChanged]);

    const logout = async () => {
        await userLogout();

        setUser(null);
        
        setTasks([]);
        setCurrentTask(null);
    }

    const value = {
        user, 
        setUser,
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