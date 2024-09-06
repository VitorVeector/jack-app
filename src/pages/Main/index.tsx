import { List, TextField } from "@mui/material";
import { Content } from "./style";
import { CustomButton as Button } from "../../components/Button";
import { useEffect, useState } from 'react';
import { CardContainer } from "../../components/Card";
import { createTask, getTasks, markTaskAsCompleted } from "../../services/api";

export const Main = () => {
    const [titleInput, setTitleInput] = useState<string>('');
    const [contentInput, setContentInput] = useState<string>('');
    const [tasks, setTasks] = useState<any[]>([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const tasksData = await getTasks();
                setTasks(tasksData);
            } catch (error) {
                console.error('error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    const handleAddTask = async () => {
        try {
            const newTask = await createTask({ title: titleInput, description: contentInput }); // Remover userId
            setTasks([...tasks, newTask]);
            setTitleInput('');
            setContentInput('');
        } catch (error) {
            console.error('failed to add task:', error);
        }
    };

    const handleMarkAsCompleted = async (taskId: number, isCompleted: boolean) => {
        try {
            await markTaskAsCompleted(taskId, !isCompleted);
            setTasks(tasks.map(task =>
                task.id === taskId ? { ...task, isCompleted: !isCompleted } : task
            ));
        } catch (error) {
            console.error('Failed to mark task as completed:', error);
        }
    };

    return (
        <Content>
            <div className="inputArea">
                <TextField
                    required
                    value={titleInput}
                    onChange={e => setTitleInput(e.target.value)}
                    className="inputTitle"
                    variant="standard"
                    color="secondary"
                    placeholder="Insert your task title"
                    fullWidth
                />
                <TextField
                    required
                    value={contentInput}
                    onChange={e => setContentInput(e.target.value)}
                    className="inputContent"
                    color="secondary"
                    placeholder="Insert your task content"
                    multiline
                    fullWidth
                />
                <Button onClick={handleAddTask} className="btnInput" color="secondary" variant="contained">
                    Add Task
                </Button>
            </div>
            <div className="contentArea">
                <List
                    sx={{
                        width: '100%',
                        maxWidth: '100%',
                        borderRadius: '12px',
                        position: 'relative',
                        overflow: 'auto',
                        padding: '14px',
                        maxHeight: 500,
                        '& ul': { padding: 0 },
                    }}
                    subheader={<li />}
                >
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <ul>
                                <CardContainer
                                    title={task.title}
                                    description={task.description}
                                    finish={task.isCompleted}
                                    onComplete={() => handleMarkAsCompleted(task.id, task.isCompleted)}
                                />
                            </ul>
                        </li>
                    ))}
                </List>
            </div>
        </Content>
    );
};