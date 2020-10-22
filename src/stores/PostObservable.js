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
    })

    listPost = () => {
        Services.listAllPost().then((results) => this.setList(results));
    }
    get allPosts() {
        return this.posts
    }
}
export default new PostObservable();