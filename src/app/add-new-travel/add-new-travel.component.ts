import { CountriesService } from './../shared/countries.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn} from '@angular/forms';
import { Observable, observable, ObservableInput } from 'rxjs';

@Component({
  selector: 'app-add-new-travel',
  templateUrl: './add-new-travel.component.html',
  styleUrls: ['./add-new-travel.component.css']
})
export class AddNewTravelComponent implements OnInit {

  newTravelForm: FormGroup;
  country;
  constructor(public service: CountriesService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.newTravelForm = this.formBuilder.group({
      countryName :['', [Validators.required]],
      description: ['', [Validators.required,Validators.minLength(25),Validators.maxLength(50)]]
    })
  }
 

  //** add new travel to the list and set the list in localstorage
  onSubmit() {
    let d = new Date();
    this.service.getCountry(this.newTravelForm.value.countryName).subscribe(country => {
      if (country){
        this.country = country;
        this.service.countriesSavedList.push({
          country: this.country,
          tripDescription: this.newTravelForm.value.description,
          date: d.setDate(d.getDate())});
          localStorage.setItem('countries',JSON.stringify(this.service.countriesSavedList));
      }
    })
    this.newTravelForm.reset();
  }
}
