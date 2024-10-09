import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MEnuPage } from './menu.page';

describe('MEnuPage', () => {
  let component: MEnuPage;
  let fixture: ComponentFixture<MEnuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MEnuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
