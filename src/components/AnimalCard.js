import { Component } from 'react'

class AnimalCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            isFavorite: false
        }
    }

    render(){
        const {animalInfo} = this.props;
        return (
            <div className="animal-card">
                <div className="image-container">
                    <img src={animalInfo.imgUrl} alt={animalInfo.name} />
                </div>
                <div className="card-info">
                    <div>{animalInfo.name}</div>
                    <div>♡</div> 
                    {/* ♥️ */}
                </div>
            </div>
        )
    }
    
}

export default AnimalCard