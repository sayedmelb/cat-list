import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatListingComponent } from './cat-listing.component';

describe('CatListingComponent', () => {
  let component: CatListingComponent;
  let fixture: ComponentFixture<CatListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
