import './style.css'
import CardsContainer from "../CardsContainer"

const BoardGame = (cardGame) => {
    return `
        <div class="board-game">
            ${CardsContainer(cardGame, 6)}
        </div>
    `
}
export default BoardGame