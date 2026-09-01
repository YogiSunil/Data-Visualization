// ============================================================
// ARROW FUNCTION PRACTICE
// ============================================================
//
// Arrow functions are a shorter way to write functions. The
// syntax shrinks in steps depending on parameters and body.
//
// GOAL: get every check below to print ✅
//
// HOW TO RUN:   node 01-arrow-function-practice.js
//
// PAIR RULE: switch driver at every numbered section.
// Predict first, run second, fix third.
// ============================================================


// ---- test helper -------------------------------------------
// You do not need to edit this. It compares what your code
// returned against the expected answer and prints ✅ or ❌.

const check = (label, actual, expected) => {
	const pass = JSON.stringify(actual) === JSON.stringify(expected)
	if (pass) {
		console.log(`✅ ${label}`)
	} else {
		console.log(`❌ ${label} — got ${JSON.stringify(actual)}, want ${JSON.stringify(expected)}`)
	}
}


// ============================================================
// PART 1 — read the 6 forms, predict, then run
// ============================================================
//
// Below are the same idea written 6 ways, shrinking each time.
// BEFORE running the file, write next to each line what you
// think it prints. Then run and compare.

console.log('1 ------------------------------')
// A regular function.
function world() {
	console.log('World')
}
world() // predict: "World"

console.log('2 ------------------------------')
// An arrow function. `const name = (params) => { body }`
const hello = () => {
	console.log('Hello')
}
hello() // predict: "Hello"

console.log('3 ------------------------------')
// Parameters go in the ( ).
const foo = (x, y) => {
	console.log(x * y)
}
foo(4, 3) // predict: 12

console.log('4 ------------------------------')
// One expression body: drop the { } AND the return.
// The expression's value is returned automatically.
const bar = (x, y) => x / y
console.log(bar(3, 4)) // predict: 0.75

console.log('5 ------------------------------')
// Exactly one parameter: the ( ) around it is optional.
const double = (x) => x * 2
console.log(double(3)) // predict: 6

console.log('6 ------------------------------')
// No parameters: you MUST keep the empty ( ).
const pi = () => 3.14
console.log(pi()) // predict: 3.14

// GOTCHA CHECK: what does this return, and why?
//   const makeObj = () => { name: 'Ada' }
// write your answer here:
// undefined — { } after => opens a function body, so `name: 'Ada'`
// is parsed as a labeled statement, not an object literal.
//
// (Hint: { } after => is read as a function body, not an
//  object. To return an object literal, wrap it: => ({ ... }))


// ============================================================
// PART 2 — convert to arrow functions AND fix the bugs
// ============================================================
//
// Each function below is broken. Rewrite it as an arrow
// function (shortest form that fits) and fix the bug so the
// check passes.

console.log('7 ------------------------------')

// TODO: convert `greet` to an arrow function. It should RETURN
// 'hello' (the original never logged its result — a check does
// that for you now).
const greet = () => 'hello'

check('7 greet returns hello', greet(), 'hello')
check('7 greet is an arrow fn', greet.toString().includes('=>'), true)


console.log('8 ------------------------------')

// BUG: `str.split()` with no argument puts the whole string in
// one slot, so nothing gets dashed.
// TODO: convert to an arrow function and fix it so every space
// becomes a single dash.
const dashify = (str) => str.split(' ').join('-')

check('8 dashify', dashify('good luck out there'), 'good-luck-out-there')


console.log('9 ------------------------------')

// `choose` works. It is random, so we cannot check an exact
// value — instead we check the result is one of the options.
// TODO: convert it to an arrow function (single expression).
const choose = (arr) => arr[Math.floor(Math.random() * arr.length)]

const menu = ['Apples', 'Bananas', 'Pancakes']
check('9 choose in menu', menu.includes(choose(menu)), true)
check('9 choose is an arrow fn', choose.toString().includes('=>'), true)


console.log('10 ------------------------------')

// BUG: this multiplies `y` twice and never uses `z`.
// TODO: convert to an arrow function and fix it to return the
// VOLUME of a box: length * width * height.
const boxVolume = (x, y, z) => x * y * z

check('10 boxVolume', boxVolume(5, 6, 7), 210)


console.log('11 ------------------------------')

// BUG: box SURFACE AREA, not volume. A box has 6 faces:
//   2 * (x*y + y*z + x*z)
// TODO: write `boxSurface` as an arrow function that returns it.
const boxSurface = (x, y, z) => 2 * (x * y + y * z + x * z)

check('11 boxSurface', boxSurface(2, 3, 4), 52)


// ============================================================
// PART 3 — write your own
// ============================================================

console.log('12 ------------------------------')

// TODO: write `greeting` as an arrow function. It takes a name
// and a prefix and RETURNS the string:
//   'Good morning <prefix> <name>'
// example: greeting('Mustard', 'Mr.') -> 'Good morning Mr. Mustard'
const greeting = (name, prefix) => `Good morning ${prefix} ${name}`

check('12 greeting', greeting('Mustard', 'Mr.'), 'Good morning Mr. Mustard')


console.log('13 ------------------------------')

// STRETCH: `applyTwice(fn, value)` — return the result of
// calling `fn` on `value`, then calling `fn` on THAT result.
// example: applyTwice((n) => n + 3, 10) -> 16
const applyTwice = (fn, value) => fn(fn(value))

check('13 applyTwice', applyTwice((n) => n + 3, 10), 16)
check('13 applyTwice strings', applyTwice((s) => s + '!', 'hi'), 'hi!!')
