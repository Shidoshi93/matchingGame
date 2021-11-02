import ArrowDown from '../ArrowDown'
import './style.css'

const PlayerPoints = (player) => {
    return `
        <div class="container-arrow-points">
            <div>
                ${ArrowDown()}
            </div>
            <div class="container-player-points">
                <div class="player-point"></div>
                <div class="player-point"></div>
                <div class="player-point"></div>
            </div>
        </div>
    `
}
export default PlayerPoints