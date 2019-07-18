import { CountriesService } from './../shared/countries.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-travels-list',
  templateUrl: './travels-list.component.html',
  styleUrls: ['./travels-list.component.css']
})
export class TravelsListComponent implements OnInit {

  constructor(public service: CountriesService) { }

  edit: boolean = true

  ngOnInit() {

  }

    

}
