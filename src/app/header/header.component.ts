import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  posts: any[] = [];

  loading$ = this.loader.loading$;

  constructor(private apiService: ApiServiceService, public loader: LoaderService)
  {
  }

  getPosts()
  {
    console.log("get posts from header");
    this.apiService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });

  }
}
