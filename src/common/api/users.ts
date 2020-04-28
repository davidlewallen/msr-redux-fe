import axios from 'axios';

export const createAccount = (body: { email: string, password: string }, config = {}) => axios.post('/users', { user: body }, config);

export const login = (body: { email: string, password: string }, config = {}) => axios.post('/users/login', { user: body }, config);

export const verifyEmail = (id: string, key: string, config = {}) => axios.get(`/users/verify/${id}/${key}`, config)
