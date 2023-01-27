import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public message: string = '*Debe de ingresar este campo';
  public color: string = 'red';
  public productForm: FormGroup = this.formBuilder.group({
    name: [ , [ Validators.required ] ]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  validateField(field: string): boolean {
    
    return this.productForm.get(field)?.invalid || false;
  }

  changeMessage(){

    this.message = Math.random().toString();
  }

  changeColor(){

    this.color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }
}
