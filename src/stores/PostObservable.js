import { Services } from '../http-services/posts_service';
import { makeObservable, observable, computed } from 'mobx';

class PostObservable {
    posts = [];
    constructor() {
        makeObservable(this, {
            posts: observable,
            allPosts: computed
        })
        this.listPost();
    }
    listPost = () => {
        Services.listAllPost().then(results => {
            this.posts = results.data;
        })
    }
    get allPosts() {
        return this.posts
    }
}
export default new PostObservable();