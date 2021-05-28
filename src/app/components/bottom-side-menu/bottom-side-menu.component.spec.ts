import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSideMenuComponent } from './bottom-side-menu.component';

describe('BottomSideMenuComponent', () => {
  let component: BottomSideMenuComponent;
  let fixture: ComponentFixture<BottomSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
