import './Title.css'

const Title = ({title , desc}) => {
  return (
    <div className="title__container">
        <h1>{title}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default Title