module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.flat()
  let openBr = [];
  let closeBr = [];
  for (let i = 0; i < brackets.length; i++) {
    if (i % 2 == 0) {
      openBr.push(brackets[i])
    } else {
      closeBr.push(brackets[i])
    }
  }
  let stack = [];
  let arr = str.split('')
  //alert(arr)
  for (let i = 0; i < brackets.length; i++) {
    if (i % 2 == 0) {
      openBr.push(brackets[i])
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let last = stack[stack.length - 1];
    if (closeBr.includes(arr[i]) && openBr.indexOf(last) == closeBr.indexOf(arr[i])) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
}
