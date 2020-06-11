import { Component, OnInit } from '@angular/core';
import { CatApiService } from '../../services/cat-api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-cat-listing',
  templateUrl: './cat-listing.component.html',
  styleUrls: ['./cat-listing.component.scss']
})
export class CatListingComponent implements OnInit {

  originalList: any = [];
  sortedList: any = [];

  stubList = [
    {
        "name": "Bob",
        "gender": "Male",
        "age": 23,
        "pets": [
            {
                "name": "Garfield",
                "type": "Cat"
            },
            {
                "name": "Fido",
                "type": "Dog"
            }
        ]
    },
    {
        "name": "Jennifer",
        "gender": "Female",
        "age": 18,
        "pets": [
            {
                "name": "Garfield",
                "type": "Cat"
            }
        ]
    },
    {
        "name": "Steve",
        "gender": "Male",
        "age": 45,
        "pets": null
    },
    {
        "name": "Fred",
        "gender": "Male",
        "age": 40,
        "pets": [
            {
                "name": "Tom",
                "type": "Cat"
            },
            {
                "name": "Max",
                "type": "Cat"
            },
            {
                "name": "Sam",
                "type": "Dog"
            },
            {
                "name": "Jim",
                "type": "Cat"
            }
        ]
    },
    {
        "name": "Samantha",
        "gender": "Female",
        "age": 40,
        "pets": [
            {
                "name": "Tabby",
                "type": "Cat"
            }
        ]
    },
    {
        "name": "Alice",
        "gender": "Female",
        "age": 64,
        "pets": [
            {
                "name": "Simba",
                "type": "Cat"
            },
            {
                "name": "Nemo",
                "type": "Fish"
            }
        ]
    }
];
  constructor(private catServie: CatApiService) { }

  ngOnInit(): void {
    this.getCatList();
    //this.normaliseList(this.originalList);
  }

  getCatList() {
    this.originalList= this.stubList;
    this.normaliseList(this.originalList);
    // this.catServie.getCatListing().subscribe(
    //   (resp) => {
    //     console.log(resp);
    //     this.originalList = resp;
    //     console.log('this.ori', this.originalList);
    //     this.normaliseList(this.originalList);
    //   }
    //   //add error

    // );
  }

  normaliseList(ArrayList: any) {
    console.log('normalise', ArrayList);
    let maleList:any = [], femaleList: any =[];
    let maleArrayNames = [];
    let femaleArrayNames = [];
     

    if (ArrayList && ArrayList.length > 0) {
      console.log('start');
      _.forEach(ArrayList, record => {
        let tempList:any = []; 

        console.log('name:', record.name);
        let catList = record.pets?.filter(
          pet => pet.type === 'Cat');

        console.log('catList', catList);
        
        if(record.gender && record.gender==='Male' ) {
          if(catList!=null)
          maleList.push(catList);

        } else {
          if(catList!=null)
          femaleList.push(catList);
        }
      }
      );

    }
    _.forEach(maleList, records =>{
      _.forEach(records, item =>{
        maleArrayNames.push({name:item.name});
      });
      
    });
    _.forEach(femaleList, records =>{
      _.forEach(records, item =>{
        femaleArrayNames.push({name:item.name});
      });
      
    });
    let _newObjMale = { Type: "Male", List: maleArrayNames };
    let _newObjFemale = {Type: "Female", List: femaleArrayNames };
     this.sortedList.push(_newObjMale);
     this.sortedList.push(_newObjFemale);
     
     console.log("this.sortedList", this.sortedList);

  }

}
