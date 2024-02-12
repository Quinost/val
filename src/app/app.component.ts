import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule ,
    RouterOutlet,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'val';
  showDance: boolean = true;
  showOnlyYes: boolean = false;
  onBtnClick() {
    this.showDance = false;
  }

  onNoBtnClick() {
    window.alert("Błąd");
    this.showOnlyYes = true;
  }
}
