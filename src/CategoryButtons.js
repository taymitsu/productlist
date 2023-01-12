import {nameAndCount} from './data';

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