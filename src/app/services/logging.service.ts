import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserActions } from '../enums/general.enum';

interface ILogs {
  date: Date;
  log: string;
}

interface IUserLogs {
  user: string;
  logs: Array<ILogs>;
}

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  // TODO: implement interface ILogData
  logs = new BehaviorSubject<Array<string>>([]);

  log(date: Date, action: UserActions, text: string) {
    // TODO: format date
    const message = `${date} ${action}: ${text}`;
    this.logs.next(this.logs.getValue().concat([message]));
  }
}
