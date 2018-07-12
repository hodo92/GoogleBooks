import { Injectable } from '@angular/core';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book';

const privateBooks: Book[] = [] ; 
let param=700;  

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
    
    public apiUrl = "https://www.googleapis.com/books/v1/volumes?q="+param ; 
    books: Book = new Book();
    privateBooks: Book[] = privateBooks;

    constructor(private http: HttpClient) { }
    getAllBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.apiUrl);
   }
}