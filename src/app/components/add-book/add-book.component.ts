
import { Component, OnInit, Inject } from '@angular/core';
import { BookApiService } from 'src/app/services/book-api.service';
import { Book } from 'src/app/book';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TitlePipe } from "src/app/pipes/title.pipe";
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}


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

    titleFormControl = new FormControl('', [Validators.required]);
    authorsFormControl = new FormControl('', [Validators.required]);
    dateFormControl = new FormControl('', [Validators.required,]);
    categoriesFormControl = new FormControl('', [Validators.required]);
    thumbnailFormControl = new FormControl('', [Validators.required], );

    matcher = new MyErrorStateMatcher();


    constructor(private bookApiService: BookApiService, private titlePipe: TitlePipe,private dialogRef: MatDialogRef<AddBookComponent>, @Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
  }


    submit() {
        const newBook = {
            title: this.titlePipe.transform(this.title1),
            authors: this.authors1,
            publishedDate: this.publishedDate1,
            categories: this.categories1,
            thumbnail: this.thumbnail

        }
        this.bookApiService.AddBook(newBook);
        this.dialogRef.close('the book add to the list');
    }
}
