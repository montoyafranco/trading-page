import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluacionesComponent } from '../evaluaciones/evaluaciones.component';
import { AuthService } from '../services/auth.service';
declare const TradingView: any;
declare const TradingView2: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,AfterViewInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
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
  ngAfterViewInit(){
    new TradingView.widget(
      {
      "width": "100%",
      "height": 550,
      "symbol": "NASDAQ:AAPL",
      "timezone": "Etc/UTC",
      "theme": "Light",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "withdateranges": true,
      "range": "ytd",
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "show_popup_button": true,
      "popup_width": "300",
      "popup_height": "400",
      "no_referral_id": true,
      "container_id": "tradingview_bac65"
    }
      );
      
  }

 
  

}
