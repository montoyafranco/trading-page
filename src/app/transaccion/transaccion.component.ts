import { Component, OnInit } from '@angular/core';
import {render} from 'creditcardpayments/creditCardPayments'

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.scss']
})
export class TransaccionComponent implements OnInit {

  constructor() { 
    
    render({
      id: "#myPaypalButtons",
      currency: "USD",
      value: "100.00",
      onApprove:(details) =>{
        alert("Transaccion exitosa")

      }
      
    })
      

    

  }

  ngOnInit(): void {
  }

}
