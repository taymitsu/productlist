import { nameAndCount } from './data';
import './CategoryButtons.css'

function CategoryButtons(props) {
  const { category, onClick } = props

  return(
    <div className="CategoryButtons">
      {nameAndCount.map(obj => {
        const className = obj.name === category ? 'selected' : ' '
        return (
          <button 
            className={className}
            onClick={() => onClick(obj.name)}
          >
            {obj.name}
            <span> {obj.count} </span>
          </button>
        )
      })}
    </div>
  )
}

export default CategoryButtons;