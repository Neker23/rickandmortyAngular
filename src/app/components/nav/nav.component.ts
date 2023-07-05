import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Output() search = new EventEmitter<string>()
  idCtrl = new FormControl()  // creando una variable para un control/formulario reactivo
  onRender(){
    console.log(this.idCtrl);
    this.search.emit(this.idCtrl.value)
  }
}
