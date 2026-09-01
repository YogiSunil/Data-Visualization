// ============================================================
// CALLBACK + ARROW FUNCTION PRACTICE
// ============================================================
//
// A callback is a function you pass as an argument to another
// function. The other function calls it back for you. Callbacks
// are everywhere in JavaScript: timers, array methods, event
// handlers, network requests.
//
// GOAL: get every check below to print ✅
//
// HOW TO RUN:   node 02-callback-practice.js
//
// PAIR RULE: switch driver at every numbered section.
// Predict first, run second, fix third.
// ============================================================


// ---- test helper -------------------------------------------
// You do not need to edit this. It compares what your code
// produced against the expected answer and prints ✅ or ❌.

const check = (label, actual, expected) => {
	const pass = JSON.stringify(actual) === JSON.stringify(expected)
	if (pass) {
		console.log(`✅ ${label}`)
	} else {
		console.log(`❌ ${label} — got ${JSON.stringify(actual)}, want ${JSON.stringify(expected)}`)
	}
}


// ============================================================
// WARM UP — diagnose the bug (no rewriting, just find it)
// ============================================================
//
// Each snippet below is meant to run a callback once. Each is
// broken in a different, very common way. In a comment next to
// each one, write WHAT is wrong. Then fix it so it logs "run".

// A)
// setTimeout(console.log('run'), 100)
// your diagnosis: console.log('run') is CALLED immediately and its
// return value (undefined) is passed as the callback, so it runs
// once now and again never — 'run' logs right away, not after 100ms.

// B)
// const later = () => console.log('run')
// setTimeout(later(), 100)
// your diagnosis: later() is invoked immediately (note the parens),
// passing its return value (undefined) as the callback. Use `later`
// without calling it: setTimeout(later, 100)

// C)
// [1].forEach(() => console.log)
// your diagnosis: the callback returns the console.log function
// reference but never calls it. Needs () => console.log('run')


console.log('1 ------------------------------')

// PREDICT: three sections below all call setTimeout. Before you
// run the file, write the order you expect these lines to print:
//   "1 ---", "2 ---", "3 ---", "Example 1 - one second later",
//   "printed 3 seconds later"
//
// your prediction:
// "1 ---", "2 ---", "3 ---" print first (synchronous), then
// "printed 3 seconds later"... wait no — "Example 1" fires at 1000ms
// and "printed 3 seconds later" fires at 3000ms, so the order is:
// "1 ---", "2 ---", "3 ---", "Example 1 - one second later",
// "printed 3 seconds later"
//
// (Surprised? That is the point. setTimeout does not block. The
// callback is parked until the call stack is empty.)

// TODO: this setTimeout uses a regular function. Change the
// callback to an arrow function. Behavior stays the same.

setTimeout(() => {
	console.log('Example 1 - one second later')
}, 1000)


console.log('2 ------------------------------')

// TODO: call setTimeout yourself. Use an arrow function callback
// that logs "printed 3 seconds later". Delay: 3000 ms.

setTimeout(() => {
	console.log('printed 3 seconds later')
}, 3000)


console.log('3 ------------------------------')

// forEach runs its callback once per item in the array, passing
// that item in as the first argument.

const numbers = [2, 3, 5, 7, 11]

numbers.forEach((n) => {
	// this arrow function is the callback. n is one item.
	console.log(n)
})

// TODO: use forEach to build `doubled` — each number times 2.
// Push each result into the array, then the check runs.
const doubled = []

numbers.forEach((n) => doubled.push(n * 2))

check('3a doubled', doubled, [4, 6, 10, 14, 22])

// THINK: forEach always returns undefined, so you needed an
// outside array to collect results. Which array method is built
// for "transform every item into a new array"? Write it here:
// map

// TODO: use forEach to fill `evens` with only the even numbers.
// A number is even when  n % 2 === 0
const evens = []

numbers.forEach((n) => {
	if (n % 2 === 0) evens.push(n)
})

check('3b evens', evens, [2])


console.log('4 ------------------------------')

// forEach actually passes THREE arguments to the callback:
//   item, index, array
// You take only the ones you need.
// docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

numbers.forEach((item, index, arr) => {
	console.log(item, index, arr)
})

// TODO: fill `byIndex` — each value multiplied by its own index.
//   numbers[0] * 0, numbers[1] * 1, numbers[2] * 2, ...
const byIndex = []

numbers.forEach((item, index) => byIndex.push(item * index))

check('4 byIndex', byIndex, [0, 3, 10, 21, 44])


console.log('5 ------------------------------')

const names = ['Andy', 'Boba', 'Kris', 'Dana']

// TODO: fill `plain` with each name, unchanged, using forEach.
const plain = []

names.forEach((name) => plain.push(name))

check('5a plain', plain, ['Andy', 'Boba', 'Kris', 'Dana'])

// TODO: fill `numbered` so each entry is "<index + 1>) <name>":
//   "1) Andy", "2) Boba", "3) Kris", "4) Dana"
const numbered = []

names.forEach((name, index) => numbered.push(`${index + 1}) ${name}`))

check('5b numbered', numbered, ['1) Andy', '2) Boba', '3) Kris', '4) Dana'])

// TODO: use forEach + setTimeout together to print each name on
// its own line, staggered by 1200 ms — Andy at 1200, Boba at
// 2400, Kris at 3600, Dana at 4800.
// HINT: use the index to compute the delay.

names.forEach((name, index) => {
	setTimeout(() => console.log(name), (index + 1) * 1200)
})


console.log('6 ------------------------------')

// THIS IS WHY ARROW FUNCTIONS MATTER FOR CALLBACKS.
//
// A regular function gets its own `this`. An arrow function does
// not — it borrows `this` from where it was defined.

const timer = {
	seconds: 0,

	// broken: the callback is a regular function, so inside it
	// `this` is NOT the timer object.
	startBroken() {
		setTimeout(function () {
			this.seconds += 1
			console.log('broken:', this.seconds)
		}, 100)
	},

	// TODO: write startFixed(). Same body, but make it actually
	// increment timer.seconds and log 1. Change ONE thing.
	startFixed() {
		setTimeout(() => {
			this.seconds += 1
			console.log('fixed:', this.seconds)
		}, 100)
	},
}

timer.startBroken() // watch this print "broken: NaN"

// TODO: after you write startFixed, uncomment:
setTimeout(() => timer.startFixed(), 200)
setTimeout(() => check('6 this binding', timer.seconds, 1), 400)


console.log('7 ------------------------------')

// Real world: a callback that runs "later", after fake network
// delay. This stand-in for fetch takes an id and a callback.

const fetchUser = (id, callback) => {
	setTimeout(() => {
		callback({ id, name: `User${id}` })
	}, 200)
}

// TODO: fetch user 1. In the callback, push user.name into
// `oneUser`, then the check runs (also delayed, so it sees it).
const oneUser = []

fetchUser(1, (user) => oneUser.push(user.name))

setTimeout(() => check('7a one user', oneUser, ['User1']), 500)

// TODO: fetch users 1, 2, 3. Use forEach over [1, 2, 3].
// Push each name into `manyUsers`.
const manyUsers = []

;[1, 2, 3].forEach((id) => {
	fetchUser(id, (user) => manyUsers.push(user.name))
})

setTimeout(() => check('7b many users', manyUsers.sort(), ['User1', 'User2', 'User3']), 800)

// STRETCH: chain three setTimeouts to print a countdown, one
// number per second:  "3"  then  "2"  then  "1"  then  "Go".
// Notice how nesting callbacks inside callbacks gets ugly fast.
// That pain is why Promises and async/await exist — next lesson.




console.log('8 ------------------------------')

// Imagine forEach did not exist. Build it.

// TODO: write forEvery(arr, callback). For each item in arr,
// call callback(item, index, arr).
// DO NOT use arr.forEach() to solve this.

const forEvery = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i, arr)
	}
}

// harness: your forEvery must behave exactly like native forEach
const fromMine = []
const fromNative = []
forEvery([10, 20, 30], (v, i) => fromMine.push([v, i]))
;[10, 20, 30].forEach((v, i) => fromNative.push([v, i]))
check('8 forEvery matches forEach', fromMine, fromNative)

// STRETCH A: write mapClone(arr, callback) — returns a NEW array
// of each callback return value. Do not use arr.map().
// STRETCH B: write filterClone(arr, callback) — returns a NEW
// array of items where callback(item) is truthy. Do not use
// arr.filter().

// const mapClone = (arr, callback) => {}
// const filterClone = (arr, callback) => {}
// check('S-A mapClone', mapClone([1, 2, 3], (n) => n * 10), [10, 20, 30])
// check('S-B filterClone', filterClone([1, 2, 3, 4], (n) => n % 2 === 0), [2, 4])
