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
    public _books: BehaviorSubject<Book[]> = new BehaviorSubject([]);
    public books$: Observable<Book[]> = this._books.asObservable();


    constructor(private http: HttpClient) { }
    getAllBooks(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
   }
   
    get booksAsArray(): Book[] {
        return this._books.value
    }

}