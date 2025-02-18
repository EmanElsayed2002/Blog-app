import { Component } from '@angular/core';
import { IPost } from '../../models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  Myname: string = '';
  post: IPost = {
    TextBody: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quia officiis
    doloremque nemo commodi quod. Commodi nulla harum ipsam assumenda
    dignissimos, pariatur sunt aperiam obcaecati tenetur fugit nobis
    voluptatibus fugiat.`,
    src: `https://tse2.mm.bing.net/th?id=OIP.DaW0qim7U77q-Ngb6A3QDQHaEu&pid=Api&P=0&h=220`,
  };
  Liked() {
    console.log('you Liked Post');
  }
  YouType(e: Event) {
    let t = e.target as HTMLInputElement;
    console.log(t.value);
    this.Myname = t.value;
  }
}
