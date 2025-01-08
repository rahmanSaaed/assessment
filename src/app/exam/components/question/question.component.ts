import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnChanges, OnInit {
  @Input() question: any;  
  @Input() questionIndex!: number;
  @Output() answerSelected = new EventEmitter<any>();  

  selectedAnswer: any;  
  shuffledOptions: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.shuffleOptions();

  }
  emitAnswer() {
    if (this.selectedAnswer !== undefined) {
      this.answerSelected.emit({
        questionIndex: this.questionIndex,
        selectedAnswer: this.selectedAnswer
      });
    }
  }

  shuffleOptions(): void {
    const allOptions = [...this.question.incorrect_answers, this.question.correct_answer];
    for (let i = allOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]]; 
    }
    this.shuffledOptions = allOptions; 
  }

  ngOnChanges(simple: SimpleChanges){
    if (simple?.['question']?.currentValue) {
      this.selectedAnswer = undefined;
    }
  }
}
