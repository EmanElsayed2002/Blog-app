import { Component, Input } from '@angular/core';
import { IUser } from '../../models/user.model';
import { IPost } from '../../models/post.model';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css',
})
export class UserDataComponent {
  posts: IPost[] = [];
  constructor(private e: PostsService) {
    this.posts = this.e.postDetails;
  }
  @Input() post: IUser = {
    name: '',
    image: '',
    date: new Date(),
  };
}
