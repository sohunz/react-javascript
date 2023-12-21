import ronaldo from '../../assets/ronaldo.webp';
import '../card/card.css'

const Card = () => {
  return (
    <div className="card">
        <img src={ronaldo} />
        <h2>Cristiano Ronaldo</h2>
        <p>The best football player in the world. He played in Real Madrid</p>
    </div>
  )
}

export default Card