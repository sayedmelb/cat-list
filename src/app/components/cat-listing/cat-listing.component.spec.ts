import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatListingComponent } from './cat-listing.component';
import { CatApiService } from '../../services/cat-api.service';
import {DebugElement} from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

let catService : CatApiService;

describe('CatListingComponent', () => {
  let component: CatListingComponent;
  let fixture: ComponentFixture<CatListingComponent>;
  let de: DebugElement;

  beforeEach(async(() => {

    // Create jasmine spy object 
    //catService = jasmine.createSpyObj('CatApiService', 'getCatListing');
    // Provide the dummy/mock data to sortNumberData method.
    //sortServiceSpy.getCatListing.returnValue([someRandomArray]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CatListingComponent ],
      providers: [CatApiService, HttpClient, HttpHandler],
    })
    .compileComponents();
  }));

  

  beforeEach(() => {
    fixture = TestBed.createComponent(CatListingComponent);
    component = fixture.componentInstance;
    catService = TestBed.get(CatApiService);
    fixture.detectChanges();
  });

  it('should create Cat listing component', () => {
    const fixture = TestBed.createComponent(CatListingComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();

    expect(app).toBeTruthy();
  });

  it('should have expected title', () => {
    const fixture = TestBed.createComponent(CatListingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(component.title).toBe('Cat listing');
  });

 

});
