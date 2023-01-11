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

//SHOW COUNT FOR EACH CATEGORY
const categoryWithCount =  allCategories.reduce ((acc, cat) => {
  if(acc[cat] === undefined) {
    acc[cat] = 1
  } else {
    acc[cat] += 1
  }
  return acc //always return accumulator 
}, {})

//DISPLAY NAME AND COUNT, seperate 
const nameAndCount = reduceCategories.map(name => {
  return { name, count: categoryWithCount[name] } //same as { name : name }
})

export {
  allCategories,
  reduceCategories,
  categoryWithCount,
  nameAndCount
}