const obj = {
    id: 10,
    author: 'Ivan',
    content: 'FFS',
    upvotes: 5, 
    downvotes: 10
}

console.log(obj)

function test() {
    this.upvotes += 10;
}

test.call(obj);

console.log(obj)