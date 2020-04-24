import { Component, OnInit } from '@angular/core';
import { WelcomedataService } from '../service/data/welcomedata.service';
export class Welcome{
  constructor(
    public id:number,
    public message:string
  ){}
}
@Component({
  selector: 'app-welcomelist',
  templateUrl: './welcomelist.component.html',
  styleUrls: ['./welcomelist.component.css']
})
export class WelcomelistComponent implements OnInit {
welocomes:Welcome[]
  constructor(
    private welcomeDataService:WelcomedataService
  ) { }

  ngOnInit() {
  this.getAllWelcome()
  }
getAllWelcome(){
  this.welcomeDataService.getAllWelcomeMsg().subscribe(
    response=>{console.log(response)
    this.welocomes=response;
    },
    errror=>console.log(errror)
  )
}
}
