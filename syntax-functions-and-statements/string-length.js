function stringLength(param1, param2, param3) {

    let totalLength = param1.length + param2.length + param3.length;
    let avgLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(avgLength);

}

stringLength('chocolate', 'ice cream', 'cake')