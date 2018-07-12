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

    fullBook;

    constructor(private BookApiService: BookApiService, private route: ActivatedRoute) {}

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.BookApiService.getAllBooks().subscribe((resp) => {
                  this.fullBook = resp.items[0].volumeInfo; ; 
              console.log(this.fullBook);
              return this.fullBook ;
          })
      });
  }

}
