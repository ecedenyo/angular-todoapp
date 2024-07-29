import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  my_name = 'Emerson';
  tasks = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio',
  ];

  myLocation = signal('La Villa');

  onClickMeHandler() {
    alert('Hola');
  }

  onChangeHandler(event: Event) {
    console.log(event);
  }

  onChangeRxHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const myNewLocation = input.value;
    this.myLocation.set(myNewLocation);
  }

  onKeyDownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
