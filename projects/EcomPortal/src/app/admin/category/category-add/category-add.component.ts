import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../../../common/service/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  categoryForm: FormGroup;
  @Output() addcategory = new EventEmitter<any>();
  constructor(private categoryService: CategoryService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      category: this.fb.array([this.buildForm()])
    });
  }

  buildForm() {
    return this.fb.group({
      categoryName: new FormControl('', Validators.required)
    });
  }

  addControl() {
    const categoryControl = this.categoryForm.controls.category as FormArray;
    categoryControl.push(this.buildForm());
  }

  removeControl(i: number) {
    const categoryControl = this.categoryForm.controls.category as FormArray;
    categoryControl.removeAt(i);
  }

  saveCategories() {
    this.addcategory.emit(this.categoryForm.controls.category.value);
  }
}
