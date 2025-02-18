import { Component, Input } from '@angular/core';
import { IUser } from '../../models/user.model';
import { IPost } from '../../models/post.model';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css',
})
export class UserDataComponent {
  @Input() userDetails: IPost = {
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
}
