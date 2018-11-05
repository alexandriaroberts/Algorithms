//return the filtered array using .includes method and get the arguments using spread operator (mdn)
let destroyer = (arr, ...args) => arr.filter( i => !args.includes(i));