import { Injectable } from '@angular/core';
import { IPost } from './models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}
  postDetails: IPost[] = [
    {
      id: Date.now(),
      userData: {
        name: 'eman',
        image: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
        date: new Date(),
      },
      TextBody: 'This is post 1',
      src: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      isLiked: false,
      createdDate: new Date(),
    },
    {
      id: Date.now(),
      userData: {
        name: 'eman',
        image: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
        date: new Date(),
      },
      TextBody: 'This is post 2',
      src: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      isLiked: false,
      createdDate: new Date(),
    },
    {
      id: Date.now(),
      userData: {
        name: 'eman',
        image: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
        date: new Date(),
      },
      TextBody: 'This is post 3',
      src: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      isLiked: false,
      createdDate: new Date(),
    },
    {
      id: Date.now(),
      userData: {
        name: 'eman',
        image: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
        date: new Date(),
      },
      TextBody: 'This is post 4',
      src: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      isLiked: false,
      createdDate: new Date(),
    },
    {
      id: Date.now(),
      userData: {
        name: 'eman',
        image: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
        date: new Date(),
      },
      TextBody: 'This is post 5',
      src: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      isLiked: false,
      createdDate: new Date(),
    },
    {
      id: Date.now(),
      userData: {
        name: 'eman',
        image: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
        date: new Date(),
      },
      TextBody: 'This is post 1',
      src: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      isLiked: false,
      createdDate: new Date(),
    },
    {
      id: Date.now(),
      userData: {
        name: 'eman',
        image: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
        date: new Date(),
      },
      TextBody: 'This is post 1',
      src: 'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
      isLiked: false,
      createdDate: new Date(),
    },
  ];
  deletePostById(id: number) {
    this.postDetails = this.postDetails.filter((el) => el.id != id);
  }
  showPosts() {
    console.log(this.postDetails);
  }
  addNewPost(newPost: IPost) {
    this.postDetails.push(newPost);
  }
}
