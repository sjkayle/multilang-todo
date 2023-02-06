import { Component } from '@angular/core';

import { LanguageCodes, UserActions } from 'src/app/enums/general.enum';
import { LoggingService } from 'src/app/services/logging/logging.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todos: Array<string> = [];
  newTodo = '';
  readonly langCodes = LanguageCodes;

  constructor(private loggingService: LoggingService) {}

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
