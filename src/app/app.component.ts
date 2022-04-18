import { Component,OnInit } from '@angular/core';
import { WebSocketIoService} from './services/web-socket-io.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit { 

  constructor ( private WebSocketIoService : WebSocketIoService ){

  }


  ngOnInit(): void {
    this.WebSocketIoService.listen('Test Event').subscribe(
      (data:any) => {
      console.log(data)
    }
    )
  }

}
