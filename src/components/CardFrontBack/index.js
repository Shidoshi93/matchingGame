import './style.css'
import CardGame from "../CardGame"

const CardFrontBack = () => {

    window.cardFrontBack = {}

    window.cardFrontBack.hendleClick = (event) => {
        const $origin = event.target
        const $cardFrontBack = $origin.closest('.card-front-back')

        $cardFrontBack.classList.toggle('-active')
    }

    return `
        <div class="card-front-back" onclick="cardFrontBack.hendleClick(event)">
            <div class="card -front">
                ${CardGame("alura-pixel", "logo alura")}
            </div>
            <div class="card -back">
                ${CardGame("javascript", "logo javascript")}
            </div>
        </div>
    `
}
export default CardFrontBack