import { Component, Input } from '@angular/core';
import { Section } from  "../model/db"

@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input()
  sections : Section[] = [];
}
