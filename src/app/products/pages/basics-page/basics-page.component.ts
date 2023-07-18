import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [
  ]
})
export class BasicsPageComponent {
  public nameUpper: string = 'ANTONIO';
  public nameLower: string = 'antonio';
  public fullName: string = 'aNtoNiO JosE RivERA';

  public customDate: Date = new Date ();
}
