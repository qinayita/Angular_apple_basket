import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Apple } from '../apple.model';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent {

  static appleUrl: string = 'assets/pomme.png';

  @Input() apple: Apple = { id: -1 };
  @Output() deleteApple = new EventEmitter<Apple>();

  getAppleUrl() {
    return AppleComponent.appleUrl;
  }

  getTitle() {
    return 'Pomme n°' + this.apple.id;
  }

  handleDeleteApple() {
    this.deleteApple.emit(this.apple);
  }
}
