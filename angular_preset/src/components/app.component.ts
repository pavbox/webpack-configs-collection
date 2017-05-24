import {Component, ViewContainerRef, ViewChild, ElementRef, AfterViewInit, OnInit} from '@angular/core';
import {Router, NavigationEnd, NavigationError, ActivatedRoute} from '@angular/router';
import {Observable} from "rxjs";


@Component({
    selector: 'app',
    templateUrl: '../views/app.component.html',
    styles: [
      require('./../../assets/css/main.min.less').toString(),
    ]
})

export class AppComponent implements AfterViewInit, OnInit {
    public constructor(viewContainerRef: ViewContainerRef,
                       private router: Router,
                       private route: ActivatedRoute,
                       private activateRoute: ActivatedRoute) {
    }
    ngOnInit() { }

    ngOnDestroy() { }

    ngAfterViewInit(): void { }
}
