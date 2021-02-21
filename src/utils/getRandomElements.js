 const getRandomElements = (array, num)=>{
let result = [];

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  while (result.length !== num) {
    let index = getRandomInt(array.length);
    result.push(array[index]);

    result = result.filter((item, idx, arr) => arr.indexOf(item) === idx);
  }

  return result
}

export default getRandomElements;

