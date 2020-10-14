import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../type/post';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  postForm = new FormGroup({
    title: new FormControl(),
    body: new FormControl()
  });

  id: number;
  post: Post = {  id: 0, title: '', body: '' };


  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.postId;
    this.getPost(this.id);

  }

  public getPost(id: number): void{
    this.postService.getPost(id).subscribe((data: Post) => {
      console.log('datele primite', data);
      this.post = data;
    });
  }

  get f(){
    return this.postForm.controls;
  }

  onSubmit(): void{
    console.log(this.postForm.value);
    this.postService.update(this.id, this.postForm.value).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('/');
    });
  }

}
