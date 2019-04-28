import React, { Component } from 'react'
import Jumbotron from "./Jumbotron"
import { Container } from "./grid"
import ImageArray from './ImageArray'
import ModalMessage from './Modal'


class Game extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clicked: [],
      imageFileNames: [],
      score: 0,
      highScore: 0,
      modal: {
        message: "",
        open: false
      }
    }
  }

  componentDidMount = () => {
    this.setState({
      imageFileNames: this.shuffledFileArray()
    })
  }

  shuffledFileArray = (n = 12) => {
    //  returns shuffled array of filenames for ClickImage
    const randInt = max => {
      return Math.floor(Math.random() * max)
    }
    const numbers = []
    const returnArray = []
    for (let i = 1; i <= n; i++) numbers.push(i)
    // create fileName with random element removed from numbers & push fileName to returnArray
    for (let i = 0; i < n; i++) {
      const fileName = `./images/${numbers.splice( randInt( numbers.length ), 1)[0]}.jpg`
      returnArray.push( fileName )
    }
    return returnArray
  }

  clickEvent = event => {
    const name = event.target.name
    if (this.state.clicked.indexOf(name) < 0) {
      // image hasn't been clicked before, increment score & record click
      this.state.clicked.push(name)
      this.setState({
        score: this.state.score + 1,
        highScore: Math.max(this.state.highScore, this.state.score + 1)
      })
      if (this.state.clicked.length === 12) {
        this.setState({
          score: 0,
          clicked: []
        })
        this.openModal("You got them all! ")
      }
    } else {
      // image has been clicked before. Reset
      this.setState({
        score: 0,
        clicked: []
      })
      this.openModal("You clicked that one already!")
    }
    // shuffle images
    this.setState({
      imageFileNames: this.shuffledFileArray()
    })
  }

  openModal = message => {
    message = message || ''
    this.setState({
      modal: {
        message: message,
        open: true
      }
    })
  }

  closeModal = () => {
    this.setState({
      modal: {open: false}
    })
  }

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>B-1b Memory Game!</h1>
          <h3>Score: {this.state.score}</h3>
          <h6>High Score: {this.state.highScore}</h6>
        </Jumbotron>
        <ImageArray
          imageFileNames={this.state.imageFileNames}
          clickEvent={this.clickEvent}
        />
        <ModalMessage
          open={this.state.modal.open}
          message={this.state.modal.message}
          close={this.closeModal}
        />
      </Container>
    )
  }
}

export default Game