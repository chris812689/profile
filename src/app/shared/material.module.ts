import { NgModule } from '@angular/core';
import { 
    MatButtonModule,
    MatTabsModule,
    } from '@angular/material';
    import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
    imports: [
        MatButtonModule,
        MatTabsModule,
        MatProgressBarModule,
    ],
    exports:[ 
        MatButtonModule,
        MatTabsModule,
        MatProgressBarModule,
    ]
})

export class MaterialModule {}