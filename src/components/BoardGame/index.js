import './style.css'
import CardsContainer from "../CardsContainer"
import Header from '../HeaderGame'

const BoardGame = (cardGame) => {
    return `
        <div class="board-game">
            ${Header()}
            ${CardsContainer(cardGame, 6)}
        </div>
    `
}
export default BoardGame