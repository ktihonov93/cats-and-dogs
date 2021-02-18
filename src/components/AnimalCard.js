import { Component } from 'react'

class AnimalCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            isFavorite: false
        }
    }

    handleFavoriteClick = () => {
        this.setState({ isFavorite: !this.state.isFavorite })
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
                    <div onClick={this.handleFavoriteClick}>{this.state.isFavorite ? "♥️" : "♡"}</div>
                </div>
            </div>
        )
    }
    
}

export default AnimalCard