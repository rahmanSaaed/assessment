import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssesmentComponent } from './pages/assesment/assesment.component';
import { ResultsComponent } from './pages/results/results.component';
import { ExamRoutingModule } from './exam-routing.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SharedModule } from '../shared/shared.module';
import { CategoriesHeaderComponent } from './components/categories-header/categories-header.component';
import { CardComponent } from './components/card/card.component';
import { MockExamDataService } from './services/mock-exam-data.service';
import { StateService } from './services/state.service';
import { ExamHeaderComponent } from './components/exam-header/exam-header.component';
import { QuestionComponent } from './components/question/question.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AssesmentComponent,
    ResultsComponent,
    CategoriesComponent,
    CategoriesHeaderComponent,
    CardComponent,
    ExamHeaderComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    MockExamDataService,
    StateService
  ]
})
export class ExamModule { }
