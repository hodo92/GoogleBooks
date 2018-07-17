import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/book';
import { BookApiService } from 'src/app/services/book-api.service';
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

    constructor(private BookApiService: BookApiService, public dialog: MatDialog) { }

    ngOnInit() {
        this.BookApiService.allSubject.subscribe((data) => {
            this.listOfBooks = data;
        })

    }
    delete(book: Book): void {
        // console.log(book)
        let dialogRef = this.dialog.open(DeleteBookComponent, {
            data: book
        });
    }

    edit(book: Book): void {
        let dialogRef = this.dialog.open(EditBookComponent, {
            data: book
        });
    }
}
