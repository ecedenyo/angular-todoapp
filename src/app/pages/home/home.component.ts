import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // Manejador de tareas mediante Signals
  myTasks = signal<Task[]>([
    {
      id: Date.now(),
      name: 'Instalar Angular CLI',
      completed: false,
    },
    {
      id: Date.now(),
      name: 'Crear proyecto',
      completed: false,
    },
    {
      id: Date.now(),
      name: 'Crear componentes',
      completed: false,
    },
    {
      id: Date.now(),
      name: 'Crear servicio',
      completed: false,
    },
  ]);

  // Nuevo manejador de tareas con FormControl
  myTasksCtrl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.pattern(/^(?!.*  ).+$/)],
  });

  isDebugModeActivated = true;

  addTaskHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;

    this.addTask(newTask);

    // input.value = ''; // paleativo para limpiar campo luego de agregar nueva tarea
  }

  addTaskCtrl() {
    if (this.myTasksCtrl.valid) {
      const newTask = this.myTasksCtrl.value;
      this.addTask(newTask);

      this.myTasksCtrl.setValue('');
    }

    // input.value = ''; // paleativo para limpiar campo luego de agregar nueva tarea
  }

  addTask(taskName: string) {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };

    this.myTasks.update((myTasks) => [...myTasks, newTask]); // agregar un elemento al final de una lista
  }

  deleteTask(index: number) {
    this.myTasks.update(
      (myTasks) =>
        myTasks.filter((taskToDelete, position) => position !== index) // filter o splice son las opciones para realizar la tarea
    );
  }

  checkTaskHandler(index: number) {
    this.myTasks.update((myTasks) =>
      myTasks.map((taskChecked, position) => {
        if (position === index) {
          return {
            ...taskChecked,
            completed: !taskChecked.completed,
          };
        }
        return taskChecked;
      })
    );
  }
}
