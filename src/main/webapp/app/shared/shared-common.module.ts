import { NgModule } from '@angular/core';

import { DatacollectionSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DatacollectionSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DatacollectionSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DatacollectionSharedCommonModule {}
