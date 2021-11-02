import './style.css'
import CardsContainer from "../CardsContainer"
import Header from '../HeaderGame'

const BoardGame = () => {
    return `
        <div class="board-game">
            ${Header()}
            ${CardsContainer(2)}
        </div>
    `
}
export default BoardGame