import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-p',
  templateUrl: './farmer-p.component.html',
  styleUrls: ['./farmer-p.component.css']
})
export class FarmerPComponent implements OnInit {

 personaldetailsHS:boolean=true;
// bankdetailsHS: boolean=true;

 

  constructor() { }

  ngOnInit(): void {
  }
  datasubmit(){
    this.personaldetailsHS=false; 
  }


}
