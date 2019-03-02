import { Component } from '@angular/core';


@Component({
  selector: 'app-tabs-main',
  templateUrl: './tabs-main.component.html',
  styleUrls: ['./tabs-main.component.css']
})
export class TabsMainComponent {

  selectedTabIndex = 0;
  
  tabsObj = [
    { tab: 'First', content: 'First tab content' },
    { tab: 'Second', content: 'Second tab content' },
    { tab: 'Third', content: 'Third tab content' }
  ]

  addTab(){
    this.tabsObj.push(
      {tab: 'New', content: 'New tab content'});
    console.log('Adding tab!');
  }

  deleteTab(index: number){       
    this.tabsObj.splice(index, 1);
  }
  
}
