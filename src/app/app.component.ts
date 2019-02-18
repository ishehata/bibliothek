import { Component } from '@angular/core';
import { BookService } from './book.service';

import { Book } from './book.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bibliothek';
  books: Observable<Book[]>;

  constructor(private bookService: BookService) {

  }

  ngOnInit() {
    this.books = this.bookService.list();
  }
}
