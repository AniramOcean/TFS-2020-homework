import { Component, OnInit } from '@angular/core';
import { ConvertCaseType } from '../../pipes/convert-case/convert-case.pipe';

@Component({
  selector: 'app-convert-case-demo',
  templateUrl: './convert-case-demo.component.html',
  styleUrls: ['./convert-case-demo.component.scss']
})
export class ConvertCaseDemoComponent implements OnInit {

  constructor() { }
  inputValue = 'Lorem ipsum dolor sit amet';

  public selectedType: ConvertCaseType;

  ngOnInit(): void {
  }

  onClick(str) {
    this.inputValue = str;
  }
}
