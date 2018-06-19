import React, { Component } from 'react'

class PokeUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      poke: {}
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
      <div className="PokeUser" style={styles}>
        {/* <img src={poke.sprites[back_default]} alt="" /> */}
        <h2>
           Species Name: {poke.name} 

             {/* ({poke.sprites}) */}   
        </h2>
        <h3>Weight: {poke.weight}00 g</h3>
        <h3>Height: {poke.height}0 cm</h3>
        <h3>Base Experience: {poke.base_experience}</h3>
      </div>
    )
  }
}

const styles = {
    color: "rgb(89, 55, 213)",
    backgroundColor: "rgb(255, 200, 0)",
}

export default PokeUser