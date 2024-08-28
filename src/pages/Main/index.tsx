import { List, TextField } from "@mui/material"
import { Content } from "./style"
import { CustomButton as Button } from "../../components/Button"
import { useState } from 'react'
import { CardContainer } from "../../components/Card"

export const Main = () => {
    const [titleInput, setTitleInput] = useState<string>('');
    const [contentInput, setContentInput] = useState<string>('');

    return (
        <Content>
            <div className="inputArea">
                <TextField
                    value={titleInput}
                    onChange={e => {
                        setTitleInput(e.target.value)
                    }} 
                    className="inputTitle" variant="standard" color="secondary" placeholder="insert your task title" fullWidth />
                <TextField 
                    value={contentInput}
                    onChange={e => {
                        setContentInput(e.target.value)
                    }} 
                    className="inputContent" color="secondary" id="filled-hidden-label-normal" placeholder="insert your task content" multiline fullWidth />
                <Button className="btnInput" color="secondary" variant="contained">add task</Button>
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
                    {[0, 1, 2, 3, 4].map((sectionId) => (
                        <li key={`section-${sectionId}`}>
                            <ul>
                                <CardContainer title="Tarefa" content="Teste" finish={true}/>
                            </ul>
                        </li>
                    ))}
                </List>
            </div>
        </Content>
    )
}