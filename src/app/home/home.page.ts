import { Component } from '@angular/core';
import { ChuckService } from '../chuck.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  joke: any;
  cat: any;

  constructor(private chuck: ChuckService) {}

  ngOnInit(){
    this.chuck.getJokes().subscribe((data)=>{
      this.joke = data;
      console.log(data);
    });
    this.chuck.getCat().subscribe((data)=>{
      this.cat = data;
      console.log(data);
    });
  }
}
