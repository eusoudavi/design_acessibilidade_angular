import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DisableControleDirective} from './disable-controle.directive';



@NgModule({
  declarations: [DisableControleDirective],
  imports: [CommonModule],
  exports: [DisableControleDirective]
})
export class DisableControlModule { }
