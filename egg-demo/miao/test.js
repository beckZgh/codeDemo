const func = curry((a, b, c) => [a, b, c])

console.log(func(1, 2, 3))
console.log(func(1)(2)(3))
const arr1 = func(1)(2)
const arr3 = arr1(3)
console.log(arr3)

function curry(fn) {
  const length = fn.length
  let _args = []

  const invoke = (...args) => {
    _args = _args.concat(args)

    if (_args.length === length) {
      const val = fn(..._args)
      _args = []
      return val
    }

    return invoke
  }

  return invoke
}
