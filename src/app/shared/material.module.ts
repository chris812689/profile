import { NgModule } from '@angular/core';
import { 
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatFormFieldModule,

    } from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
    imports: [
        MatButtonModule,
        MatTabsModule,
        MatProgressBarModule,
        MatTableModule,
        MatChipsModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatFormFieldModule,
    ],
    exports:[ 
        MatButtonModule,
        MatTabsModule,
        MatProgressBarModule,
        MatTableModule,
        MatChipsModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatFormFieldModule
    ]
})

export class MaterialModule {}