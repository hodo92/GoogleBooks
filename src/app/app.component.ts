
import { Component, OnInit, Inject } from '@angular/core';
import { BookApiService } from 'src/app/services/book-api.service';
import { Book } from 'src/app/book';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddBookComponent } from 'src/app/components/add-book/add-book.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

    constructor(private bookApiService: BookApiService, public dialog: MatDialog) { }
    
    ngOnInit() { }

    addBook(book: Book): void {
        let dialogRef = this.dialog.open(AddBookComponent, {
        });
    }

}
