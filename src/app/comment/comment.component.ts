import {Component, OnInit} from '@angular/core';
import {CommentService} from "../services/comment.service";
import {Comment} from "../models/comment.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {
  }

  ngOnInit() {
    this.commentService.comments$.subscribe(comments => {
      this.comments = comments;
    });
  }

  onAddComment(content: string) {
    const newComment: Comment = {
      id: Math.random(), // Simulate unique ID generation
      content,
      author: 'Current User' // This would be dynamically set based on the logged-in user
    };

    this.commentService.addComment(newComment);
  }
}
