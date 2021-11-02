import './style.css'

import PlayerName from "../PlayerName"
import PlayerPoints from '../PlayerPoints'

const HeaderGame = () => {
    return `
        <div class="header-game">
            <div class="points-container">
                ${PlayerName('Player1')}
                ${PlayerPoints()}
            </div>
            <div>
                <p class="vs-game">VS</p>
            </div>
            <div class="points-container">
                ${PlayerPoints()}
                ${PlayerName('Player2')}
            </div>
        </div>
    `
}
export default HeaderGame