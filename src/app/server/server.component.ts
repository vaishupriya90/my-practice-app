import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId = 10;
  status = "offline";
  
  constructor() { 
    this.status = Math.random() > 0.5 ? "online" : "offline";
  }

  ngOnInit(): void {
  }

  getColor(){
    return this.status === "online" ? "green" : "red";
  }

}
