import { Component, OnInit } from '@angular/core';
import { Post } from '../type/post';
import { PostService } from '../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;
 titlePage = 'Detalii articol';
  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postId = Number(+params.get('postId'));
      this.postService.getPost(postId).subscribe((post: Post) => {
        this.post = post;
      });
    });
  }

}
