import { TestBed } from '@angular/core/testing';

import { CatApiService } from './cat-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

describe('CatApiService', () => {
  let service: CatApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CatApiService]
    });
    service = TestBed.inject(CatApiService);
  });

  it('service api should be created', () => {
    expect(service).toBeTruthy();
  });
});
