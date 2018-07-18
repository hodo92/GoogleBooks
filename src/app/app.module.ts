import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// Material
import {
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
}

from '@angular/material';



//#region Components
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';

import { BookApiService } from './services/book-api.service';

import { TitlePipe } from './pipes/title.pipe';
import { RouterModule } from '@angular/router';
import { DeleteBookComponent } from 'src/app/components/delete-book/delete-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatSnackBarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        RouterModule.forRoot([])
    ],
    exports: [FormsModule],
    
    declarations: [
        AppComponent,
        AddBookComponent,
        BookListComponent,
        TitlePipe,
        AddBookComponent,
        DeleteBookComponent,
        EditBookComponent,
    ],
    entryComponents: [
        AddBookComponent,
        BookListComponent,
        DeleteBookComponent,
        EditBookComponent
    ],
    providers: [
        TitlePipe,
        BookApiService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
