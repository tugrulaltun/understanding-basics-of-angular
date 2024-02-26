import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Comment} from "../models/comment.model";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentsSource = new BehaviorSubject<Comment[]>([]);
  comments$ = this.commentsSource.asObservable();

  constructor() {
    this.fetchComments();
  }

  fetchComments() {
    const initialComments: Comment[] = [
      {id: 1, content: 'This is the first comment', author: 'User 1'},
      {id: 2, content: 'This is the', author: 'User 2'}
    ];
    this.commentsSource.next(initialComments);
  }

  addComment(comment: Comment) {
    const currentComments = this.commentsSource.value;
    const updatedComments = [...currentComments, comment];
    this.commentsSource.next(updatedComments);

    // Optionally, send the new comment to a server
  }

  refetchComments() {
    this.fetchComments();
  }
}
