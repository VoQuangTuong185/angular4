import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  en: string = 'english';
  vn: string = 'vietnamese';
  name = '';
  name_clone = '';
  imageUrl = 'https://cdn.sforum.vn/sforum/wp-content/uploads/2021/07/gg.jpg';
  forgot = false;

  forgotToggle(){
    this.forgot = !this.forgot;
  }

  showEvent(event:any){
    this.name = event.target.value;
    //console.log(event);
  }
}
