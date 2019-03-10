import { Component, Input, OnInit } from '@angular/core';
import { Post} from '../models/post.model';
import { PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() indexPost: number;
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onDownLike(id: number, post: Post) {
    this.post.loveIts--;
    this.updatePost(id, post);
  }

  onUpLike(id: number, post: Post) {
    this.post.loveIts++;
    this.updatePost(id, post);
  }

  updatePost(id: number, post: Post) {
    this.postService.updatePost(id, post);
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
  }
}
