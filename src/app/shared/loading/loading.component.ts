import { Component, ElementRef, ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements AfterViewInit, OnDestroy {
  loadingSubscription: Subscription;
  currentMessage: string;
  messages = [
    'This might take a while, stay with me...',
    'I swear this is not ALL my fault.',
    'Promise you its not broken. We are almost there.',
    'Do you wanna hear a joke?',
    'You know when developers say that it gonna be quick? Funny, right.',
    'Listen. A lot its being done on the background. Do not be rude.',
    'Have you watched Pulp Fiction? Its pretty cool.',
    'Bananas suck. Banana yogurt its nice, though.'
  ]

  constructor(private loadingScreenService: LoadingService,
              private _elmRef: ElementRef,
              private _changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this._elmRef.nativeElement.style.display = 'none';
    this.loadingSubscription = this.loadingScreenService.loading$.pipe().subscribe(
      (status) => {
        this.setMessage(status);
        this._elmRef.nativeElement.style.display = status ? 'block' : 'none';
        this._changeDetectorRef.detectChanges();
      }
    );
  }

  setMessage(status) {
    if (status) {
      setInterval(() => {
        this.currentMessage = this.messages[Math.floor(Math.random()*this.messages.length)];
      }, 5000)
    }
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}
