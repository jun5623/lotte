function Product({imgsrc, title, descript}){
    return(
        <div className="img_box">
            <div>
                <img src={imgsrc} alt=""/>
            </div>
            <h3>{title}</h3>
            <p>{descript}</p>
        </div>
    )
}

export default Product;