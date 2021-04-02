import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-recipe-app';
  condition = false;
  buttonLog = [];

  ngOnInit(): void {
  }

  onClick(){
    this.condition = !this.condition;
    this.buttonLog.push(new Date());
  }
}



