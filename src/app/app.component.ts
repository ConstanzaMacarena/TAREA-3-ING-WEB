import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  myForm: FormGroup=new FormGroup({
    nombre:new FormControl(""),
    email:new FormControl(""),
    telefono:new FormControl(""),
    dirigido:new FormControl(""),
    mensaje:new FormControl(""),
  });
  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
    this.myForm = this.fb.group({
      nombre: '',
      email: '',
      telefono: '',
      dirigido: '',
      mensaje: '',
      
    });
  }
  opciones:any=["Seleccione una opcion","Contenidos", "Publicidad","Sugerencias","Suscripciones digitales"]
  onSubmit(form: FormGroup) {
    if (form.valid)alert("valido")
    else alert("formulario incompleto")
  }
  CambiarOpcion(e:any) {
    // this.dirigido.setValue(e.target.value, {
    //   onlySelf: true
    // })
    // alert("funcion")
    console.log(e);
    
  }
  title = 'angular-categorias';
  mostrar_galeria=true;
  mostrar_ayuda=false;
  ayuda()
  {
  this.mostrar_galeria=false;
  this.mostrar_ayuda=true;
 }
 inicio()
 {
  this.mostrar_galeria=true;
  this.mostrar_ayuda=false;
 }
 
}
