import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-candidates-view',
  templateUrl: './candidates-view.component.html',
  styleUrls: ['./candidates-view.component.css']
})
export class CandidatesViewComponent implements OnInit {
  userList:any;
  searchItem:string='';
  constructor(private http:HttpClient, private router:Router) {
}
  ngOnInit(): void {
    this.getList();
  }
  getList(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data=>{
      this.userList=data;
    });
  }
  userDetail(event:any, item:any) {
    this.router.navigate(['/user-details'], { state: { params: item } });
}
searchText(){
  this.userList.forEach((element: any) => {
    const seachElement=this.searchItem;
      if(element.name===this.searchItem){
        console.log('bu var');
        this.userList=this.userList.filter(function(item:any){
          return item.name===seachElement;
        })
      }
  });
}
clearSearch(){
  this.getList();
}
  

}
