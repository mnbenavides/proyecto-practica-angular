import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PamatroService } from 'src/app/service/parametro/pamatro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //Declaracion de variables
  formulario!: FormGroup;
  errors: any;

  //Metodo constructor
  constructor(private router: Router, private paraService: PamatroService) {
    this.getErrorMessage();
    this.formulario = new FormGroup({
      codigo: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      documento: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[0-9]+$'),
      ]),
      tipo: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
  //Metodo redirigir al componente
  async buscar() {
    if (this.formulario.valid) {
      const codigo = this.formulario.get('codigo')?.value;
      const tipo = this.formulario.get('tipo')?.value;
      const documento = this.formulario.get('documento')?.value;
      if (codigo && tipo && documento) {
        const myParams = { codigo: codigo, tipo: tipo, documento: documento };
        this.paraService.parametroCompartido = myParams;
        this.router.navigate(['/', 'order']);
      }
    }
  }

  //Metodo manejo de errores
  getErrorMessage() {
    this.errors = [
      { type: 'required', message: 'El campo es obligatario' },
      {
        type: 'minlength',
        message:
          'El campo esta fuera de Rango de carácteres. Debe contener mínimo 3 letras',
      },
      {
        type: 'maxlength',
        message:
          'El campo esta fuera de Rango de carácteres. Debe contener máximo 60 letras',
      },
      { type: 'pattern', message: 'El campo no puede contener números' },
    ];
  }
}
