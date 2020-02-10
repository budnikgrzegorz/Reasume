import { DynamicComponent } from './DynamicComponent';
import { Component, OnInit, ViewChild, ElementRef, HostListener, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

import { element } from 'protractor';
import { RouterModule, Routes, Router } from '@angular/router';
import { slideInAnimation } from './route-animation';
import { AppRoutingModule } from './app-routing.module';
import { CmsComponent } from './cms/cms.component';
import { AuthService } from './auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})

export class AppComponent implements OnInit {


  // visible = true;
  title = 'cv';
  visible: boolean;

  constructor(private router: Router, private auth: AuthService) { }


  @ViewChild('expirience', { static: true }) expirience: ElementRef;
  @HostListener('window:wheel', ['$event'])
  onWheelScroll(evento: WheelEvent) {
    // tslint:disable-next-line:no-unused-expression
    evento.view.onfocus;
        // Scroll down
    if (evento.deltaY > 0) {
      switch (this.router.url) {
        case '/about': {
          this.router.navigate(['/experience']);
          break;
        }
        case '/experience': {
          this.router.navigate(['/education']);
          break;
        }
        case '/education': {
          this.router.navigate(['/permissions']);
          break;
        }
        case '/permissions': {
          this.router.navigate(['/skills']);
          break;
        }
        case '/skills': {
          this.router.navigate(['/interests']);
          break;
        }
        // case '/interests': {
        //   this.router.navigate(['/awards']);
        //   break;
        // }
        // case '/awards': {
        //       break;
        // }
      }
    } else { // Scroll up
      switch (this.router.url) {
        case '/about': {
          break;
        }
        case '/experience': {
          this.router.navigate(['/about']);
          break;
        }
        case '/education': {
          this.router.navigate(['/experience']);
          break;
        }
        case '/permissions': {
          this.router.navigate(['/education']);
          break;
        }
        case '/skills': {
          this.router.navigate(['/permissions']);
          break;
        }
        case '/interests': {
          this.router.navigate(['/skills']);
          break;
        }
        // case '/awards': {
        //   this.router.navigate(['/interests']);
        //   break;
        // }

      }
    }
  }


  ngOnInit(): void {

  }


  // onActivate(componentRef) :boolean {
  //   // fires every time a new component is loaded
  //   if(componentRef = CmsComponent) {
  //     console.log(componentRef)
  //       return true;
  //   } else {
  //     console.log(componentRef)
  //     return false;
  //   }
  // }
}
