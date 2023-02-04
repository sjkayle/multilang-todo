import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageCodes, UserActions } from 'src/app/enums/general.enum';
import { LoggingService } from 'src/app/services/logging.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, OnDestroy {
  todos: Array<string> = [];
  newTodo = '';
  readonly langCodes = LanguageCodes;

  // TODO: remove below subscription
  loggingSubscription: Subscription = Subscription.EMPTY;

  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {
    this.loggingSubscription = this.loggingService.logs.subscribe((res) => {
      console.log(res);
    });
  }

  ngOnDestroy(): void {
    this.loggingSubscription?.unsubscribe();
  }

  onSubmit() {
    if (!this.newTodo.trim()) {
      return;
    }

    this.todos.push(this.newTodo);
    this.loggingService.log(new Date(), UserActions.AddTodo, this.newTodo);
    this.newTodo = '';
  }

  onLangChange(langCode: LanguageCodes) {
    this.loggingService.log(
      new Date(),
      UserActions.Translate,
      `to ${langCode}`
    );
  }
}
