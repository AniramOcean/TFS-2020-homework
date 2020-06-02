import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Card} from '../../../shared/interfaces/CardInterface';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  @Output() addCard = new EventEmitter<Card>();

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  constructor() { }

  get getTitle() {
    return this.form.get('title');
  }
  get getDescription() {
    return this.form.get('description');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      this.addCard.emit(this.form.value);
      return this.form.untouched;
    }
  }

  getError(controlName: string): string {
    const control = this.form.get(controlName);
    const errors = control.errors;

    if (!errors) {
      return;
    }
    if (control.invalid && control.touched && errors.required) {
      return 'Обязательное поле';
    }
  }
}
