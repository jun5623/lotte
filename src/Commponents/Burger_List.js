import { useContext, useState } from "react";
import { useParams, useLocation } from 'react-router-dom';


function Burger_List(){
    const { category, id } = useParams();
    const location = useLocation();
    const product = location.state?.product;
    const [order, setOrder] = useState(false);
    const [details, setDetails] = useState(false);
    
    return(
        <div className="burger_list">
            <div className="main_img">
            <img src={product.imgSrc} alt={product.title} />
            </div>
            <div className="img_text">
                <div className="text_top">
                    <h2>{product.title}</h2> 
                    <span></span>  
                </div>
                <p>{ product.descript1 }</p>
                <div className="pay">가격<span>{product.price}</span></div>
            </div>
            <div className="sub_menu">
                <h2>이 상품의 연관상품입니다</h2>
                <div className="img_box">
                    <span className="sub_img">
                        <img src={product.imgSrc} alt={product.title}/>
                    </span>
                    <p>{product.title}세트</p>
                </div>
            </div>
            <div className="order">
                <button className="order_button" onClick={()=>{setOrder(true)}}>주변매장에서 주문</button>
                {
                    order && (
                    <div className='order_box'>
                        <div className='order_top'>
                            <h3>
                                <span>주문유형</span>을<br/>
                                선택해주세요!
                            </h3>
                            <button onClick={()=>{setOrder(false)}}> &times;</button>
                        </div>
                        <div className='order_menu'>
                            <button className='delivery'><span></span>배달</button>
                            <button className='pickup'><span></span>매장픽업</button>
                        </div>
                    </div>    
                    )
                }
            </div>
        </div>
    )
}

export default Burger_List;