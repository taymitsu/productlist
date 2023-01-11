import data from './data.json'

export default data

//console.log(data[0])

const allCategories = data.map(obj => obj.category)

//REMOVE DUPLICATES WITH .reduce (or set)
const categors = allCategories.reduce((acc, cat) => {
  acc[cat] = 0
  return acc //always return accumulator 
}, {})

const reduceCategories = Object.keys(categors)

const categoryWithCount =  allCategories.reduce ((acc, cat) => {
  if(acc[cat] === undefined) {
    acc[cat] = 1
  } else {
    acc[cat] += 1
  }
  return acc //always return accumulator 
}, {})

export {
  allCategories,
  reduceCategories,
  categoryWithCount
}