import { Component, OnInit } from '@angular/core';
import { CatApiService } from '../../services/cat-api.service';
import forEach from 'lodash/forEach';
import * as stubObj from "../cat-listing/stub-data.json";
import { orderList } from './../../shared/common-functions';


@Component({
  selector: 'app-cat-listing',
  templateUrl: './cat-listing.component.html',
  styleUrls: ['./cat-listing.component.scss']
})
export class CatListingComponent implements OnInit {

  originalList: any = [];
  sortedList: any = [];
  errorMessage = "";
  errorStatus: boolean = false;
  catLoading: string = "";
  isLoading: boolean = true;
  isNormalisedLoading: boolean = true;

  title = "Cat listing";

  jsonDataStub: any = (stubObj as any).default; // this is for test
  constructor(private catServie: CatApiService) { }

  ngOnInit(): void {
    this.catLoading = "./../../../assets/images/catLoading.gif";
    this.getCatList();
  }

  getCatList() {
    this.catServie.getCatListing().subscribe(
      (resp) => {
        this.originalList = resp;
        this.isLoading = false;

        this.normaliseList(this.originalList);
        this.isNormalisedLoading = false;
      },
      (error) => {
        this.errorStatus = true;
        this.errorMessage = error.statusText;

      }


    );
  }

  normaliseList(ArrayList: any) {
    let maleList: any = [], femaleList: any = [];
    let maleArrayNames = [];
    let femaleArrayNames = [];


    if (ArrayList && ArrayList.length > 0) {
      forEach(ArrayList, record => {

        let catList = record.pets?.filter(
          pet => pet.type.toUpperCase() === 'CAT');


        if (record.gender && record.gender.toUpperCase() === 'MALE') {
          if (catList != null)
            maleList.push(catList);

        } else {
          if (catList != null)
            femaleList.push(catList);
        }
      }
      );

    }
    forEach(maleList, records => {
      forEach(records, item => {
        maleArrayNames.push({ name: item.name });
      });

    });
    forEach(femaleList, records => {
      forEach(records, item => {
        femaleArrayNames.push({ name: item.name });
      });

    });

    femaleArrayNames = orderList(femaleArrayNames);
    maleArrayNames = orderList(maleArrayNames);


    this.setSortedList(maleArrayNames, femaleArrayNames);



  }


  setSortedList(maleList, femaleList) {
    let _newObjMale = { Type: "Male", List: maleList };
    let _newObjFemale = { Type: "Female", List: femaleList };
    this.sortedList.push(_newObjMale);
    this.sortedList.push(_newObjFemale);
  }

  RefreshData() {
    this.errorStatus = false;
    this.originalList = [];
    this.sortedList = [];
    this.isNormalisedLoading = true;
    this.isLoading = true;
    this.getCatList();

  }



}
