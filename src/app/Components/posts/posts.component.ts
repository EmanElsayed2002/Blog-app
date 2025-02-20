import { Component } from '@angular/core';
import { IPost } from '../../models/post.model';
import { PostsService } from '../../posts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: IPost[] = [];
  commentBtn = false;
  showForm = false; // Controls form visibility

  constructor(private postService: PostsService) {
    this.posts = postService.postDetails;
  }

  toggleCommentBtn(): void {
    this.commentBtn = !this.commentBtn;
  }

  toggleForm() {
    this.showForm = !this.showForm; // Show or hide form
  }

  postForm = new FormGroup({
    TextBody: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    src: new FormControl('', [Validators.required]),
  });

  addPost() {
    if (this.postForm.valid) {
      const newPost: IPost = {
        id: Date.now(),
        userData: {
          name: 'eman',
          image:
            'https://ukmadcat.com/wp-content/uploads/2019/04/sleepy-cat.jpg',
          date: new Date(),
        },
        TextBody: this.postForm.value.TextBody || '',
        src: this.postForm.value.src || '',
        isLiked: false,
        createdDate: new Date(),
      };

      this.postService.addNewPost(newPost);
      this.postForm.reset();
      this.showForm = false;
    }
  }
}
