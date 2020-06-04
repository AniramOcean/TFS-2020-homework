import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Purchase} from '../../shared/interfaces/Purchase';

@Component({
  selector: 'app-purchase-add',
  templateUrl: './purchase-add.component.html',
  styleUrls: ['./purchase-add.component.scss']
})
export class PurchaseAddComponent implements OnInit {
  @Output()
  add = new EventEmitter<Purchase>();
  form: FormGroup;

  get titleValue() {
    return this.form.get('title');
  }
  get priceValue() {
    return this.form.get('price');
  }
  get titleErrors() {
    return this.form.get('title').errors;
  }
  get priceErrors() {
    return this.form.get('price').errors;
  }

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(80)
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.min(10),
        Validators.max(10000),
        Validators.pattern('^[0-9]+$')
      ]),
      date: new FormControl(),
      comment: new FormControl()
    });
  }

  onSubmit() {

    const formValue = this.form.value;
    const purchase: Purchase = {
      title: formValue.title,
      price: +(formValue.price),
      date: formValue.date || new Date()
    };

    if (formValue.comment) {
      purchase.comment = formValue.comment;
    }

    formValue.date;
    this.add.emit(purchase);

  }

}
