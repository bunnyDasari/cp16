// Write your code here
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    list: [],
    inputText: '',
    date: '',
    isFilterActive: false,
  }
  toggleIsStarrted = id => {
    this.setState(prevId => ({
      list: prevId.list.map(eachMap => {
        if (id === eachMap.id) {
          return {...eachMap, isStarred: !prevImg.isStarred}
        }
        return eachMap
      }),
    }))
  }

  onfilter = () => {
    const {isFilterActive} = this.state
    this.setState({isFilterActive: !isFilterActive})
  }

  onChangeInput = e => {
    this.setState({inputText: e.target.value})
  }
  onChangeDate = e => {
    this.setState({date: e.target.value})
  }
  onClickBtn = e => {
    e.preventDefault()
    const {inputText, date} = this.state
    const text = {
      id: uuidv4(),
      text: inputText,
      dateEnterd: date,
      isStarred: false,
    }
    this.setState(prevState => ({
      list: [...prevState.list, text],
      text: '',
      dateEnterd: '',
    }))
  }
  getFilterdList = () => {
    const {list, isFilterActive} = this.state
    if (isFilterActive) {
      return list.filter(eachFilter => eachFilter.isStarred === true)
    }
    return list
  }
  render() {
    const {date, inputText} = this.state
    const filterAppoimant = this.getFilterdList()
    console.log(date)
    return (
      <div>
        <h1>Add Appointments</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
          alt="appointments"
        />
        <form onSubmit={this.onClickBtn}>
          <label to="inputId">TITLE</label>
          <input
            type="text"
            id="inputId"
            onChange={this.onChangeInput}
            placeholder="Title"
            value={inputText}
          />
          <label to="date">Date</label>
          <input
            type="date"
            onChange={this.onChangeDate}
            id="date"
            value={date}
          />

          <button type="submit">Add</button>
        </form>
        <button>Starred</button>
        <ul>
          {filterAppoimant.map(eachMap => (
            <AppointmentItem
              key={eachMap.id}
              appointmentsDetails={eachMap}
              onImgIcon={this.toggleIsStarrted}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Appointments
