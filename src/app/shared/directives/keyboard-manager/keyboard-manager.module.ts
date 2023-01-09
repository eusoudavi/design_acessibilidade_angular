import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeyboardManagerDirectives} from './keyboard-manager.directives';

@NgModule({
  declarations: [KeyboardManagerDirectives],
  imports: [CommonModule],
  exports: [
    KeyboardManagerDirectives
  ]
})
export class KeyboardManagerModule{}
