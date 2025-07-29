import { NgModule } from '@angular/core';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { TranslateKeyPipe } from './pipes/translate-key.pipe';

@NgModule({
  imports: [TranslateModule, TranslateKeyPipe],
  exports: [TranslateModule, TranslatePipe, TranslateKeyPipe]
})
export class TranslationSharedModule { }

// Export the module type and pipes for use in other modules
export { TranslatePipe, TranslateKeyPipe };
