import {Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent2 {

  @Input()
  public characterList: Character[] = [{
    name:'Trunks',
    power: 10
  }]

  //onDelete = index value: number
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void {

    if(!id) return;

    this.onDeleteId.emit(id);
    console.log(id)
  }
}
