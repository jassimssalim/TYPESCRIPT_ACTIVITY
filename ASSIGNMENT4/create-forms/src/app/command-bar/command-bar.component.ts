import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.css']
})
export class CommandBarComponent {
  @Output() action = new EventEmitter<string>();

  emitAction(actionType: string) {
    this.action.emit(actionType);
  }
}
