import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AppRoutes } from './enums/routes.enum';
import { AuthenticationService } from './services/authentication/authentication.service';
import { LoggingService } from './services/logging/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  // TODO: remove below subscription
  loggingSubscription: Subscription = Subscription.EMPTY;
  isLoggedIn$?: Observable<boolean>;

  constructor(
    private authenticationService: AuthenticationService,
    private loggingService: LoggingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authenticationService.isLoggedIn$;
    this.loggingSubscription = this.loggingService.logs$.subscribe((res) => {
      console.log(res);
    });
  }

  ngOnDestroy(): void {
    this.loggingSubscription?.unsubscribe;
  }

  onLogout() {
    this.authenticationService.logout();
    this.router.navigate([AppRoutes.AuthPage]);
  }
}
