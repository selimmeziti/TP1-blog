import { Component, Input, OnInit } from '@angular/core';
import { Post} from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  onDownLike() {
    this.post.loveIts--;
  }

  onUpLike() {
    this.post.loveIts++;
  }

}
