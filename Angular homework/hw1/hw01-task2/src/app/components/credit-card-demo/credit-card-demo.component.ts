import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-credit-card-demo',
  templateUrl: './credit-card-demo.component.html',
  styleUrls: ['./credit-card-demo.component.scss']
})
export class CreditCardDemoComponent implements OnInit {
  @Output()
  inputValue: number;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(num) {
    this.inputValue = num;
  }
}
