import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string='';
  password: string='';
  errorMessage: string='';

  constructor(private navCtrl: NavController) {}

  onSubmit() {
    //validacion simple, se puede reemplazar con tu logica de autenticcion
    if (this.email.trim() !== ''  && this.password.trim() !== ' '){
    
      var usuario = {
        email: this.email,
        password: this.password
      }
      localStorage.setItem('usuario',JSON.stringify(usuario));
    //Redirige a otra página después del inicio de sesion
    this.navCtrl.navigateForward('./home');
    } else {
      this.errorMessage = 'Credenciales incorrectas. Inténtalo de nuevo.';
    }
  } 
}

