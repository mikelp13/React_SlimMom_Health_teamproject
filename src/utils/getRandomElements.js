 const getRandomElements = (array)=>{
let result = [];

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  while (result.length !== 5) {
    let index = getRandomInt(array.length);    
    result.push(array[index]);

    result = result.filter((item, idx, arr) => arr.indexOf(item) === idx);
  }

  return result
}

export default getRandomElements;

