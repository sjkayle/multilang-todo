import { Component } from '@angular/core';
import { LanguageCodes } from 'src/app/enums/general.enum';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todos: Array<string> = [];
  newTodo = '';
  readonly langCodes = LanguageCodes;

  onSubmit() {
    if (!this.newTodo.trim()) {
      return;
    }

    this.todos.push(this.newTodo);
    this.newTodo = '';
  }

  onLangChange(langCode: LanguageCodes) {
    console.log(langCode);
  }
}
