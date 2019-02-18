import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() data: Book;
  progress = 0;

  constructor() { }

  ngOnInit() {
    this.data.pagesRead = this.data.pagesRead || 0;
    this.calculateProgress();
  }

  calculateProgress() {
    this.progress = 100 * this.data.pagesRead / this.data.pages;
  }

}
