import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Section } from '../model/db';
import { ConfiguratorService } from '../configurator.service';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  providers:[ConfiguratorService]
})
export class ConfiguratorComponent {

  sections : Section[];

  private service: ConfiguratorService;

  constructor(service : ConfiguratorService,
    private route: ActivatedRoute){
    this.service = service;
    this.sections = [];
  }



  ngOnInit(){
    let oc = this.route.snapshot.paramMap.get("ordercode") ;
    this.service.getSection(oc).subscribe((data) => {
      this.sections = data;
      this.sections.forEach(s =>{
        console.log(s);
      })
      
      });
      
  }
}
