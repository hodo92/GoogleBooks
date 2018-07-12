import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book'; 
import { BookApiService } from 'src/app/services/book-api.service'; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

    listOfBooks;

    constructor(private BookApiService: BookApiService, private route: ActivatedRoute) {}

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.BookApiService.getAllBooks().subscribe((resp) => {
              this.listOfBooks = [];
              for (let i = 0; i < 5; i++) {
              let arr = resp.items[i].volumeInfo;
              this.listOfBooks.push(arr);
              }
                  return this.listOfBooks ;
          })
      });
  }
}
