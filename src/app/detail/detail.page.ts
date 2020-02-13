import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProgrammeService } from '../programme.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public idDetail: any;
  public programmeData: any = [];
  public programmeData1: any = [];

  constructor(public activatedRoute: ActivatedRoute, public http: HttpClient, public programmeService: ProgrammeService) { }

  ngOnInit() {
    this.idDetail = this.activatedRoute.snapshot.paramMap.get('id');
    this.programmeService.getData().subscribe((data) => {
      this.programmeData = Array.from(Object.keys(data), k => data[k]);
      console.log(this.programmeData1 = this.programmeData[3]);
    });

  }

}
