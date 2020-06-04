import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Purchase} from '../../shared/interfaces/Purchase';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-purchase-preview',
  templateUrl: './purchase-preview.component.html',
  styleUrls: ['./purchase-preview.component.scss']
})
export class PurchasePreviewComponent implements OnInit {
  @Input() purchase: Purchase;
  @Input() isDateVisible = false;

  @Output() clicked = new EventEmitter<void>();
  @Output() deleted = new EventEmitter<void>();

  @Output() edit = new EventEmitter<Purchase>();
  isEdited = false;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      title: [this.purchase.title, [Validators.required]],
      price: [this.purchase.price, [Validators.required]],
      date: [this.purchase.date],
      comment: [this.purchase.comment]
    });
  }

  onClick() {
    this.clicked.emit();
  }

  onDelete(event: MouseEvent) {
    event.stopPropagation();
    this.deleted.emit();
  }

  onEditClick() {
    this.isEdited = true;
  }

  onEditPurchase(purchase: Purchase) {
    if (this.purchase.id) {
      purchase = Object.assign({...purchase} , {id: this.purchase.id});
    }

    this.edit.emit(purchase);
  }

  onCancelEdit() {
    this.isEdited = false;
    this.editForm.setValue({
      title: this.purchase.title,
      price: this.purchase.price,
      date: '',
      comment: this.purchase.comment ? this.purchase.comment : ''
    });
  }

  onSubmit() {

    const toEditPurchase: Purchase = {
      title: this.editForm.value.title,
      price: this.editForm.value.price,
      date: this.editForm.value.date,
      comment: this.editForm.value.comment
    };

    this.onEditPurchase(toEditPurchase);
    this.isEdited = false;
  }
}
