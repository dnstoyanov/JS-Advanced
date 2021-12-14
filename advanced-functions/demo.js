users = [ 
    {name: 'Time', age: 25},
    {name: 'Sam', age: 25},
    {name: 'Peter', age: 25}, 
]


getName = (users) => users.name;

usernames = users.map(getName);
console.log(usernames)