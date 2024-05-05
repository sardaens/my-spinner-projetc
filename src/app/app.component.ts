import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-spinner-project';

  loading$ = this.loader.loading$;

  posts: any[] = [];

  constructor(private apiService: ApiServiceService, public loader: LoaderService)
  {
  }

  getUsers() {
    this.apiService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }

}
