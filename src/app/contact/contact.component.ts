import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var emailjs: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

    lat: number = -31.411428;
    lng: number = -64.194716;
    zoom: number = 15;

    constructor() {}
}