import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail-view',
  templateUrl: './user-detail-view.component.html',
  styleUrls: ['./user-detail-view.component.css']
})
export class UserDetailViewComponent implements OnInit {
  userDetail:any;
  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
    this.userDetail=this.router.getCurrentNavigation().extras.state['params'];
    }else{
      this.userDetail={};
    }
  }

  ngOnInit(): void {

  }
  getBack(){
    this.router.navigate(['/candidates']);
  }

}
