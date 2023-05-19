import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //Lo que se envia
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 50000
    }
  ]

  // Lo que se recibe
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(id?: string): void{
    if (!id) return;
    console.log(id);

   this.onDelete.emit( id )

  }

}
