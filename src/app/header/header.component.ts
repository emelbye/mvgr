import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../shared/menu.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    host: {
        '(window:scroll)': 'onScroll($event)'
    }
})
export class HeaderComponent implements OnInit {

    cons = {
        PAGE_SCROLL_HEADER: "navbar navbar-default navbar-fixed-top page-scroll-header",
        PAGE_NOSCROLL_HEADER: "navbar navbar-default navbar-fixed-top page-noscroll-header"
    }
    headerClass;
    currPos: Number = 0;
    startPos: Number = 0;
    changePos: Number = 450;

    @ViewChild('menuItems') menuItems: ElementRef;

    constructor(private menuService: MenuService, private renderer: Renderer2) {}

    ngOnInit() { 
        this.headerClass = this.cons.PAGE_NOSCROLL_HEADER;

        this.menuService.getActiveItem().subscribe(item => {
            this.setActive(item);
        });
    }

    itemClicked(item: string){
        this.menuService.setActiveItem(item);
    }

    setActive(item){
        let lis = this.menuItems.nativeElement.children;
        for(let i=0; i < this.menuItems.nativeElement.children.length; i++){
            let li = this.menuItems.nativeElement.children[i];
            let href: string = li.children[0].href;

            let backSlashIndex = href.lastIndexOf("/");
            let hrefDelete: string = href.substring(0, backSlashIndex);
            let hrefItem: string = href.replace(hrefDelete + '/', '');

            if(hrefItem.indexOf(item) == -1)
                li.className = '';
            else
                li.className = 'active';
        }
    }

    // To change the menu class
    onScroll(evt) {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if (this.currPos >= this.changePos) {
            this.headerClass = this.cons.PAGE_SCROLL_HEADER;
            this.renderer.removeClass(document.body, 'bodyNoPadding');
            this.renderer.addClass(document.body, 'bodyPadding');
        } else {
            this.headerClass = this.headerClass = this.cons.PAGE_NOSCROLL_HEADER;
            this.renderer.removeClass(document.body, 'bodyPadding');
            this.renderer.addClass(document.body, 'bodyNoPadding');
        }
    }
}
