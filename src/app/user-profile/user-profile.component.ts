import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  userName = 'John Doe';
  email = "jane.doe&#64;example.com";

  constructor() {
  }

  ngOnInit(): void {
  }
}
