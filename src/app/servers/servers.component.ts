import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server created yet!";
  condition = false;
  serverName = '';
  servers = [];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.condition = true;
    this.serverCreationStatus = `Server is created! Name is :${this.serverName}`;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event : InputEvent){
    this.serverName= (<HTMLInputElement>event.target).value;
  }

}
