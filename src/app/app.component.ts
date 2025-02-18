import { Component } from '@angular/core';
import { IPost } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Blog-app';

  postCard: IPost[] = [
    {
      userData: {
        name: 'eman',
        image: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      },
      TextBody: 'This is post 1',
      src: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      isLiked: false,
      createdDate: new Date(),
      createdBy: 'Eman Elsayed',
    },
    {
      userData: {
        name: 'eman',
        image: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      },
      TextBody: 'This is post 2',
      src: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      isLiked: true,
      createdDate: new Date(),
      createdBy: 'Eman Elsayed',
    },
    {
      userData: {
        name: 'eman',
        image: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      },
      TextBody: 'This is post 3',
      src: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      isLiked: false,
      createdDate: new Date(),
      createdBy: 'Eman Elsayed',
    },
    {
      userData: {
        name: 'eman',
        image: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      },
      TextBody: 'This is post 4',
      src: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      isLiked: false,
      createdDate: new Date(),
      createdBy: 'Eman Elsayed',
    },
    {
      userData: {
        name: 'eman',
        image: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      },
      TextBody: 'This is post 5',
      src: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      isLiked: false,
      createdDate: new Date(),
      createdBy: 'Eman Elsayed',
    },
    {
      userData: {
        name: 'eman',
        image: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      },
      TextBody: 'This is post 6',
      src: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      isLiked: false,
      createdDate: new Date(),
      createdBy: 'Eman Elsayed',
    },
    {
      userData: {
        name: 'eman',
        image: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      },
      TextBody: 'This is post 7',
      src: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      isLiked: false,
      createdDate: new Date(),
      createdBy: 'Eman Elsayed',
    },
  ];
}
