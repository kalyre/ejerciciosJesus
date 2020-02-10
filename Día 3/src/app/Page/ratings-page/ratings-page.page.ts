import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings-page',
  templateUrl: './ratings-page.page.html',
  styleUrls: ['./ratings-page.page.scss'],
})
export class RatingsPagePage implements OnInit {
  pizza = 0;
  sadFace = 0;

  constructor() { }

  ngOnInit() {
  }

  pizzaClicked(){
    this.pizza+=1;
  }

  sadFaceClicked(){
    this.sadFace+=1;
  }

  public average():number{
    if(this.pizza + this.sadFace > 0)
      return this.pizza * 10/(this.pizza + this.sadFace);
    else return 0;
  }

  // 2
  isExpanded:boolean = false;
  icon:string = 'checkmark-circle-outline';

  public toggleExpand():void{
    if(this.isExpanded) 
      this.icon ='checkmark-circle-outline' 
    else this.icon = 'close-circle-outline';

    this.isExpanded = !this.isExpanded;
  }
}
