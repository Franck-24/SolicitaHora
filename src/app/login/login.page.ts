import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup<loginForm>;
  

  constructor(private readonly formBuilder: NonNullableFormBuilder) {}

  ngOnInit(): void{

    this.loginForm = new FormGroup<loginForm>({
      correo: new FormControl('', {nonNullable: true}),
      password: new FormControl('',{nonNullable:true})
    });

    this.loginForm = this.formBuilder.group({
      correo:'',
      password:''
    })
  }

  onSubmit() {
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }
  }
  
}

