import { Component, OnInit } from '@angular/core';
import { SqliteService } from '../service/bd.service';
import { FormGroup,AbstractControl,FormBuilder,ValidationErrors,ValidatorFn,Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.page.html',
  styleUrls: ['./crear-cuenta.page.scss'],
})
export class CrearCuentaPage {
  
  formularioRegistro: FormGroup | undefined;

  nombre: string = '';
  apellido: string = '';
  telefono: number | null = null;
  fechaNacimiento: string = '';
  correo: string = '';
  contrasena: string = '';
  confirmarContrasena: string = '';

  constructor(private sqliteService: SqliteService) {}

  ngOnInit() {
    //this.presentingElement = document.querySelector('.ion-page');
  }
async guardar(){
//  const f = this.formularioRegistro.value;
}
//this.usuarioService.verificarExistenciaUsuario(f.nombre).subscribe(async (usuarios) => {
      //if (usuarios.length > 0) {
        // Si ya existe un usuario con ese nombre
        //const alert = await this.alertController.create({
          //header: 'Error',
          //message: 'El nombre de usuario ya está en uso.',
         // buttons: ['Aceptar'],
       // });
        //await alert.present();
       // return;
     // }
  
      // Verificar si el correo electrónico existe
      //this.usuarioService.verificarExistenciaEmail(f.email).subscribe(async (emails) => {
        //if (emails.length > 0) {
          // Si ya existe un correo electrónico
          //const alert = await this.alertController.create({
            //header: 'Error',
            //message: 'El correo electrónico ya está en uso.',
            //buttons: ['Aceptar'],
          //});
          //await alert.present();
          //return;
        }
