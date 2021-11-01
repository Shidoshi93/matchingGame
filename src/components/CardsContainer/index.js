import './style.css'

const CardsContainer = (CardGame, qtd) => {
    return `
        <div class="cards-container">${CardGame.repeat(qtd)}</div>
    `
}
export default CardsContainer