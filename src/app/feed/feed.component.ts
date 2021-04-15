import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
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
    forkJoin(this.endpoint.endpointsObservables).subscribe(data => {
      this.feed = [...data[0]["news"], ...data[1]["news"]];
    });
  }

}
