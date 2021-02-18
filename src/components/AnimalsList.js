import AnimalCard from './AnimalCard'

const AnimalsList = ({animalsArray}) => {
    return (
       <div className="cardsList">{animalsArray.map(card => <AnimalCard key={card.name} animalInfo={card} />)}</div>
    )
}

export default AnimalsList