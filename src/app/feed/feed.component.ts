import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../services/endpoints.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  feed: any[] = [];
  loading: boolean;

  constructor(private endpoint: EndpointsService) { }

  ngOnInit() {
    this.loading = true;
    this.getFeed();
  }

  getFeed() {
    this.endpoint.feed().subscribe(data => {
      this.loading = false;
      this.feed = data["news"];
    });
  }

}
