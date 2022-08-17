import './index.css'
import nav1 from '../../assets/Vectornav1.png'
import nav2 from '../../assets/Vectornav2.png'
import nav3 from '../../assets/Vectornav3.png'
import nav4 from '../../assets/Vectornav4.png'
function XyNav(){
    return <div className="xy-nav">
        <div className="nav-item">
            <div  className="item-icon"><img src={nav1} style={{width:'0.22rem',height:'0.22rem'}} /></div>
            <div className='item-text'>My Traker</div>
        </div>
        <div className="nav-item">
        <div  className="item-icon"><img src={nav2} style={{width:'0.22rem',height:'0.22rem'}} /></div>
            <div className='item-text' style={{marginLeft:'0.03rem'}}>Find</div>
        </div>
        <div className="nav-item">
        <div  className="item-icon"><img src={nav3} style={{width:'0.22rem',height:'0.22rem'}} /></div>
            <div className='item-text'>Monment</div>
        </div>
        <div className="nav-item">
        <div  className="item-icon"><img src={nav4} style={{width:'0.22rem',height:'0.22rem'}} /></div>
            <div className='item-text' >Account</div>
        </div>
    </div>
}
export default XyNav