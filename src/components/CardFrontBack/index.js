import CardGame from "../CardGame"

const CardFrontBack = () => {
    return `
        <div>
            ${CardGame("alura-pixel", "logo alura")}
            ${CardGame("javascript", "logo javascript")}
        </div>
    `
}
export default CardFrontBack