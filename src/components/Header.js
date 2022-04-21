import '../App.css';
import logo from '../images/troll-face.png'

const Header = () => {
  return (
    <header className="header">
        <img className='header--image' src={logo} alt="" />
        <h2 className='header--title'>MemeGenerator</h2>
        <div className='header--button'>+ Create</div>
    </header>
  )
}

export default Header