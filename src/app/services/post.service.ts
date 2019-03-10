import { Injectable } from '@angular/core';
import { Post} from '../models/post.model';
import { Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  updatePost(id: number, post: Post) {
    firebase.database().ref('/posts/' + id).update(post);
    this.emitPosts();
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
}
