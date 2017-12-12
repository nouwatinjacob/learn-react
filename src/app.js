console.log('App.js is running!');

const user = {
    title: 'React Tutorial',
    subtitle: 'This is just the beginning',
    options: ['Shola', 'Adebisi', 'Iwofa']
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  
  if (option) {
    user.options.push(option);
    e.target.elements.option.value = '';
  }
  submitReaction();  
};

const removeAll = () => {
  user.options.length = 0;
  submitReaction();
};

const appRoot = document.getElementById('app');

const submitReaction = () => {
  const template = (
    <div>
        <h1>{user.title}</h1>
        {user.subtitle && <p>{user.subtitle}</p>}
        {user.options.length > 0 ? <p>Here are your Options</p> : <p>No Option</p>}
        <p>{user.options.length}</p>
        <ol>
            {
              user.options.map((option) => {
                return <li key={option}>{option}</li>;
              })
            }
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
          <button onClick={removeAll}>Remove All</button>
        </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

submitReaction();

