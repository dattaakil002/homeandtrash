import { Component, OnInit } from '@angular/core';
import { HometrashserviceService } from '../hometrashservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  homeList: any = [];
  homeItems: any | null = [];
  constructor(private homeTrashService: HometrashserviceService) { }

  ngOnInit(): void {
     this.homeItems = localStorage.getItem('homelocallist');
    console.log(this.homeItems);
    if(this.homeItems == null){
      localStorage.setItem('homelocallist', JSON.stringify(this.homeTrashService.homelist));
      this.homeList = this.homeTrashService.homelist;
    }
    else{
      this.homeItems = localStorage.getItem('homelocallist');
      this.homeList = JSON.parse(this.homeItems);
    }
  }

}
