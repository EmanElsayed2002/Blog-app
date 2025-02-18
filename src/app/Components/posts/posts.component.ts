import { Component, Input } from '@angular/core';
import { IPost } from '../../models/post.model';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  Myname: string = '';
  @Input() post: IPost = {
    userData: {
      name: '',
      image: '',
    },
    TextBody: '',
    src: '',
    isLiked: true,
    createdDate: new Date('12-12-2002'),
    createdBy: '',
  };

  Liked() {
    this.post.isLiked = !this.post.isLiked;
  }
  YouType(e: Event) {
    let t = e.target as HTMLInputElement;
    console.log(t.value);
    this.Myname = t.value;
  }
}
