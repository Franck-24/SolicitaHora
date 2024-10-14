import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SqliteService {
  private dbInstance!: SQLiteObject;

  constructor(
    private sqlite: SQLite,
    private platform: Platform
  ) {
    this.initializeDatabase();
  }

 async testingDatabase(){
    try {
      //se debe iniciar la base de datos
      await this.initializeDatabase();
      console.log('La base de datos ha sido iniciada favorablemente.');

      //ingresamos un usuario para la bdd
      await this.addUser('Test','test2','test@gmail.com','passwordTest','56983827645');
      console.log('Usuario de prueba agregado correctamente.');

      //llamamos a los usuariso creados.
      const usuarios = await this.getUsers();
      console.log('Usuarios encontrados:',usuarios);
    } catch (error){
      console.error('Error en la base de datos:',error)
  }
 }

 private async ensureDatabaseInitialized(): Promise<boolean>{
  if(!this.dbInstance){
    console.log('La base de datos esta siendo iniciada');
    return false;
  }
  return true;
 }

 async initializeDatabase(){
  try{
    //carga la paltaforma a usar

    await this.platform.ready();

    if(this.platform.is('cordova')){
      console.log('Plataforma lista');
      this.dbInstance = await this.sqlite.create({
        name:'hora.db',
        location:'default'
      });
      console.log('Base de datos creada con exito',this.dbInstance);
        
        await this.dbInstance.executeSql(
          `CREATE TABLE IF NOT EXISTS usuarios (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
             nombre VARCHAR(32),
             apellido VARCHAR(32),
             email VARCHAR(32),
             password VARCHAR(32),
             numero VARCHAR(12)
          )`,
          []
        );

        console.log('Tabla de usuarios Creada');
    }else{
      console.warn('SQLite no disponible!');
    }
    } catch(error){
      console.error('Error en la creacion de la base de datos:',error);
    }
  }

  async addUser(nombre: string,email:string,password:string, apellido:string , numero: string ){
    try{
      //comprobar la base de datos
      const initialized = await this.ensureDatabaseInitialized();
      if (!initialized) throw new Error('Error desconocido en la base de datos');

      const query = `INSERT INTO usuarios (nombre, email, password) VALUES (?,?,?)`;
      await this.dbInstance.executeSql(query,[nombre,apellido,password,email,numero]);
      console.log('Usuario Agregado Exitosamente');
      }catch(error) {
        console.error('Error al agregar el usuario',error);
    }
  }

  async getUsers(){
    try{
      //se repite el proceso de verificacion para la base de datos este activada
      const initialized = await this.ensureDatabaseInitialized();
      if (!initialized) throw new Error('No se inicio la base de datos');

      const result = await this.dbInstance.executeSql(`SELECT * FROM usuarios`,[]);
      let users = [];
      for (let i = 0; i < result.rows.length; i++){
        users.push(result.rows.item(i));
      }
      return users;
      }catch(error) {
        console.error('Error al obtener usuarios:',error);
        return[];
    }
  }


  async updateUser(id:number,nombre: string,email:string,password:string, apellido:string , numero: string ){
    try{
      // se repide el proceso de inicianilazion para la base de datos
        const initialized = await this.ensureDatabaseInitialized();
        if (!initialized) throw new Error('No se pudi iniciar la base de datos');
        
        const query = `UPDATE usuarios SET nombre = ?, email = ?, password = ? , apellido = ? , numero = ? WHERE id =?`;
        await this.dbInstance.executeSql(query,[nombre,email,password,apellido,numero,id]);
        console.log('Usuario actualizado');
      }catch(error) {
        console.error('Error al actualiazr la informacion del usuario',error);
    }
  }

  async deleteUser(id: number){
    try { 
      const initialized = await this.ensureDatabaseInitialized();
      if(!initialized) throw new Error('No se inicializo la base de datos');

      const query = `DELETE FROM usuarios WHERE id = ?`;
      await this.dbInstance.executeSql(query,[id]);
      console.log('El usuario fue eliminado');
    }catch(error) {
      console.error('Error al eliminar el usuario', error);
    }
  }











}
