import { Component, Input } from '@angular/core';
import { Module, Option } from '../model/db';

@Component({
  selector: 'conf-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {
  @Input()
  options: Option[]=[];

  @Input()
  module?: Module;

  selected(op: Option): void{
    if(!this.module?.isMultiSelect){
      this.options.forEach(element => {
        element.selected = false;
      });
      op.selected = true;

    }
    else{
      op.selected = !op.selected;
    }
    
  }

}
