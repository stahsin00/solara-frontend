import React, { useState } from "react";
import { useUser } from "../../context/UserContext";
import { questCreate } from "../../utils/quest";
import './QuestCreateTask.css';
import Spinner from "../Spinner";

function QuestCreateTask(props) {
    const [name, setName] = useState("");       
    const [description, setDescription] = useState(""); 
    const [type, setType] = useState("Regular");
    const [tags, setTags] = useState("");               
    const [difficulty, setDifficulty] = useState("Unspecified");   
    const [priority, setPriority] = useState("");   
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [loading, setLoading] = useState(false);

    const { tasksChanged, setTasksChanged } = useUser();

    async function handleSubmit(e) {
        e.preventDefault();

        if (loading) return;

        setLoading(true);

        const newTask = {
            name,
            description,
            difficulty
        };

        try {
            const result = await questCreate(newTask);

            setError(null);
            setSuccess(result);
            setTasksChanged(!tasksChanged);
        } catch (error) {
            console.error(error.message);
            setError(error.message);
            setSuccess(null);
        } finally {
            setName("");
            setDescription("");
            setType("");
            setTags("");
            setDifficulty("Unspecified");
            setPriority("");

            setLoading(false);
            props.setIsAdding(false)
        }

    }

    function handleChange(e) {
        if (loading) return;
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "type":
                setType(value);
                break;
            case "tags":
                setTags(value);
                break;
            case "difficulty":
                setDifficulty(value);
                break;
            case "priority":
                setPriority(value);
                break;
            default:
                break;
        }
    }

    const handleCancel = () => {
        if (loading) return;
        props.setIsAdding(false)
    }

    return (
        props.isAdding ?
        (<div className="create-task-background">
            <div className="focus create-task">
                <form onSubmit={handleSubmit}>
                    <h2> Create Quest </h2>
                    <hr />
                    <label htmlFor="new-todo-name">Name:</label>
                    <input
                        type="text"
                        id="new-todo-name"
                        name="name"
                        autoComplete="off"
                        value={name}
                        onChange={handleChange}
                        className="primary-input create-task-name"
                    />

                    <label htmlFor="new-todo-description">Description:</label>
                    <textarea
                        id="new-todo-description"
                        name="description"
                        value={description}
                        onChange={handleChange}
                        className="primary-input"
                    />
                    <div className="radio-input">
                        <label>Difficulty:</label>
                        <div className="radio-input-options">
                            <label>
                                <input
                                    type="radio"
                                    name="difficulty"
                                    value="Easy"
                                    checked={difficulty === "Easy"}
                                    onChange={handleChange}
                                />
                                Easy
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="difficulty"
                                    value="Medium"
                                    checked={difficulty === "Medium"}
                                    onChange={handleChange}
                                />
                                Medium
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="difficulty"
                                    value="Hard"
                                    checked={difficulty === "Hard"}
                                    onChange={handleChange}
                                />
                                Hard
                            </label>
                        </div>
                    </div>
                    <div className="radio-input">
                        <label>Priority:</label>
                        <div className="radio-input-options">
                            <label>
                                <input
                                    type="radio"
                                    name="priority"
                                    value="low"
                                    checked={priority === "low"}
                                    onChange={handleChange}
                                />
                                Low
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="priority"
                                    value="medium"
                                    checked={priority === "medium"}
                                    onChange={handleChange}
                                />
                                Medium
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="priority"
                                    value="high"
                                    checked={priority === "high"}
                                    onChange={handleChange}
                                />
                                High
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="button-type-medium add-button">
                        {loading ? (<Spinner loading={loading} size={20} />) : 'Add'}
                    </button>
                </form>
                <button onClick={handleCancel} className="button-type-medium cancel-button">Cancel</button>
            </div>
        </div>)
        :
        <></>
    );
  }
  
  export default QuestCreateTask;