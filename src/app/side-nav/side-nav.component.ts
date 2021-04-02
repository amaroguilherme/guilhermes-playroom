import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements AfterViewInit {

  constructor(private elRef: ElementRef,
              private router: Router) { }

  ngAfterViewInit() {
    this.elRef.nativeElement.querySelectorAll('mat-pseudo-checkbox').forEach(box => {
      box.style.display = 'none';
    });
  }

  navigateTo(value) {
    this.router.navigate(['/' + value])
  }

}
