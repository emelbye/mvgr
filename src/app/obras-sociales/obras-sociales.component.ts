import { Component, Input, OnInit, Inject, HostListener } from '@angular/core';
import { Injectable }     from '@angular/core';
import { ObraSocial } from './obra-social';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-obras-sociales',
  templateUrl: './obras-sociales.component.html',
  styleUrls: ['./obras-sociales.component.scss']
})
export class ObrasSocialesComponent implements OnInit {

    public osssMatrix: ObraSocial[][];

    constructor(private http: Http) {}

    ngOnInit() {
        this.getOsss().subscribe(
            data => this.osssMatrix=data, 
            error => console.log(error)
        );
    }

    getOsss(): Observable<any> {
        return this.http.get("../../assets/data/obras-sociales.json").map((res:any) => res.json());
    }
}
