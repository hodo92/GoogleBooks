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


    getAllBooks(): void {
        const objservble = this.http.get<any[]>(this.apiUrl);
        objservble.subscribe((res) => {
            this.books = res;
            console.log(this.parsData(res))
            this.allSubject.next(this.parsData(res));
        });


    }
    parsData(data) {
        let listOfBooks = [];
        for (let i = 0; i < 10; i++) {
            let arr = data.items[i].volumeInfo;
            if (arr.imageLinks == null) {
                arr = null;
            }
            else {
                if (arr.authors == null) {
                    arr.authors = "Unknown";
                }
                if (arr.publishedDate == null) {
                    arr.publishedDate = "Unknown";
                }
                if (arr.categories == null) {
                    arr.categories = "Unknown";
                }
                listOfBooks.push(arr);
            }
        }
        return this.books = listOfBooks;
    }
    deleteBook(book) {
        console.log(book)
        this.getBookIndex(book)
    }
    getBookIndex(book) :void{
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].title == book.title) {
                console.log(i)
                this.books.splice(i, 1)
            }
        }
    }
}
