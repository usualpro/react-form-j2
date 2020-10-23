import { postInstance } from './instance';

export const Services = {
    getPostById: id => postInstance.get(`/posts/${id}`),
    listAllPost: () => postInstance.get('/posts'),
    addAPost: content => postInstance.post('/posts', { content }),
    addAComment: (content, post_id) => postInstance.post('/comments', { content, post_id }),
    delete: (subject, id) => postInstance.delete(`/${subject}/${id}`)
};