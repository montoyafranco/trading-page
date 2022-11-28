import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluacionesComponent } from '../evaluaciones/evaluaciones.component';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2'
declare const TradingView: any;
declare const TradingView2: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  constructor(
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
     window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => {
      Swal.fire({
        title: 'Bienvenido! ',
        text: 'Recomendamos utilizar nuestro servicio de atención al cliente mediante Whatsapp sin compromiso para guiarlo ante cualquier duda',
        imageUrl: 'https://www.emprenderalia.com/wp-content/uploads/cliente-1.jpg',
        imageWidth: 500,
        imageHeight: 300,
        imageAlt: 'Custom image',
        timer:6000,
        timerProgressBar: true,
        position: 'center-end',
        showConfirmButton: false,
        
      })
      
    }, 0.5);
    
    
  }
  onClick() {
    this.auth.loginWithGoogle().then((response) => {
      console.log(response)
      // this.nuevo_arreglo = {
      //   nombre: response.user.displayName,
      //   email: response.user.email,
      //   telefono: response.user.phoneNumber,
      //   id: response.user.uid,
      // };
      // this.verificacion(this.nuevo_arreglo);
      // this.dataResponse = response;
      // this.router.navigate(['home']);
    });
  }
  
  

 
  

}
