import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assesment',
  templateUrl: './assesment.component.html',
  styleUrls: ['./assesment.component.scss']
})

export class AssesmentComponent implements OnInit{
  assessmentData!: any;
  progress: {done: number, count: number} =  {done: 0, count: 10};

  currentQuestionIndex: number = 0;
  selectedAnswers: any[] = [];
  totalScore = 0;

  constructor(private stateService: StateService,private route: Router) {

  }

  ngOnInit() {
    this.loadExamData();
    this.progress.done !== this.selectedAnswers?.length
  }

  loadExamData() {
    this.stateService.assessmentData$.subscribe((data) => {
      this.assessmentData = data;
      console.log(this.assessmentData);
      this.progress.count = this.assessmentData?.questions?.length;
    });
  }

  handleAnswerSelection(answerData: any) {
    const { questionIndex, selectedAnswer } = answerData;
    this.selectedAnswers[questionIndex] = selectedAnswer;
    this.calculateScore();
    this.updateProgress();
  }

  updateProgress() {
    this.progress.done = this.selectedAnswers.length;
  }

  calculateScore() {
    this.totalScore = 0;
    this.selectedAnswers.forEach((answer, index) => {
      const question = this.assessmentData?.questions[index];
      if (question.difficulty === 'easy' && answer === question.correct_answer) {
        this.totalScore += 1;
      } else if (question.difficulty === 'medium' && answer === question.correct_answer) {
        this.totalScore += 3;
      } else if (question.difficulty === 'hard' && answer === question.correct_answer) {
        this.totalScore += 5;
      }
    });
  }

  goToNextQuestion() {
    if (this.currentQuestionIndex < this.assessmentData?.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  // goToPreviousQuestion() {
  //   if (this.currentQuestionIndex > 0) {
  //     this.currentQuestionIndex--;
  //   }
  // }
  

  finishExam() {
    localStorage.setItem("score", JSON.stringify({score: this.totalScore, fullmark: this.assessmentData?.fullMark}) );
    this.route.navigateByUrl('/score')
  }

  

}
