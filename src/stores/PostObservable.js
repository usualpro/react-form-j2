import { Services } from '../http-services/posts_service';
import { makeObservable, observable, computed, action } from 'mobx';

class PostObservable {
    posts = [];
    constructor() {
        makeObservable(this, {
            posts: observable,
            allPosts: computed
        })
        this.listPost();
    }

    setList = action(results => {
        this.posts = results.data;
    });

    addAPost = (postValue) => {
        Services.addAPost(postValue).then(() => this.listPost());
    };

    addAComment = (content, post_id) => {
        Services.addAComment(content, post_id).then(() => this.listPost());
    };

    deleteAPost = post_id => {
        Services.getPostById(post_id).then(results => {
            const arrayOfDeletePromises = results.data.comments.map((comment) => Services.delete('comments', comment.id));
            Promise.all(arrayOfDeletePromises).then(() => {
                Services.delete('posts', post_id).then(() => {
                    this.listPost();
                });
            });
        });
    }

    listPost = () => {
        Services.listAllPost().then((results) => this.setList(results));
    };

    get allPosts() {
        return this.posts
    }
}
export default new PostObservable();