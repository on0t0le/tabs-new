import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-main',
  templateUrl: './tabs-main.component.html',
  styleUrls: ['./tabs-main.component.css']
})
export class TabsMainComponent {

  tabs: string[] = [
    'first',
    'second',
    'third'
  ];

  content: string[] = [
    'First tab content',
    'Second tab content',
    'Third tab content'
  ]

}
