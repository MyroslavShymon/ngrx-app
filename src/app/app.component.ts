import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0
  updatedAt?: Date

  get cannotDecrease(): boolean {
    return this.counter <= 0
  }

  increase(): void {
    this.updatedAt = new Date()
    this.counter++
  }

  decrease(): void {
    this.updatedAt = new Date()
    this.counter--
  }

  clear(): void {
    this.updatedAt = new Date()
    this.counter = 0
  }
}
