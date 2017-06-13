import{Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable ()
export class ClienteService{
    constructor(private http:Http){
        console.log('ClienteService Initialized');
    }

    getClientes (){
        return this.http.get('http://localhost:3000/cli/clientes')
            .map(res => res.json());
    }

}