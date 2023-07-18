import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [
  ]
})
export class UncommonPageComponent {
  public name: string = 'Antonio';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeName():void {
    this.name='Ana';
    this.gender='female';
  }

  // i18nPlural
  public clients: string[] = ['Marta', 'Maria', 'Antonio', 'Jose', 'Enrique', 'Fernando'];
  public clientsMap = {
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando',
  }

  deleteClient(): void{
    this.clients.shift();
  }

  // KeyValue Pipe

  public person = {
    name: 'Antonio',
    age: 22
  }


  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:',value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('Tenemos data en la promesa.')
    }, 3500);
  })
}
