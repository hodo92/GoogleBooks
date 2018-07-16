import { Component, OnInit, Inject  } from '@angular/core';
import { BookApiService } from 'src/app/services/book-api.service'; 
import { Book } from 'src/app/book';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BookListComponent } from 'src/app/components/book-list/book-list.component';


@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
    privateBooks: Book[];
    listOfBooks ; 
    constructor(private bookApiService: BookApiService,private dialogRef: MatDialogRef<DeleteBookComponent>,@Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
      this.privateBooks=this.data;
  }

    deleteBook(book: Book){
        // this.dialogRef.close('the book deleted');
    }
}