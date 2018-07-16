
import { Component, OnInit, Inject } from '@angular/core';
import { BookApiService } from 'src/app/services/book-api.service';
import { Book } from 'src/app/book';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

    constructor(private bookApiService: BookApiService, private dialogRef: MatDialogRef<EditBookComponent>, @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
  }

}
