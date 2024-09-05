import './bootstrap';
import Alpine from 'alpinejs';
window.Alpine = Alpine;

import initButton from './components/buttonComponent';

Alpine.start();

document.addEventListener('DOMContentLoaded', () => {
    initButton();
});

console.log('app.js loaded');
