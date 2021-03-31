import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements AfterViewInit {

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit() {
    this.elRef.nativeElement.querySelectorAll('mat-pseudo-checkbox').forEach(box => {
      box.style.display = 'none';
    });
  }

}
