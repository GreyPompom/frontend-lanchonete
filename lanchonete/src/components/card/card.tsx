import './card.css'

interface CardProps{
price:number,
title:string,
image:string

}

export function Card({price, image, title}: CardProps){
    return(
        <div className="card">
             {/* colocar esse {valor} para passar alor referencia */}
            <img src={image}/>
            <h2 > {title}</h2>
            <p><b>Preço: R$</b>{price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>
    )
}