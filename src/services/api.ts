import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

const getToken = () => localStorage.getItem('access_token');

export const registerUser = async (data: { name: string; username: string; email: string; password: string }) => {
    try {
        const response = await api.post('/users/register', data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error();
    }
};

export const loginUser = async (data: { username: string; password: string }) => {
    try {
        const response = await api.post('/auth/login', { username: data.username, password: data.password });
        
        const { access_token } = response.data;
        localStorage.setItem('access_token', access_token);
        
        return response.data;
    } catch (error) {
        throw new Error('Failed to login');
    }
};

export const getTasks = async () => {
    try {
        const token = getToken();
        const response = await api.get('/tasks', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to fetch tasks:', error);
        throw new Error('Failed to fetch tasks');
    }
};

export const createTask = async (data: { title: string; description: string }) => {
    try {
        const token = getToken();
        const response = await api.post('/tasks', data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to create task:', error);
        throw new Error('Failed to create task');
    }
};

export const markTaskAsCompleted = async (taskId: number, isCompleted: boolean) => {
    try {
        const token = getToken();
        await api.patch(`/tasks/${taskId}/complete`, { isCompleted }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    } catch (error) {
        console.error('Failed to mark task as completed:', error);
        throw new Error('Failed to mark task as completed');
    }
};

export const getUser = async (userId: number) => {
    try {
        const token = getToken();
        const response = await api.get(`/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}