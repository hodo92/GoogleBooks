import { Injectable } from '@angular/core';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book';

const privateBooks: Book[] = [] ; 

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

    public apiUrl = "https://www.googleapis.com/books/v1/volumes?q="
    books: Book = new Book();
    privateBooks: Book[] = privateBooks;

    constructor(private http: HttpClient) { }
    getAllBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.apiUrl);
   }
}