import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/client.service';
import {Cliente} from '../../Cliente';


@Component({
  moduleId:module.id,  
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers:[ClienteService]
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService:ClienteService) {

      this.clienteService.getClientes() 
        .subscribe(clientes =>{
          this.clientes = clientes;
        });
   }

  ngOnInit() {
  }

}
