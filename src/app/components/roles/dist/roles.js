"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Roles = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Roles = /** @class */ (function () {
    function Roles() {
        // string, number, boolern , date, object, array , null , undefined 
        // only the variable created in this class can be accesed in the html of roles
        this.firstName = 'Angular Tutorial';
        this.angularVersion = "version 18";
        this.version = 18;
        this.is_Active = true;
        this.currentDate = new Date();
        this.inputType = 'checkbox';
        this.roleList = [];
        this.http = core_1.inject(http_1.HttpClient);
    }
    Roles.prototype.showalert = function () {
        alert("welcome to angular 20");
    };
    Roles.prototype.ngOnInit = function () {
        alert("hii");
    };
    Roles.prototype.getAllRoles = function () {
        this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe(function (res) {
        });
    };
    Roles = __decorate([
        core_1.Component({
            selector: 'app-roles',
            imports: [forms_1.FormsModule],
            templateUrl: './roles.html',
            styleUrl: './roles.css'
        })
    ], Roles);
    return Roles;
}());
exports.Roles = Roles;
