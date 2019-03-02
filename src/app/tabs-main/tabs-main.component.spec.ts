import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsMainComponent } from './tabs-main.component';

describe('TabsMainComponent', () => {
  let component: TabsMainComponent;
  let fixture: ComponentFixture<TabsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
