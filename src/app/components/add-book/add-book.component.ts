
import { Component, OnInit, Inject } from '@angular/core';
import { BookApiService } from 'src/app/services/book-api.service';
import { Book } from 'src/app/book';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
    privateBook: Book;
    public title1;
    public authors1;
    public publishedDate1;
    public categories1;
    public thumbnail;

    constructor(private bookApiService: BookApiService, private dialogRef: MatDialogRef<AddBookComponent>, @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
  }


    submit() {
        // console.log(this.title1, this.authors1, this.publishedDate1, this.categories1, this.thumbnail)
        const newBook = {
            title: this.title1,
            authors: this.authors1,
            publishedDate: this.publishedDate1,
            categories: this.categories1,
            thumbnail: this.thumbnail

        }
        this.bookApiService.AddBook(newBook);
        this.dialogRef.close('the book changed');
    }
}
