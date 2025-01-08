import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data!: any;

  constructor(private route: Router, private stateService: StateService) {

  }

  goToQuestions() {
    this.stateService.setAssessmentData(this.data);
    this.route.navigateByUrl('/assessment')
  }

}
