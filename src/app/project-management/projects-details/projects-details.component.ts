import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-projects-details',
  standalone: true,
  imports: [],
  templateUrl: './projects-details.component.html',
  styleUrl: './projects-details.component.css'
})
export class ProjectsDetailsComponent implements OnInit {
  projectId: number = 0;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.projectId = +id; // The '+' prefix converts the string to a number
      } else {
        console.error('Project ID is missing');
      }
    });
  }
}
