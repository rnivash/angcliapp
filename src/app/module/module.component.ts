import { Component, Input } from '@angular/core';
import { Module } from  "../model/db"

@Component({
  selector: 'module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent {
  @Input()
  modules: Module[] = [];
}