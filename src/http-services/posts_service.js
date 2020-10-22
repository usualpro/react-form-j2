import { postInstance } from './instance';

export const Services = {
    listAllPost: () => postInstance.get('/posts'),
    addAPost: content => postInstance.post('/posts', { content })
};