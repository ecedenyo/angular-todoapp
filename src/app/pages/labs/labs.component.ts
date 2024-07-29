import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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

  myTasks = signal([
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio',
  ]);

  myLocation = signal('La Villa');
  user = signal({
    name: 'Emerson',
    age: 18,
    isPartner: false,
    role: 'Editor',
  });

  frmColorCtrl = new FormControl();
  frmWidthCtrl = new FormControl(50, { nonNullable: true });

  constructor() {
    this.frmColorCtrl.valueChanges.subscribe((newVal) => console.log(newVal));
  }

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

  onAgeChangeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    this.user.update((prevState) => {
      return {
        ...prevState,
        age: parseInt(input.value, 10),
      };
    });
  }
}
