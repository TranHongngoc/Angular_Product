import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {IProduct} from "../product";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PostService} from "../post.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private postService: PostService, fb: FormBuilder) { }

  products: IProduct[] = [];
  postForm: FormGroup;

  ngOnInit() {
    this.postService.getPosts().subscribe(next => (this.products = next), error => (this.products= []))
  }

  deleteProduct(i){
    const product = this.products[i];
    this.postService.deleteProduct(product.id).subscribe(() =>
    this.products = this.products.filter(t => t.id !== product.id));

  }

  // completeProduct(i){
  //   const productComplete = this.products[i];
  //   const{value} = this.postForm;
  //   const dataComp = {
  //     ...this.products,
  //     ...value
  //   }
  // }

  // toggleTodo(i) {
  //   const todo = this.todoList[i];
  //   const todoData = {
  //     ...todo,
  //     completed: !todo.completed
  //   };
  //   this.todoService.updateTodo(todoData).subscribe(next => {
  //     this.todoList[i].completed = next.completed;
  //   });
  // }
}
