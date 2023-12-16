import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdsPage } from './ads.page';

describe('AdsPage', () => {
  let component: AdsPage;
  let fixture: ComponentFixture<AdsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
