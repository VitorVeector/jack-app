import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const registerUser = async (data: { name: string; username: string; email: string; password: string }) => {
    try {
        const response = await api.post('/users', data);
        return response.data;
    } catch (error) {
        console.log(error)
        throw new Error();
    }
};

export const loginUser = async (data: { username: string, password: string}) => {
    try {
        const response = await api.post('/auth/login', { username: data.username, password: data.password });
        return response.data;
    } catch (error) {
        throw new Error('failed to login');
    }
};

export const getTasks = async () => {
    try {
        const response = await api.get('/tasks');
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to fetch tasks');
    }
};