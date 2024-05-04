import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-spinner-project';

  posts: any[] = [];

  constructor(private apiService: ApiServiceService)
  {
  }

  getUsers() {
    this.apiService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }

}
