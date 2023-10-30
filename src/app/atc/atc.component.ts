import { Component, Input } from '@angular/core';
import { Section } from '../model/db';

@Component({
  selector: 'atc',
  templateUrl: './atc.component.html',
  styleUrls: ['./atc.component.scss']
})
export class AtcComponent {

  @Input()
  sections : Section[] = [];

  selectionState?: string 

  addtocart() : void{
    this.selectionState = '';
    this.sections.forEach(s => {
      s.modules.forEach(m => {
        this.selectionState += `${m.name}{`;
        m.options.forEach(o => {
          if(o.selected){
            this.selectionState += `${o.name}`;
          }
        });
        this.selectionState += `}`;
      });
    });
  }

}
