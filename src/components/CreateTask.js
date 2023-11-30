import React, { useState } from "react";
import { useUser } from "../context/UserContext";

function CreateTask(props) {
    const [name, setName] = useState("");       
    const [description, setDescription] = useState(""); 
    const [type, setType] = useState("Regular");
    const [tags, setTags] = useState("");               
    const [difficulty, setDifficulty] = useState("");   
    const [priority, setPriority] = useState("");   

    const { userId, setTasks, tasksChanged, setTasksChanged } = useUser();

    async function handleSubmit(e) {
        e.preventDefault();

        const time = 20;


        const newTask = {
            taskName: name,
            description,
            type,
            tags,
            difficulty,
            priority,
            time
        };

        const apiUrl = `http://localhost:3500/api/user/addtask/${userId}`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        });

        if (response.ok) {
            // TODO
            const result = await response.json();
            setTasksChanged(!tasksChanged);
    
        } else {
            // TODO
        }


        setName("");
        setDescription("");
        setType("");
        setTags("");
        setDifficulty("");
        setPriority("");
    }

    function handleChange(e) {
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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2> Add Task </h2>
                <label htmlFor="new-todo-name">Name:</label>
                <input
                    type="text"
                    id="new-todo-name"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={handleChange}
                />

                <label htmlFor="new-todo-description">Description:</label>
                <textarea
                    id="new-todo-description"
                    name="description"
                    value={description}
                    onChange={handleChange}
                />

                <label htmlFor="new-todo-type">Type:</label>
                <select
                    id="new-todo-type"
                    name="type"
                    value={type}
                    onChange={handleChange}
                >
                    <option value="Regular">Regular</option>
                    <option value="Recurrent">Recurrent</option>
                    <option value="improvement">Improvement</option>
                </select>

                <label htmlFor="new-todo-tags">Tags:</label>
                <input
                    type="text"
                    id="new-todo-tags"
                    name="tags"
                    autoComplete="off"
                    value={tags}
                    onChange={handleChange}
                />

                <label>Difficulty:</label>
                <label>
                    <input
                        type="radio"
                        name="difficulty"
                        value="easy"
                        checked={difficulty === "easy"}
                        onChange={handleChange}
                    />
                    Easy
                </label>
                <label>
                    <input
                        type="radio"
                        name="difficulty"
                        value="medium"
                        checked={difficulty === "medium"}
                        onChange={handleChange}
                    />
                    Medium
                </label>
                <label>
                    <input
                        type="radio"
                        name="difficulty"
                        value="hard"
                        checked={difficulty === "hard"}
                        onChange={handleChange}
                    />
                    Hard
                </label>

                <label>Priority:</label>
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
                <button type="submit">
                Add
                </button>
        </form>
        <button onClick={() => props.setIsAdding(false)}>Cancel</button>
      </div>
    );
  }
  
  export default CreateTask;