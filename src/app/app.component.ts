import {Component, ViewChild} from '@angular/core';
import {FlatTreeControl} from "@angular/cdk/tree";
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";
import {Router} from "@angular/router";

interface MenuNode {
    name: string;
    routerLink?: string;
    children?: MenuNode[];
}

const MENU_DATA: MenuNode[] = [
    {
        name: 'Введение',
        children: [
            {
                name: 'Распознавание образов нейронными сетями',
                routerLink: '/intro1',
            },
            {
                name: 'Архитектуры нейросетей',
                routerLink: '/intro2',
            },
        ]
    },
    {
        name: 'Сервисы для повышения качества изображений',
        children: [
            {
                name: 'Upscaler изображений',
                routerLink: '/method1',
            },
            {
                name: 'Photoshop',
                routerLink: '/method2',
            },
            {
                name: 'AI Image Enlarger',
                routerLink: '/method3',
            },
        ]
    },
    {
        name: 'Реставрация изображений',
        children: [
            {
                name: 'Возможности нейросети',
                routerLink: '/enhan1',
            },
            {
                name: 'Реставрация фотографий с ИИ',
                routerLink: '/enhan2',
            },
        ]
    },
];

interface MenuFlatNode {
    expandable: boolean;
    routerLink: string;
    name: string;
    level: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    host: {
        class: 'l-flex-column',
    },
})
export class AppComponent {
    @ViewChild('sidenav', { static: true }) sidenav: any;

    private _transformer = (node: MenuNode, level: number) => {
        return {
            expandable: !!node.children && node.children.length > 0,
            routerLink: node.routerLink,
            name: node.name,
            level: level,
        };
    }

    treeControl = new FlatTreeControl<MenuFlatNode>(node => node.level, node => node.expandable);

    treeFlattener = new MatTreeFlattener(
        this._transformer, node => node.level, node => node.expandable, node => node.children);

    menuDataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    constructor(private _router: Router) {
        this.menuDataSource.data = MENU_DATA;
    }

    hasChild = (_: number, node: MenuFlatNode) => node.expandable;

    menuItemClick(routerLink: any): void {
        this.sidenav.toggle();

        this._router.navigate([routerLink]);
    }
}
