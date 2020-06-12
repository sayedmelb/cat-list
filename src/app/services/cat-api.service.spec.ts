import { TestBed, inject } from '@angular/core/testing';

import { CatApiService } from './cat-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import * as stubObj from "../components/cat-listing/stub-data.json";
import { environment } from '../../environments/environment';




describe('CatApiService', () => {
  let service: CatApiService;
  let httpMock: HttpTestingController;
  const jsonDataStub: any = (stubObj as any).default; // this is for test

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CatApiService, HttpTestingController]
    });
    service = TestBed.inject(CatApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('service api should be created', () => {
    expect(service).toBeTruthy();
  });


  it('the data array returned from AGL cloud api expected to be having elements',
    (done: DoneFn) => {
      service.getCatListing().subscribe(data => {
        expect(data.length).toBeGreaterThan(0);
        done();
      });
    });

  // it('service api should be GET method', () => {
  //   const request = httpMock.expectOne('http://agl-developer-test.azurewebsites.net/people.json');
  //   expect(request.request.method).toEqual('GET');
  // });


});
