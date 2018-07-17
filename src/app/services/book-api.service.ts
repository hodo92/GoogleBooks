import { Injectable } from '@angular/core';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book';

import { BehaviorSubject } from "rxjs/BehaviorSubject";


let param = Math.floor((Math.random() * 1200) + 1000);

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
    
    public apiUrl = "https://www.googleapis.com/books/v1/volumes?q="+param ; 
    books: Book = new Book();
    //store received books as subject so changes will cause detection
    public _books: BehaviorSubject<Book[]> = new BehaviorSubject([]);
    public books$: Observable<Book[]> = this._books.asObservable(); 


    constructor(private http: HttpClient) { }
    

    getAllBooks(): Observable<any> {
        
        return this.http.get<any>(this.apiUrl);
   }

    // deleteABook(book) {
    //     for (let i = 0; i < this.books$.length; i++) {
    //         if (book.id === this.books$[i].id) {
    //             let indextodelete = i
    //             splice()
    //         }
    //     }
    //     let bookIndex = this.books$.findIndex(m => m._id == book._id);
    //     this.books$.splice(bookIndex, 1);
        
    // }
}