import {animate, style, transition, trigger} from '@angular/animations';

const off = style({opacity: 0, transform: 'translateY(4px)'});
const on = style({opacity: 1, transform: 'translateY(0)'});

export const fadeAnimation = trigger('fadeAnimation', [
    transition(':enter', [off, animate('.2s ease', on)]),
    transition(':leave', [animate('.2s ease', off)]),
]);
