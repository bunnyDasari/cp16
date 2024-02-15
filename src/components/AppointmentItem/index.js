// Write your code here
const img1 =
  'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

const img2 =
  'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

const AppointmentItem = props => {
  const {appointmentsDetails, onImgIcon} = props
  const {text, dateEnterd, id, isStarred} = appointmentsDetails
  const isStarredText = isStarred ? img1 : img2
  const onClickIcon = () => {
    onImgIcon(id)
  }
  return (
    <li>
      <div>
        <p>{text}</p>
        <p>Date : {dateEnterd}</p>
        <button onClick={onClickIcon} type="text" testid="star">
          <img src={isStarredText} alt="star" />
        </button>
      </div>
    </li>
  )
}
export default AppointmentItem
