// ============================================================
// MAP / FILTER / REDUCE PRACTICE
// ============================================================
//
// These three array methods all take a callback. Unlike forEach,
// they RETURN something:
//
//   map(cb)    -> new array, same length, each item transformed
//   filter(cb) -> new array, only items where cb(item) is truthy
//   reduce(cb, start) -> ONE value, built up across the array
//
// None of them change the original array.
//
// GOAL: get every check below to print ✅
// HOW TO RUN:  node 03-map-filter-reduce-practice.js
//
// PAIR RULE: switch driver at every numbered section.
// Predict first, run second, fix third.
// ============================================================


// ---- test helper (do not edit) ----------------------------
const check = (label, actual, expected) => {
	const pass = JSON.stringify(actual) === JSON.stringify(expected)
	if (pass) {
		console.log(`✅ ${label}`)
	} else {
		console.log(`❌ ${label} — got ${JSON.stringify(actual)}, want ${JSON.stringify(expected)}`)
	}
}


console.log('1 --- map ------------------------')

const prices = [10, 20, 30, 40]

// PREDICT: what is `prices` after the line below runs — changed
// or unchanged? write your answer:
// unchanged — map returns a NEW array, it never mutates the original.
const withTax = prices.map((p) => p * 1.1)
check('1a map keeps original intact', prices, [10, 20, 30, 40])

// TODO: use map to build `labels` — each price as a string with
// a leading $:  '$10', '$20', '$30', '$40'
const labels = prices.map((p) => `$${p}`)

check('1b labels', labels, ['$10', '$20', '$30', '$40'])

// TODO: use map on `names` to build `initials` — first letter of
// each name, uppercased.
const names = ['ada', 'grace', 'linus', 'bjarne']
const initials = names.map((name) => name[0].toUpperCase())

check('1c initials', initials, ['A', 'G', 'L', 'B'])


console.log('2 --- filter --------------------')

const nums = [4, 15, 8, 23, 42, 16, 9]

// TODO: use filter to keep only numbers greater than 10.
const big = nums.filter((n) => n > 10)

check('2a big', big, [15, 23, 42, 16])

// TODO: use filter to keep only the EVEN numbers.
const evens = nums.filter((n) => n % 2 === 0)

check('2b evens', evens, [4, 8, 42, 16])

// TODO: use filter on `words` to keep only words 4 letters or
// longer.
const words = ['go', 'code', 'a', 'arrow', 'js', 'callback']
const long = words.filter((w) => w.length >= 4)

check('2c long words', long, ['code', 'arrow', 'callback'])


console.log('3 --- reduce --------------------')

// reduce walks the array carrying an accumulator. The callback
// gets (accumulator, item) and returns the next accumulator.
// The second argument to reduce is the STARTING accumulator.
//
//   [1,2,3].reduce((acc, n) => acc + n, 0)
//   step 1: acc=0, n=1 -> 1
//   step 2: acc=1, n=2 -> 3
//   step 3: acc=3, n=3 -> 6   ==> 6

const scores = [8, 5, 9, 7, 6]

// BUG: no starting value is passed, and the callback forgets to
// add `n`.
// TODO: fix it to return the SUM of scores.
const total = scores.reduce((acc, n) => acc + n, 0)

check('3a total', total, 35)

// TODO: use reduce to find the LARGEST value in `scores`.
// HINT: start from -Infinity, return the bigger of acc and n.
const highest = scores.reduce((acc, n) => (n > acc ? n : acc), -Infinity)

check('3b highest', highest, 9)

// TODO: use reduce to count how many times each fruit appears.
// Build an object like { apple: 2, pear: 1, plum: 3 }.
// HINT: start from {}. Each step, bump acc[fruit] (default 0).
const fruits = ['apple', 'plum', 'pear', 'plum', 'apple', 'plum']
const counts = fruits.reduce((acc, fruit) => {
	acc[fruit] = (acc[fruit] || 0) + 1
	return acc
}, {})

check('3c counts', counts, { apple: 2, plum: 3, pear: 1 })


console.log('4 --- chain them ----------------')

// map, filter, and reduce each return an array or value, so you
// can chain them left to right.

const cart = [
	{ name: 'pen', price: 2, qty: 5 },
	{ name: 'mug', price: 8, qty: 0 },
	{ name: 'book', price: 12, qty: 2 },
	{ name: 'lamp', price: 20, qty: 1 },
]

// TODO: in ONE chained expression:
//   1. filter to items actually in stock (qty > 0)
//   2. map each to its line total (price * qty)
//   3. reduce to the grand total
const grandTotal = cart
	.filter((item) => item.qty > 0)
	.map((item) => item.price * item.qty)
	.reduce((acc, lineTotal) => acc + lineTotal, 0)

check('4 grand total', grandTotal, 54)


console.log('5 --- build your own ------------')

// You wrote forEvery in 02. Same idea here — no built-ins.

// TODO: mapEvery(arr, cb) -> new array of cb(item, index) for
// each item. Do not use arr.map().
const mapEvery = (arr, cb) => {
	const result = []
	for (let i = 0; i < arr.length; i++) {
		result.push(cb(arr[i], i))
	}
	return result
}

check('5a mapEvery', mapEvery([1, 2, 3], (n) => n * 10), [10, 20, 30])

// TODO: reduceEvery(arr, cb, start) -> single value, same rules
// as reduce. Do not use arr.reduce().
const reduceEvery = (arr, cb, start) => {
	let acc = start
	for (let i = 0; i < arr.length; i++) {
		acc = cb(acc, arr[i])
	}
	return acc
}

check('5b reduceEvery sum', reduceEvery([1, 2, 3, 4], (acc, n) => acc + n, 0), 10)
check('5c reduceEvery via mapEvery not required', reduceEvery(['a', 'b', 'c'], (acc, s) => acc + s, ''), 'abc')
