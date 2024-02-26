import {Author} from './author.model';

export interface Book {
  id: number;
  title: string;
  author: Author;
  publicationDate: Date;
  genre?: string;
  description?: string;
}
