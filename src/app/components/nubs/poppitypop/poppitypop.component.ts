import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
    selector: 'poppitypop',
    templateUrl: './poppitypop.component.html',
    styleUrls: ['./poppitypop.component.scss']
})

export class PoppityPopComponent implements OnInit {
    @Input() selectedProject;
    @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
    showPoppity: boolean = false;
    index:any = 0;
    config:any;

    slides: Array<any>;
    example2SwipeOptions: any;

    constructor() {
    }

    moveNext() {
        this.directiveRef.nextSlide();
    }

    movePrev() {
        this.directiveRef.prevSlide();
    }

    ngOnInit() {
        this.directiveRef.update();
    }

    closePoppity() {
        this.showPoppity = false;
        this.directiveRef.setIndex(0);
        this.directiveRef.update();
    }

}