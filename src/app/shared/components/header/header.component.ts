import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  title: string = `Vaquinha`;
  options: Array<{
    text: string
    isActive: boolean
  }> = [
      { text: `História`, isActive: false },
      { text: `Objetivo`, isActive: false },
      { text: `Mensagens`, isActive: false }
    ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }
}
