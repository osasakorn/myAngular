import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  private my_name: string;
  private age: number;
  private email: string;
  private dob: string;
  private hobby: string[];
  private hobby1: string[];
  private food: string[];
  

  constructor() { }

  ngOnInit() {
    this.my_name ="Sasakorn Kulchittipakk";
    this.age = 21;
    this.dob = "4 September 1996"
    this.email = "sasakorn.kulchittipakk@g.swu.ac.th"
    this.hobby= ["Listen To Music"];
    this.hobby1= ["Reading"];
    this.food= ["French Fries"];
  }

}
