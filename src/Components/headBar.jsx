
import "../Assets/CSS/bar.css"
function headBar(){
    return(
        <div>
            <ul>  
                  <li><a class="active" href="/">Home</a></li>  
                  <li><a href="news">News</a></li>  
                  <li><a href="contact">Contact</a></li>
                  <li><a href="about">About</a></li>
            </ul>
        </div>
    )
}

export default headBar