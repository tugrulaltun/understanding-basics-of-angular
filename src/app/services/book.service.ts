import {Injectable} from '@angular/core';
import {Book} from "../models/book.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: 'Angular for Beginners',
      author: {id: 1, name: 'John Doe', birthDate: new Date('1980-01-01')},
      publicationDate: new Date('2020-05-20'),
      genre: 'Educational'
    },
    {
      id: 2,
      title: 'Advanced Angular Techniques',
      author: {id: 2, name: 'Jane Smith', birthDate: new Date('1975-08-15')},
      publicationDate: new Date('2021-07-15'),
      // No genre or description, demonstrating optional properties
    }
  ];

  getBooks(): Book[] {
    return this.books;
  }
}
