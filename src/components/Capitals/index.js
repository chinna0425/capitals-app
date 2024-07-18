import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {status: 'India'}

  selectionvalue = event => {
    const latestitem = countryAndCapitalsList.filter(
      each => each.id === event.target.value,
    )
    this.setState({status: latestitem[0].country})
  }

  render() {
    const {status} = this.state
    return (
      <div className="background-container">
        <div className="inner-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div>
            <select
              id="capitals"
              onClick={this.selectionvalue}
              className="selectbox"
            >
              <option value="NEW_DELHI">New Delhi</option>
              <option value="LONDON">London</option>
              <option value="PARIS">Paris</option>
              <option value="KATHMANDU">Kathmandu</option>
              <option value="HELSINKI">Helsinki</option>
            </select>
            <label htmlFor="capitals" className="labelelement">
              is capital of which country?
            </label>
          </div>
          <p className="paragraph">{status}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
