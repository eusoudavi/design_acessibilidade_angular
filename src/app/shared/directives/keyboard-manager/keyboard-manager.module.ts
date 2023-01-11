import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeyboardManagerDirectives} from './keyboard-manager.directives';
import {KeyboardManagerItemDirectives} from './keyboard-manager-item.directives';

@NgModule({
  declarations: [
    KeyboardManagerDirectives,
    KeyboardManagerItemDirectives
  ],
  imports: [
    CommonModule
  ],
  exports: [
    KeyboardManagerDirectives,
    KeyboardManagerItemDirectives
  ]
})
export class KeyboardManagerModule{}
