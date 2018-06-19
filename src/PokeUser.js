import React, { Component } from 'react'

class PokeUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }

    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.username !== this.props.match.params.username) {
      this.fetchUserData()
    }
  }

  fetchUserData = () => {
    const { params } = this.props.match
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${params.username}/`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  render() {
    const { user } = this.state

    return (
      <div className="PokeUser">
        <img src={user.url} alt="" />
        <h2>
          <a href={user.html_url} target="_blank">
            {user.stats} ({user.abilities})
          </a>
        </h2>
        <h3>{user.forms}</h3>
      </div>
    )
  }
}

export default PokeUser