import { Component } from '@angular/core';
import { Apple } from '../apple.model';

@Component({
  selector: 'app-apple-basket',
  templateUrl: './apple-basket.component.html',
  styleUrls: ['./apple-basket.component.css']
})
export class AppleBasketComponent {

  apples: Array<Apple>;

  constructor() {
    this.apples = [];
  }

  handleAddApple() {
    // const newApple: Apple = {
    //   id: (this.apples[this.apples.length - 1]?.id || 0) + 1,
    // };
    // this.apples.push(newApple);

    const newApple: Apple = {
      id:
        this.apples.reduce(
          (prev, apple) => (prev > apple.id ? prev : apple.id),
          0
        ) + 1,
    };
    this.apples = [...this.apples, newApple];
  }

  handleDeleteApple(apple: Apple) {
    // this.apples.splice(
    //   this.apples.findIndex((a) => a.id === apple.id),
    //   1
    // );
    this.apples = this.apples.filter((x) => x.id != apple.id);
  }
}


