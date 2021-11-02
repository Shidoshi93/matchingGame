import CardFrontBack from '../CardFrontBack'
import './style.css'

const CardsContainer = (qtd) => {
    return `
        <div class="cards-container">${CardFrontBack().repeat(qtd)}</div>
    `
}
export default CardsContainer