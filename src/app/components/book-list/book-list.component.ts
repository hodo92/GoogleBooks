import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book'; 
import { BookApiService } from 'src/app/services/book-api.service'; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeleteBookComponent } from 'src/app/components/delete-book/delete-book.component';
import { EditBookComponent } from 'src/app/components/edit-book/edit-book.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {

    listOfBooks;

    constructor(private BookApiService: BookApiService, private route: ActivatedRoute, public dialog: MatDialog) {}

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.BookApiService.getAllBooks().subscribe((resp) => {
              this.listOfBooks = [];
              for (let i = 0; i < 10; i++) {
              let arr = resp.items[i].volumeInfo;
                  if (arr.imageLinks == null){
                      arr=null; 
                  } 
                  else {
                      if (arr.authors == null){
                          arr.authors ="Unknown";
                      }
                      if (arr.publishedDate == null){
                          arr.publishedDate = "Unknown";
                      }
                       if (arr.categories == null){
                          arr.categories = "Unknown";
                       }
              this.listOfBooks.push(arr);
                  }
              }
                  return this.listOfBooks ;
          })
      });
      
  }
   
       openDialog(book: Book): void {
           let dialogRef = this.dialog.open(DeleteBookComponent, {
               data: this.listOfBooks 
           });
   }
   
    openDialog2(book: Book): void {
        let dialogRef = this.dialog.open(EditBookComponent, {
            data: this.listOfBooks
        });
    }
}
