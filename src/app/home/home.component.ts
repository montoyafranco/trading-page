import { Component, OnInit ,AfterViewInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluacionesComponent } from '../evaluaciones/evaluaciones.component';
declare const TradingView: any;
declare const TradingView2: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,AfterViewInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
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
