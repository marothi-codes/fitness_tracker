import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatFormField, MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatFormField,
        MatInputModule,
        MatIconModule,
        MatSidenavModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatFormField,
        MatIconModule,
        MatInputModule,
        MatSidenavModule
    ]
})
export class MaterialModule {
}
