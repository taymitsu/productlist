import {nameAndCount} from './data';
import './CategoryButtons.css'

function CategoryButtons() {
  return(
    <div classname="CategoryButtons">
      {nameAndCount.map(obj => {
        return (
          <button>
            {obj.name}
            <span> {obj.count} </span>
          </button>
        )
      })}
    </div>
  )
}

export default CategoryButtons;