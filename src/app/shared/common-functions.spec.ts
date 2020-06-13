import { TestBed, inject } from '@angular/core/testing';

import { orderList } from './common-functions';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import * as stubObj from "../components/cat-listing/stub-data.json";
import { environment } from '../../environments/environment';




describe('Common funcions', () => {
  let httpMock: HttpTestingController;
  const jsonDataStub: any = (stubObj as any).default; // this is for test

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ HttpTestingController]
    });
    httpMock = TestBed.get(HttpTestingController);
  });

  it('expect orderList to sort list in ascending order', () => {
    const data = [
        {name: "Tom", type: "Cat"},
        {name: "Max", type: "Cat"},
        {name: "Jim", type: "Cat"}
    ];

    const orderListData = 
    [
        {name: "Jim", type: "Cat"},
        {name: "Max", type: "Cat"},
        {name: "Tom", type: "Cat"}
    ];
    let tempList = orderList(data);
    expect(orderList(tempList)).toEqual(orderListData);

  });


 

});
