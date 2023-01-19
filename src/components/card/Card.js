import  './Card.scss'

const Card = ({children, cardClass}) => {
  return (
    <div className='card '>
        {children} {cardClass}
    </div>
  )
}

export default Card