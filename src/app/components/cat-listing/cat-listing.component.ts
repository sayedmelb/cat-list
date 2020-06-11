import { Component, OnInit } from '@angular/core';
import {CatApiService} from '../../services/cat-api.service';

@Component({
  selector: 'app-cat-listing',
  templateUrl: './cat-listing.component.html',
  styleUrls: ['./cat-listing.component.scss']
})
export class CatListingComponent implements OnInit {

  constructor(private catServie: CatApiService) { }

  ngOnInit(): void {
    this.getCatList();
  }

  getCatList() {
    this.catServie.getCatListing().subscribe(
      (resp) => {
        console.log(resp);
      }

    );
  }

}
