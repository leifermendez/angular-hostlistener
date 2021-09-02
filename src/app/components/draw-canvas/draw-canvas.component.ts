import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-draw-canvas',
  templateUrl: './draw-canvas.component.html',
  styleUrls: ['./draw-canvas.component.css']
})
export class DrawCanvasComponent implements OnInit {
  @ViewChild('player') player!: ElementRef;

  @HostListener('document:keydown', ['$event.key'])
  handleKey($event: string): void {
    console.log($event)
    this.movePlayer($event)
  }

  @HostListener('document:click', ['$event.target'])
  handleClick($event: HTMLElement): void {
    console.log('Click', $event.classList.toString())
    const nameClass = $event.classList.toString()
    this.changeImage(nameClass)
  }

  public image = [
    'https://i.imgur.com/mWk2Z4c.png',
    'https://i.imgur.com/4fgT9tx.png'
  ]

  constructor(private render2: Renderer2) { }

  ngOnInit(): void {
  }

  movePlayer(nameKey: string): void {
    //TODO: Element HTMl (player)
    const playerEl = this.player.nativeElement;

    if (nameKey === 'ArrowRight') {
      const { left = '0px' } = playerEl.style; //TODO: 10px --> 10 --> Number(10)
      const parseValue = Number(left.replace('px', '')) //TODO: 0
      this.render2.setStyle(playerEl, 'left', `${parseValue + 50}px`) //TODO: 50px
    }

    if (nameKey === 'ArrowLeft') {
      const { left = '0px' } = playerEl.style;
      const parseValue = Number(left.replace('px', ''))
      this.render2.setStyle(playerEl, 'left', `${parseValue - 50}px`)
    }

    if (nameKey === 'ArrowUp') {

      this.render2.addClass(playerEl, 'jump-player')

      setTimeout(() => {
        this.render2.removeClass(playerEl, 'jump-player')
      }, 2000)
    }


  }

  changeImage(name: string): void {
    if (name === 'player-image') {
      this.image.reverse()
      setTimeout(() => {
        this.image.reverse()
      }, 1000)
    } else {
      console.log('CLick fuera de la imagen')
    }

  }
}
