import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TrainingComponent } from "./training.component";
import { CurrentTrainingComponent } from "../../components/training/current-training/current-training.component";

const routes: Routes = [
  {
    path: '',
    component: TrainingComponent,
    children: [
      { path: 'current', component: CurrentTrainingComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule {}
