import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() selectedParameters = new EventEmitter<any>();

  selectedCategory = 'general';
  selectedCountry = 'ar';

  categories: any[] = [
    {value: 'general', name: 'General'},
    {value: 'business', name: 'Business'},
    {value: 'enterteinment', name: 'Enterteinment'},
    {value: 'health', name: 'Health'},
    {value: 'science', name: 'Science'},
    {value: 'sports', name: 'Sports'},
    {value: 'technology', name: 'Technology'},
  ];

  countries: any[] = [
    {value: 'ar', name: 'Argentina'},
    {value: 'br', name: 'Brazil'},
    {value: 'fr', name: 'France'},
    {value: 'hu', name: 'Hungry'},
    {value: 'mx', name: 'Mexico'},
    {value: 'gb', name: 'United Kingdom'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  searchNew(){
    const PARAMETERS = {
      category: this.selectedCategory,
      country: this.selectedCountry,
    }
    this.selectedParameters.emit(PARAMETERS);
  }


}
