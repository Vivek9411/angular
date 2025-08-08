import { Component } from '@angular/core';
import { Designation } from '../designation/designation';
import { Roles } from '../roles/roles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  imports: [Designation, Roles, CommonModule],
  templateUrl: './master.html',
  styleUrl: './master.css'
})
export class Master {
  currentComponent: string = "Designation";

  changeTab(tabName:string){
    this.currentComponent = tabName;
  }

}
