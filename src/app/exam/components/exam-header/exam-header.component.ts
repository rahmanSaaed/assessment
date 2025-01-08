import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-header',
  templateUrl: './exam-header.component.html',
  styleUrls: ['./exam-header.component.scss']
})
export class ExamHeaderComponent implements OnInit{

  @Input() name!: string;
  @Input() progress!: any;

  constructor() {

  }

  ngOnInit() {
    console.log("ngOnInit name", this.name);
    console.log("ngOnInit name", this.progress);

  }


}
