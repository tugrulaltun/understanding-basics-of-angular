import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'Hello, world!';
  }

  ngOnInit(): void {
  }
}
