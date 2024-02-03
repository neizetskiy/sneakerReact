import './Cartproduct.css'
import img from '../../../public/catalog/item2.svg'
export default function Cartproduct(){
    return(
        <>
            <div className="cartitem">
                <img src={img} alt="" />
                <div className="itemName">
                    <p>Мужские кросовки</p>
                    <p>Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                </div>
                <button className="removefromcart">✕</button>
            </div>
        </>
    )
}