import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

class Home extends Component {
  state = {isRegistered: false}

  renderPlzRegisterView = () => (
    <>
      <h1 className="welcome-heading">Welcome to Meetup</h1>
      <p className="plz-register-para">Please register for the topic</p>
      <Link to="/register">
        <button className="register-btn" type="button">
          Register
        </button>
      </Link>
    </>
  )

  renderRegisteredView = () => (
    <>
      <h1 className="hello-james-heading">Hello James</h1>
      <p className="welcome-para">Welcome to Education and Learning</p>
    </>
  )

  render() {
    const {isRegistered} = this.state
    return (
      <>
        <Header />
        <div className="home-container">
          {isRegistered
            ? this.renderRegisteredView()
            : this.renderPlzRegisterView()}
        </div>
        <div className="meetup-img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </div>
      </>
    )
  }
}

export default Home
