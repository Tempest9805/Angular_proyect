import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[] =[{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public OnDeleate: EventEmitter<string> = new EventEmitter();

  onDeleateCharacter(id?: string):void{
    if(!id) return;
    this.OnDeleate.emit(id);
  }

  
}
