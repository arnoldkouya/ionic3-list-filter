import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  keyword;
  provinces = [];
  sourceProvinces = [
    'กรุงเทพมหานคร'
    , 'เชียงใหม่'
    , 'ขอนแก่น'
    , 'อุบลราชธานี'
    , 'ภูเก็ต'
    , 'กระบี่'
  ];

  constructor(public navCtrl: NavController) {
    this.provinces = this.sourceProvinces;
  }

  setFilter() {
    let keyword = this.keyword;

    this.provinces = this.sourceProvinces;
    
    this.provinces = this.provinces.filter((province) => {
      return province.indexOf(keyword) > -1;
    })
    
  }


}
