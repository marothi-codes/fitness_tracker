import { NgModule } from "@angular/core";
import { CurrentTrainingComponent } from "../../components/training/current-training/current-training.component";
import { PreviousTrainingsComponent } from "../../components/training/previous-trainings/previous-trainings.component";
import { NewTrainingComponent } from "../../components/training/new-training/new-training.component";
import { TrainingComponent } from "./training.component";
import { TrainingRoutingModule } from "./training-routing.module";

@NgModule({
    declarations: [
      CurrentTrainingComponent,
      NewTrainingComponent,
      PreviousTrainingsComponent,
      TrainingComponent
    ],
    imports: [
      TrainingRoutingModule
    ],
    exports: []
})
export class TrainingModule {}
