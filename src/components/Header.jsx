import Buttom from "./Buttom"
const Header = () => {
  return (
    <>
        <nav className="navbar container pt-3 pb-3 align-items-start">
            <a className="navbar-brand text-light" href=""> Stock Prediction Portal</a>

            <div>
                <Buttom text='Login'  class='btn-outline-info'/>
                &nbsp;
                {/* <a className="btn btn-info" href="">Register</a> */}
                <Buttom  text='Register' class="btn-info"/>
            </div>

        </nav>
    </>
  )
}
export default Header