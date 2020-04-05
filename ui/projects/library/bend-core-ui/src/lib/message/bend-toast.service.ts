import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class BendToastService {
  private SEVERITY_INFO = 'info';
  private SEVERITY_ERROR = 'error';
  private MESSAGE_TITLE = 'Alert';

  constructor(
    private messageService: MessageService
  ) {
  }

  info(message: string) {
    this.show(message, this.MESSAGE_TITLE, this.SEVERITY_INFO);
  }

  error(message: string) {
    this.show(message, this.MESSAGE_TITLE, this.SEVERITY_ERROR);
  }

  show(message: string, messageTitle: string, severityType: string) {
    this.messageService.add({severity: severityType, summary: messageTitle, detail: message});
  }
}
