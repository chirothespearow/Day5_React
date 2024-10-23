
import "../Assets/CSS/bar.css"
import { Link } from "react-router-dom"
function headBar(){
    return(
        <div>
            <ul>  
                  <li><Link class="active" to="/">Home</Link></li>  
                  <li><Link to="news">News</Link></li>  
                  <li><Link to="contact">Contact</Link></li>
                  <li><Link to="about">About</Link></li>
                  <li><Link to="product">Products</Link></li>
                  <li><Link to="Counter">Counter</Link></li>
                  <li><Link to="random">Random</Link></li>

            </ul>
        </div>
    )
}

export default headBar