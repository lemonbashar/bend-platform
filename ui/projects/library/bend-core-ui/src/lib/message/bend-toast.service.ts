import {Injectable} from '@angular/core';
import {Message, MessageService} from 'primeng/api';
import {bendToastPosition} from './bend-toast-position-key';

@Injectable({ providedIn: 'root' })
export class BendToastService {
  private SEVERITY_INFO = 'info';
  private SEVERITY_ERROR = 'error';
  private MESSAGE_TITLE = 'Alert';
  private POSITION_KEY_CENTER = 'key-center';
  private POSITION_KEY_BOTTOM_CENTER = 'key-bottom-center';

  constructor(
    private messageService: MessageService
  ) {
  }

  info(message: string, position: string = bendToastPosition.POSITION_BOTTOM_CENTER) {
    this.show(message, this.MESSAGE_TITLE, this.SEVERITY_INFO, position);
  }

  infoBottomCenter(message: string) {
    this.showMessage({severity: this.SEVERITY_INFO, summary: this.MESSAGE_TITLE, detail: message, key: this.POSITION_KEY_BOTTOM_CENTER});
  }

  error(message: string, position: string = bendToastPosition.POSITION_BOTTOM_CENTER) {
    this.show(message, this.MESSAGE_TITLE, this.SEVERITY_ERROR, position);
  }

  show(message: string, messageTitle: string, severityType: string, position: string) {
    this.showMessage({severity: severityType, summary: messageTitle, detail: message, key: position});
  }

  showMessage(message: Message) {
    this.messageService.add(message);
  }
}
