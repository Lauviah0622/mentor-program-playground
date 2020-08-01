var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
  lines.push(line)
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function() {
  solve(lines)
})

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容

function solve(line) {
    // console.log(line.slice(2))
    console.log(filter(line.slice(2), e => e !== line[0]).join('\n'))
}

function filter(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if (callback(e)) result.push(e)
    }
    return result
}
