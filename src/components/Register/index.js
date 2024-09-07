import {Component} from 'react'
import Header from '../Header'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {username: '', topic: topicsList[0].displayText, showErrMsg: false}

  handleUserName = event => {
    this.setState({username: event.target.value})
  }

  handleTopicChange = event => {
    this.setState({topic: event.target.value})
  }

  handleFormSubmit = async event => {
    event.preventDefault()
    const {username} = this.state
    if (username === '') {
      this.setState({showErrMsg: true})
    } else {
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    const {username, topic, showErrMsg} = this.state
    return (
      <div className="register-main-container">
        <Header />
        <div className="register-sub-container">
          <div className="register-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png "
              alt="website register"
            />
          </div>
          <form onSubmit={this.handleFormSubmit} className="form-container">
            <h1>Let us join</h1>
            <label htmlFor="name">NAME</label>
            <input
              value={username}
              onChange={this.handleUserName}
              className="form-input"
              placeholder="Your name"
              type="text"
              id="name"
            />
            <label htmlFor="topics">TOPICS</label>
            <select
              value={topic}
              onChange={this.handleTopicChange}
              className="form-input"
              id="topics"
            >
              {topicsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <div>
              <button className="register-btn" type="submit">
                Register Now
              </button>
            </div>
            {showErrMsg && (
              <p className="err-msg-para">Please enter your name</p>
            )}
          </form>
        </div>
      </div>
    )
  }
}
export default Register
