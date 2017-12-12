console.log('App.js is running!');

const fullName = 'Nouwatin Jacob';
let firstName;
const getFirstName = (fullName) => {
   return firstName = fullName.split(' ')[0];
};
console.log(getFirstName(fullName));

const multiplier = {
    numbers : [2,5,7,6,4,3,9,10],
    multiplyBy : 4,
    multiply() {
        return this.numbers.map((num) => this.multiplyBy * num);
    }
};
console.log(multiplier.multiply());

const user = {
    title: 'React Tutorial',
    subtitle: 'This is just the beginning',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{user.title}</h1>
        {user.subtitle && <p>{user.subtitle}</p>}
        {user.options.length > 0 ? <p>Here are your Options</p> : <p>No Option</p>}
        <ol>
            <li>Check my mail</li>
            <li>Read the unread mails</li>
            <li>Take action on the read mails</li>
        </ol>
    </div>
);
let count = 0;
const minusOne = () => {
    count--;
    renderCounter();
};

const addCount = () => {
    count++;
    renderCounter();
};

const reset = () => {
    count = 0;
    renderCounter();
}

const appRoot = document.getElementById('app');

const renderCounter = () =>{
    const templateTwo = (
        <div>
            <h1>Nouwatin Jacob</h1>
            <p>Age: 32</p>
            <p>Location: 15, Oyedele street, Liasu Road</p>
            <h1>Count: {count}</h1>
            <button onClick={addCount}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounter();
