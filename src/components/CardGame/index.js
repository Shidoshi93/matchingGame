import './style.css'

const CardGame = (content, alt) => {
    return `
        <div class="card-game">
            <img src="images/${content}.png" class="icon-alura" alt=${alt}/>
        </div>
    `
}
export default CardGame