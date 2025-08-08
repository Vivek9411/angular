import { Component, inject, OnInit } from '@angular/core';
import { clientClass } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';

import { APIResponseModel } from '../../model/interface/role';
import { ClientService } from '../../services/client-services';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-client',
  imports: [FormsModule, CommonModule],
  templateUrl: './client.html',
  styleUrl: './client.css'
})



export class Client implements OnInit{
  
  clientObj: clientClass = new clientClass();
  clientList: clientClass [] = [];

  clientservice = inject(ClientService)
  temp:number = 0;
  // clientservice = inject(ClientService)

  // constructor(private clientservice: ClientService) {}

  ngOnInit(): void {
    console.log('hekkko');
    this.loadClient();
  }

  loadClient(){
    this.clientservice.getAllClients().subscribe((res:APIResponseModel)=>{

      this.clientList = res.data;


    }, error => {
      alert("API error/ Network Down");
    });
    console.log('fhs')
    console.log(this.clientList);
  }
  onSaveClient(){
    this.clientservice.addUpdate(this.clientObj).subscribe((res:APIResponseModel)=>{
      if(res.result)
      {
        alert("client added sucessfully");
        this.loadClient();
        this.temp=1;
      }
      else{
        alert(res.message);
      }
    }, error => {
      alert("API error/ Network Down");
      // this.isLoader=false;
    })
  };
};
