import Img from '../img/bg_images.jpg'
import style from "../css/Bagroun.module.css"

function Bagroun() {
  return (
    <div className={style.images}>
            <img src={Img} alt="logo" />
    </div>
  )
}

export default Bagroun ;
