import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.html',
  styleUrl: './roles.css'
})


export class Roles implements OnInit {
  // string, number, boolern , date, object, array , null , undefined 
  // only the variable created in this class can be accesed in the html of roles
  firstName: string = 'Angular Tutorial';
  angularVersion = "version 18";

  version: number = 18;
  is_Active: boolean = true;

  currentDate: Date = new Date();
  inputType: string = 'checkbox'



  showalert() {
    alert("welcome to angular 20")
  }
  roleList: IRole [] = [];
  loading:boolean = true;
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles()
  }

  getAllRoles() {
    this.loading = true;
    this.http.get("/api/api/ClientStrive/GetAllRoles").subscribe((res: any) => {
      this.roleList = res.data;
      this.loading = false;
      console.log(this.roleList);
    }, error => {
      this.loading = false;
    });
  }
}
