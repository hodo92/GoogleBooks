import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book';

import { BehaviorSubject } from "rxjs/BehaviorSubject";


let param = Math.floor((Math.random() * 1200) + 1000);

@Injectable({
    providedIn: 'root'
})
export class BookApiService {

    public apiUrl = "https://www.googleapis.com/books/v1/volumes?q=" + param;
    public books: Array<Book>;


    public allUpdate: Observable<Array<Object>>;
    public allSubject: Subject<Array<Object>>;


    constructor(private http: HttpClient) {
        this.allSubject = new Subject<Array<Object>>();
        this.allUpdate = this.allSubject.asObservable();
        this.getAllBooks();
    }


    getAllBooks() {
        const objservble = this.http.get(this.apiUrl);
        objservble.subscribe((res) => {
            // console.log(res);
            let parsedBooks = this.parsData(res);
            this.books = parsedBooks;;
            // console.log(this.books)
            this.allSubject.next(this.books);
        });


    }
     parsData(data) {
        let listOfBooks = [];
        for (let i = 0; i < 10; i++) {
            let book =  data.items[i].volumeInfo;
            let bookImage = "https://childrensbooksinfo.files.wordpress.com/2008/07/childrensbook.jpg";
            
            if (book.imageLinks == undefined) {
                book.imageLinks = { thumbnail: bookImage }
            } 
                if (book.authors == null) {
                    book.authors="Unknown";
                }
                if (book.publishedDate == null) {
                    book.publishedDate = "Unknown";
                }
                if (book.categories == null) {
                    book.categories = "Unknown";
                } 
            const newBook = {
                title:book.title,
                categories: book.categories,
                thumbnail: book.imageLinks.thumbnail,
                publishedDate: book.publishedDate,
                authors: book.authors
            }
            // console.log(newBook)
            listOfBooks.push(newBook);
        }
        // console.log(this.books)
        return this.books = listOfBooks;
    }
    deleteBook(book) {
        // console.log(book)

        this.books.splice(this.getBookIndex(book), 1)

    }


    changeBook(currentBook, newBook) {
        // console.log(currentBook)
        // console.log(newBook)
        let index = this.getBookIndex(currentBook);
        this.books[index] = newBook;
        // get index of current book ==>>>> index
        //this.books[index].title = newBook.title;
    }


    getBookIndex(book) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title == book.title) {
                console.log(i)
                return i;
            }
        }

    }

    AddBook(newBook){
        this.books.push(newBook);
    }
}
