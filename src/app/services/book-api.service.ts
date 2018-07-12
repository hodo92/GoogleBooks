import { Injectable } from '@angular/core';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Book } from '../book';

let param = Math.floor((Math.random() * 500) + 1);

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
    
    public apiUrl = "https://www.googleapis.com/books/v1/volumes?q="+param ; 
    books: Book = new Book();
    
    constructor(private http: HttpClient) { }
    getAllBooks(): Observable<any> {
        return this.http.get<any>(this.apiUrl);
   }
}