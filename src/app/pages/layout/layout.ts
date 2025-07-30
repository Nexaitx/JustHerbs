import { Component } from '@angular/core';
import { Header } from './header/header';
import { Banner } from './banner/banner';
import { Footer } from './footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    Header,
    Banner,
    Footer,
    RouterOutlet
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
