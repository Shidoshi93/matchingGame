import './style.css'
import CardGame from "../CardGame"

const CardFrontBack = () => {
    return `
        <div class="card-front-back">
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