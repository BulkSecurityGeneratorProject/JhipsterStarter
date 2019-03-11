import { NgModule } from '@angular/core';

import { JhipsterStarterAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterStarterAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterStarterAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterStarterAppSharedCommonModule {}
