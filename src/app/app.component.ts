import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
export interface Food {
	calories: number;
	carbs: number;
	fat: number;
	name: string;
	protein: number;
}
 
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

	title = 'lost-votes';
	loginForm: FormGroup;
	loading = false;
	submitted = false;
	returnUrl: string;

  headers = ["ID", "Name", "Age", "Gender", "Country"];

  rows = [
    {
      "ID" : "1",
      "Name" : "Rahul",
      "Age" : "21",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "2",
      "Name" : "Ajay",
      "Age" : "25",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "3",
      "Name" : "Vikram",
      "Age" : "31",
      "Gender" : "Male",
      "Country" : "Australia"
    },
    {
      "ID" : "4",
      "Name" : "Riya",
      "Age" : "20",
      "Gender" : "Female",
      "Country" : "India"
    },
    {
      "ID" : "5",
      "Name" : "John",
      "Age" : "23",
      "Gender" : "Male",
      "Country" : "USA"
    },
    {
      "ID" : "6",
      "Name" : "Raman",
      "Age" : "27",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "7",
      "Name" : "Mohan",
      "Age" : "39",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "8",
      "Name" : "Shreya",
      "Age" : "21",
      "Gender" : "Female",
      "Country" : "India"
    }
  ]

	constructor(
		private formBuilder: FormBuilder,
		private route: ActivatedRoute,
		private router: Router,

	) { }

	ngOnInit() { }

	onSubmit() {

	}
}


