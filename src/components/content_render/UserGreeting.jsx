import './style.css'

const UserGreeting = ({username, isLoggedIn}) => {
  return (
    <div className="user-greeting">
        {isLoggedIn ? `Welcome ${username} to Homepage` : 'Please login...'}
    </div>
  )
}

export default UserGreeting