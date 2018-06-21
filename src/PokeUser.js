import React, { Component } from 'react'

class PokeUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      poke: {
        "sprites": {}
      }
    }

    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokeName !== this.props.match.params.pokeName) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const { params } = this.props.match
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokeName}`)
      .then(response => response.json())
      .then(poke => this.setState({ poke }))
  }

  render() {
    const { poke } = this.state
    console.log(poke)
    return (
      <div className="Pokemon">
        <img src={this.state.poke.sprites.front_default} alt="" style={styles.img}/>
        <div style={styles.main}>
        <h2>
           Species Name: {poke.name}  
        </h2>
        <h3>Weight: {poke.weight}00 g</h3>
        <h3>Height: {poke.height}0 cm</h3>
        <h3>Base Experience: {poke.base_experience}</h3>
        </div>
      </div>
    )
  }
}

const styles = {
  main:{
    color: "black",
    //backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6JJsLpcy24GKXZXe2DAPIgGEsG2iFksYQNvykVTU7SjCYMshhlA)',
    backgroundColor: 'rgba(250,250,250, 0.4)',
    boxShadow: '0 1px 1px rgba(250,250,250,.1)',
    marginTop: '7rem',
    marginBottom: '2rem',
  },
  img:{
    backgroundColor: 'rgba(0, 0, 0, .9)',
    width: "80%",
    maxWidth: "400px",
  },
}

export default PokeUser