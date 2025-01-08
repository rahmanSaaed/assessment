import { Component, Input, OnInit } from '@angular/core';
import { MockExamDataService } from '../../services/mock-exam-data.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  groupedExams!: any[];
  constructor(private mockExamData: MockExamDataService) {

  }


  ngOnInit() {
    this.loadExams()
  }


  private loadExams(): void {
    this.mockExamData
      .getExams()
      .pipe(map((exams) => this.groupAndSortExams(exams)))
      .subscribe((groupedData) => this.setGroupedExams(groupedData));
  }

  groupAndSortExams(exams: any[]): any[] {
    const groupedExams = Object.values(
      exams.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = {
            category: item.category,
            questions: [],
            fullMark: 0 
          };
        }
        acc[item.category].questions.push(item);
        return acc;
      }, {} as Record<string, { category: string; questions: any[]; fullMark: number }>)
    );
  
    return groupedExams.map((group: any) => ({
      ...group,
      questions: this.sortQuestionsByDifficulty(group.questions),
      fullMark: this.calculateFullMarks(group.questions) 
    }));
  }
  
  calculateFullMarks(questions: any[]): number {
    return questions.reduce((total, question) => {
      if (question.difficulty === 'easy') {
        total += 1;
      } else if (question.difficulty === 'medium') {
        total += 3;
      } else if (question.difficulty === 'hard') {
        total += 5;
      }
      return total;
    }, 0);
  }

  sortQuestionsByDifficulty(questions: any[]): any[] {
    const difficultyOrder: any = { easy: 1, medium: 2, hard: 3 };
  
    return questions.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
  }

  private setGroupedExams(groupedData: any[]): void {
    console.log("groupedData", groupedData)
    this.groupedExams = groupedData;
  }


}
