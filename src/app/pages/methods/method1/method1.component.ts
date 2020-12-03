import {Component, OnInit} from '@angular/core';

export interface TableElement {
    title: string;
    description: string;
}

const ELEMENT_DATA: TableElement[] = [
    {
        title: 'Традиционный Image Upscaler',
        description: 'в значительной степени относится к программному обеспечению или инструментам для редактирования изображений, таким как Photoshop, нацеленным на улучшение разрешения изображения путем настройки параметров, касающихся цвета, температуры, контура, яркости, теней и т.д. Используемые методы являются довольно традиционными и широко применяются десятилетия.'
    },
    {
        title: 'AI Backed Image Upscaler',
        description: 'относится к программе масштабирования изображения или программному обеспечению, которое исправляет размытое изображение с помощью алгоритма глубокого обучения AI (AI – Искуственный интелект, он же ИИ), например, обнаруживает размытый контур или пространство и исправляет его, чтобы восстановить потерянные цвета, текстуры и детали.'
    },
];

@Component({
    selector: 'app-introduction',
    templateUrl: './method1.component.html',
    styles: ['.column-title { width: 30%; }', '.column-description {  }',
    '.mat-header-cell { text-align: center; color: #000; font-size: 1.3rem; line-height: 1.55; font-family: "Open Sans", Arial, sans-serif; font-weight: 300; }',
        'td.mat-cell { text-align: center; color: #000; font-size: 1.3rem; line-height: 1.55; font-family: "Open Sans", Arial, sans-serif; font-weight: 300; }'],
})
export class Method1Component implements OnInit {

    displayedColumns: string[] = ['title','description'];
    dataSource = ELEMENT_DATA;

    constructor() {
    }

    ngOnInit(): void {
    }

}
