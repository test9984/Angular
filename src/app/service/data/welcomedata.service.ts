import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Welcome } from 'src/app/welcomelist/welcomelist.component';
@Injectable({
  providedIn: 'root'
})
export class WelcomedataService {

  constructor(private http:HttpClient) { }


  getAllWelcomeMsg(){
  return this.http.get<Welcome[]>("http://localhost:9092/user-management/welcomes")
  }
}
