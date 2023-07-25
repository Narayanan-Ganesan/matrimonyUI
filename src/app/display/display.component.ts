import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.less']
})
export class DisplayComponent implements OnInit {


  selectedOccupation: string = "";
  selectedAgeRange: string = "";
  selectedStar: string = "";

  constructor() { }

  ngOnInit(): void {
    this.applyFilters();
  }

  
  users: { full_name: string, district: string, age: number, occupation: string }[] = [
    { full_name: 'Sanchana', district: 'Coimbatore', age: 24, occupation: 'Software Engineer Bangalore' },
    { full_name: 'John Doe', district: 'New York', age: 35, occupation: 'Business Analyst' },
    { full_name: 'Jane Smith', district: 'London', age: 29, occupation: 'Marketing Manager' },
    { full_name: 'Michael Johnson', district: 'Los Angeles', age: 42, occupation: 'Actor' },
    { full_name: 'Emma Thompson', district: 'Sydney', age: 31, occupation: 'Graphic Designer' },
    { full_name: 'Sanchana', district: 'Coimbatore', age: 24, occupation: 'Software Engineer Bangalore' },
    { full_name: 'John Doe', district: 'New York', age: 35, occupation: 'Business Analyst' },
    { full_name: 'Jane Smith', district: 'London', age: 29, occupation: 'Marketing Manager' },
    { full_name: 'Michael Johnson', district: 'Los Angeles', age: 42, occupation: 'Actor' },
    { full_name: 'Emma Thompson', district: 'Sydney', age: 31, occupation: 'Graphic Designer' }
  ];
  


  filteredUsers!: { full_name: string, district: string, age: number, occupation: string }[];

  applyFilters() {
    // Filter the users based on the selected criteria
    this.filteredUsers = this.users.filter((user) => {
      const occupationMatch =
        !this.selectedOccupation || user.occupation === this.selectedOccupation;
      const ageMatch =
        !this.selectedAgeRange ||
        (user.age >= this.parseAgeRange(this.selectedAgeRange).from &&
          user.age <= this.parseAgeRange(this.selectedAgeRange).to);
  
      return occupationMatch && ageMatch;
    });
  }
  

  parseAgeRange(selectedAgeRange: string): { from: number; to: number } {
    const [from, to] = selectedAgeRange.split('-').map(Number);
    return { from, to };
  }



}

