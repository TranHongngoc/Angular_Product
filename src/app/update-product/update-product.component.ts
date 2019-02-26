import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostService} from "../post.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {IProduct} from "../product";
import {error} from "util";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  product: IProduct;
  postForm: FormGroup;

  updatedString: string='Updated';
  isUpdated: boolean = false;

  constructor(private fb: FormBuilder,
              private postService: PostService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.postForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      color: ['',[Validators.required,Validators.minLength(3)]]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPostById(id).subscribe(
      next =>{
        this.product = next;
        this.postForm.patchValue(this.product);
      },
      error =>{
        console.log(error);
        this.product = null;
      }
    );
  }

  updateProduct(){
    if (this.postForm.valid){
      const{value} = this.postForm;
      const data = {
        ...this.product,
        ...value
      };
      this.postService.updateProduct(data).subscribe(
        next =>{
          this.router.navigate(['/products']);
        },
        error => console.log(error)
      );
      this.isUpdated=true;
    }
  }

}
