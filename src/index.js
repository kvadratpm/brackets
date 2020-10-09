module.exports = function check(str, bracketsConfig) {
    const open = [];
    const close = []; 
    bracketsConfig.map((elem) => {
      open.push(elem[0]);
      close.push(elem[1]);
      });
    const current = [];
    const arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
      if (open.includes(arr[i]) && close.includes(arr[i])) {
        if (!current.includes(arr[i]) && open.includes(arr[i])) {
          current.push(arr[i]);
        } else {
          const previous = current.pop();
          if (previous !== arr[i]) {
            return false;
          }
        }
      } else if (open.includes(arr[i])) {
        current.push(arr[i]);
      } else if (close.includes(arr[i])) {
          const previous = current.pop();
          if (open.indexOf(previous) !== close.indexOf(arr[i])) {
            return false;
          }
      }
    };
    return current.length === 0;
}
