import {Component, OnInit} from '@angular/core';
import {PostService} from "../post.service";
import {IProduct} from "../product";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  products: IProduct[] = [];
  postForm: FormGroup;

  constructor(private postService: PostService, private fb: FormBuilder) {
  }

  addedString: string=" New product is added";
  isAdded: boolean = false;

  ngOnInit() {
    this.postForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      color: ['',[Validators.required,Validators.minLength(3)]]
    });
    this.postService.getPosts().subscribe(next => (this.products = next), error => (this.products = []));
  }

  addNewProduct() {
    if (this.postForm.valid) {
      const {value} = this.postForm;
      this.postService.createProduct(value)
        .subscribe(next => {
            this.products.unshift(next);
              this.postForm.reset({
                  name: '',
                  color: ''
                }
              );
          },
          error => console.log(error));
      this.isAdded = true;
    }
  }

}
