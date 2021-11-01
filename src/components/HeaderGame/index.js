import './style.css'

import PlayerName from "../PlayerName"

const HeaderGame = () => {
    return `
        <div class="header-game">
            ${PlayerName('Player1')}
            ${PlayerName('Player2')}
        </div>
    `
}
export default HeaderGame