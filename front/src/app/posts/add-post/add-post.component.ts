import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../type/post';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  postForm = new FormGroup({
    title: new FormControl(),
    body: new FormControl()
  });

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('adauga');
  }

  onSubmit(): void {
    console.log('timis datele');
    const post = new Post(this.postForm.value);
    this.postService.addPost(post);
    // this.postForm.reset();
    this.router.navigateByUrl('/');
  }
}
