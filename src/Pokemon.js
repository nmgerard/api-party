import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Pokemon.css'
import PokeUser from './PokeUser'

class Pokemon extends Component {
  state = {
    pokeName: '',
  }

  handleChange = (ev) => {
    this.setState({ pokeName: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.pokeName}`)
  }

  render() {
    return (
      <div className="Pokemon" style={styles}>
        <img
          src="https://res.cloudinary.com/teepublic/image/private/s--1slEw80b--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1515387356/production/designs/2262554_1.jpg"
          alt="Pokemon"
          className="logo"
        />

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter a Pokemon"
              value={this.state.pokeName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">
              Look up a Pokemon
            </button>
          </div>
        </form>

        <Route path="/pokemon/:pokeName" component={PokeUser} />
      </div>
    )
  }
}

const styles = {
    backgroundImage: `url(https://www.desktopbackground.org/p/2010/04/23/6699_edited-wallpapers-pokemon-backgrounds_1680x1050_h.jpg)`,
}

export default Pokemon