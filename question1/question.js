
const date = [-1, "-2", true, false, "A", 123, undefined, null, "22", 6, 1, 67, { value: "A" }]

const answer = date => 
  date
    .reduce((acc,value) => {
      if (parseInt(value) == value || parseFloat(value) == value)  
        acc.push(Number(value));

      return acc;
    },[])
    .sort((a, b) => a - b);

console.log(answer(date));
