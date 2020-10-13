import { Component, OnInit } from '@angular/core';
import { Post } from '../type/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((posts: Post[]) => {
      posts.forEach(post => {this.posts.push(post); });
    });
  }

  deletePost(id: number): void{
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    });
  }

}
