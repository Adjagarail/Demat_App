import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-intdetail',
  templateUrl: './intdetail.page.html',
  styleUrls: ['./intdetail.page.scss'],
})
export class IntdetailPage implements OnInit {
  program: any;
  public donnee = [];
  Intervenant = 'http://app.joinpuzzle.com/public/api/intervenants.json';
  public iDetails: any;
  public idUrl: any;
  constructor(public http: HttpClient, public activatedRoute: ActivatedRoute) { 
    this.iDetails = this.activatedRoute.snapshot.paramMap.get('id');
    this.idUrl = "http://app.joinpuzzle.com/public/api/intervenants/" + this.iDetails;
    console.log(this.idUrl)
    this.getProgramme();
    this.getIntervenant();
  }

  ngOnInit() {
  }

  getProgramme() {
    return new Promise(resolve => {
      this.http.get(this.idUrl).subscribe(data => {
        resolve(data);
        this.donnee = data
        console.log(this.donnee);
      }, err => {
        console.log(err);
      });
    });
  }
  
  getIntervenant() {
    return new Promise(resolve => {
      this.http.get(this.Intervenant).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}
