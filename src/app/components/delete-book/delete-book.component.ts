import { Component, OnInit, Inject } from '@angular/core';
import { BookApiService } from 'src/app/services/book-api.service';
import { Book } from 'src/app/book';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
    selector: 'app-delete-book',
    templateUrl: './delete-book.component.html',
    styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
    privateBook: Book
    constructor(private bookApiService: BookApiService, private dialogRef: MatDialogRef<DeleteBookComponent>, @Inject(MAT_DIALOG_DATA) private data) { }

    ngOnInit() {
        this.privateBook = this.data;
        
    }

    deleteBook() {
        this.bookApiService.deleteBook(this.privateBook);
        this.dialogRef.close('the book deleted');
    }
}
