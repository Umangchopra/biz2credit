import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'
import {
  DrawerTransitionBase,
  RadSideDrawer,
  SlideInOnTopTransition,
} from 'nativescript-ui-sidedrawer'
import { filter } from 'rxjs/operators'
import { Application } from '@nativescript/core'
import { ItemService } from './item.service'
import { SharedServiceService } from './shared-service.service'

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  private _activatedUrl: string
  private _sideDrawerTransition: DrawerTransitionBase
  public sideDrawerEnabled: boolean = false;
  constructor(private router: Router, private routerExtensions: RouterExtensions,
     public _appService: ItemService,public _sharedService: SharedServiceService,) {
    // Use the component constructor to inject services.
  }

  ngOnInit(): void {
    this._activatedUrl = '/home'
    this._sideDrawerTransition = new SlideInOnTopTransition()

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => (this._activatedUrl = event.urlAfterRedirects))

    this._appService.sideDrawerEnabled.subscribe(x =>
      this.sideDrawerEnabled = false
    );
    this.getCurrentState()
  }

  
  // to check user is in login state or not 
  getCurrentState() {
    this._sharedService.componentMethodCalled$.subscribe((data) => {
      if(data.value==true){
        this.sideDrawerEnabled = true;
      }
    });
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition
  }

  isComponentSelected(url: string): boolean {
    return this._activatedUrl === url
  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade',
      },
    })

    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.closeDrawer()
  }
}
