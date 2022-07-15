import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form-ng-model',
  templateUrl: './user-form-ng-model.component.html',
  styleUrls: ['./user-form-ng-model.component.css']
})
export class UserFormNgModelComponent implements OnInit {
  name = '';
  evenStyle = { color: 'red', fontSize: '40px' };
  oddStyle = { color: 'black', fontSize: '20px' };
  isHighlight = false;
  currentClass = { circle: !this.isHighlight, square: this.isHighlight };
  constructor() { }

  ngOnInit(): void {
  }
}
