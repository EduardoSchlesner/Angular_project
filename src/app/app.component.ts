import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url:
      'https://www.motoo.com.br/fotos/2019/11/1280_960/nhe1_06112019_2799_1280_960.jpg',
      description: 'CBR1000RR'
    },
    {
      url:
      'https://s2-autoesporte.glbimg.com/L6Zu9WjCgLB9XsG2MrXqUTAJ5yc=/0x0:4914x3276/1008x0/smart/filters:strip_i' +
        'cc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/J/j/4dTiNoRiav89BUj' +
        'ZVVOA/p90327384-highres-bmw-s-1000-rr-11-201.jpg',
      description: 'bmw1000rr'
    },
    {
      url:
        'https://consorciokawasakibrasil.com.br/wp-content/uploads/2021/10/2-6-1.png',
      description: 'kawasaki1000cc'
    }
  ];
}
