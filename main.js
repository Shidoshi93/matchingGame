import './src/styles/configs/style.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import CardGame from './src/components/CardGame'
import CardsContainer from './src/components/CardsContainer'
import BoardGame from './src/components/BoardGame'

const $root = document.querySelector('#root')
const $BoardGame = BoardGame(CardGame())

$root.insertAdjacentHTML('beforeend', $BoardGame)
