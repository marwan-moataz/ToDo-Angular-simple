import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() user!: User;
  @Input() selected!: boolean;
  @Output() select = new EventEmitter();

  get getImage() {
    return 'assets/users/';
  }

  onClickUser() {
    this.select.emit(this.user.id);
  }
}
