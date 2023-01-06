import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {UniqueIdServices} from '../../services/unique-id/unique-id.services';
@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  /* SERVE PARA PROVER UM TOKEN DE ACESSO */
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => YesNoButtonGroupComponent)   /* ESTÁ REGISTRADO, MAS NÃO TENHO A REFERÊNCIA AINDA DO YesNo */
  }]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {

  @Input() public value: string = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>();
  public id: string = null;
  public options = YesNoButtonGroupOptions;
  public onChange = (value: string) => {};
  public onTouched = () => { };

  constructor(private uniqueIdService: UniqueIdServices) {
    this.id = uniqueIdService.generateUniqueIdWithPrefix('yes-no-button-group');
  }
  // COMO TEMOS UMA BIBLIOTECA QUE SERÁ USADA EM VÁRIOS COMPONENTES DO PROJETO, CENTRALIZAMOS ELA EM UMA CLASSE PARA REAPROVEITARMOS O COD

  ngOnInit(): void {
  }

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }
  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
  }

  public activate(value: string): void {
    this.writeValue(value);
  }
}

enum YesNoButtonGroupOptions {
    YES = 'yes',
    NO = 'no'
}
