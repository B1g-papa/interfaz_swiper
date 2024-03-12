import { Component, inject, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage {

  constructor() {
    this.datos()
  }
  
  info : Array<any> = []
  swiperRef : ElementRef | undefined;
  swiper? : Swiper;
  mySwiper!: Swiper;
  segmento_lista : Array<string> = ['R1', 'R2', 'R3', 'R4', 'R5', 'R6'];
  segmento : string = this.segmento_lista[0];
  
  // export class FolderPage implements OnInit {
  // public folder!: string;
  // private activatedRoute = inject(ActivatedRoute);


  // ngOnInit() {
  //   this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  //   this.initSwiper();
  // }

  // initSwiper() {
  //   this.mySwiper = new Swiper('.swiper-container', {
  //     slidesPerView: 'auto',
  //     spaceBetween: 10,
  //   })
  // }

  swiperlisto() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  swiper_slide(event: any) {
    const index = event.target.swiper.activeIndex;
    this.segmento = this.segmento_lista[index]
  }

  segmento_selec(index: number) {
    if (!this.swiper || this.swiper.destroyed) {this.swiperlisto(); } 
    this.swiper?.slideTo(index, 500)
  }

  datos(){
    this.info=[
    {
      nombre: "R1",
      imagen: "../assets/img/apertura_mancuerna.jpg",
      series: "Series 99",
      repeticiones: "Repeticiones 99",
    },
    {
      nombre: "R2",
      imagen: "../assets/img/banco_inclinado.png",
      series: "Series 99",
      repeticiones: "Repeticiones 99",
    },
    {
      nombre: "R3",
      imagen: "../assets/img/banco_plano.jpg",
      series: "Series 99",
      repeticiones: "Repeticiones 99",
    },
    {
      nombre: "R4",
      imagen: "../assets/img/flexiones.jpg",
      series: "Series 99",
      repeticiones: "Repeticiones 99",
    },
    {
      nombre: "R5",
      imagen: "../assets/img/pull_over.jpg",
      series: "Series 99",
      repeticiones: "Repeticiones 99",
    },
    {
      nombre: "R6",
      imagen: "../assets/img/flexion_inclinada.png",
      series: "Series 99",
      repeticiones: "Repeticiones 99",
    },
  ]
  }

}
