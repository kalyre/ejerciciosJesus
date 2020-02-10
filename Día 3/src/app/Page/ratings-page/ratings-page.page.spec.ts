import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsPagePage } from './ratings-page.page';

describe('RatingsPagePage', () => {
  let component: RatingsPagePage;
  let fixture: ComponentFixture<RatingsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingsPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
