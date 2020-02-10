import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Fruit } from '../../models/fruit.model';

@Component({
  selector: 'app-fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrls: ['./fruit-card.component.scss'],
})

export class FruitCardComponent {
  @Input() readonly fruit: Fruit;
  @Output() private readonly deletePressed = new EventEmitter<number>();

  buttonDeletePressed(){
    this.deletePressed.emit(15);
  }

  constructor(){

  }
}
