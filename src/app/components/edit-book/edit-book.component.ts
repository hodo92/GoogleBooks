
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { BookApiService } from 'src/app/services/book-api.service';
import { Book } from 'src/app/book';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'app-edit-book',
    templateUrl: './edit-book.component.html',
    styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
    privateBook: Book;
    public title1;
    public authors1;
    public publishedDate1;
    public categories1;
    public thumbnail;

    constructor(private bookApiService: BookApiService, private dialogRef: MatDialogRef<EditBookComponent>, @Inject(MAT_DIALOG_DATA) private data) { }

    ngOnInit() {

        this.privateBook = this.data;
        // console.log(this.privateBook)
        this.title1 = this.privateBook.title;//V
        this.authors1 = this.privateBook.authors;//V
        this.publishedDate1 = this.privateBook.publishedDate;
        this.categories1 = this.privateBook.categories;
        this.thumbnail =  this.privateBook.thumbnail;
        console.log(this.thumbnail)

        this.privateBook = {
            title: this.title1,
            authors: this.authors1,
            publishedDate: this.publishedDate1,
            categories: this.categories1,
            thumbnail: this.thumbnail
            // ADD ALL FILEDS TO OBJ --THUMBNAIL--;
        }
    }
    submitEditBook(newBook) {

        this.bookApiService.changeBook(this.privateBook, newBook)

    }
    submit() {
        // console.log(this.title1, this.authors1, this.publishedDate1,this.categories1)
        const newBook = {
            title: this.title1,
            authors: this.authors1,
            publishedDate: this.publishedDate1,
            categories: this.categories1,
            thumbnail: this.thumbnail

        }
        this.bookApiService.changeBook(this.privateBook, newBook);
        this.dialogRef.close('the book changed');
    }
}
