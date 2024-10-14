import { Component, OnInit } from '@angular/core';
import { SqliteService } from '../service/bd.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  users: any[] = [];
  newUser: { nombre: string,email:string,password:string, apellido:string , numero: string } = { nombre: '', email: '',password:'',apellido:'',numero:'' };
  editingUser: any = null;

  constructor(private userService: SqliteService) {}

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
    this.users = await this.userService.getUsers();
  }

  async addUser() {
    if (this.newUser.nombre,this.newUser.email,this.newUser.apellido,this.newUser.password,this.newUser.password) {
      await this.userService.addUser(this.newUser.nombre,this.newUser.email,this.newUser.apellido,this.newUser.password,this.newUser.password);
      this.newUser = { nombre: '', email: '',password:'',apellido:'',numero:'' };
      this.loadUsers();
    }
  }

  async editUser(user: any) {
    this.editingUser = { ...user };
  }

  async updateUser() {
    if (this.editingUser) {
      await this.userService.updateUser(this.editingUser.id, this.editingUser.nombre, this.editingUser.email,this.editingUser.apellido,this.editingUser.password,this.editingUser.numero);
      this.editingUser = null;
      this.loadUsers();
    }
  }

  async deleteUser(id: number) {
    await this.userService.deleteUser(id);
    this.loadUsers();
  }
}
