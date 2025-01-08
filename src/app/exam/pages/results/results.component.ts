import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit{
  score: any;
  constructor() {
    
  }
  ngOnInit(): void {
const storedScore = localStorage.getItem("score");
if (storedScore) {
  this.score = JSON.parse(storedScore);
} else {
  this.score = 0; 
}  }
}
