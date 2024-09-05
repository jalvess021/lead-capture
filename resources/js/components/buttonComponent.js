// resources/js/components/buttonComponent.js
export default function initButton() {
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
}
