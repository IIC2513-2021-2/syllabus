const rootNode = document.getElementById('root');
// const element = document.createElement('h1');
// element.textContent = 'Un título';
// rootNode.appendChild(element);

const element = React.createElement('h1', null, 'Un título');
// The following commented line would fail because we're using JSX
// without transpiling it to JS (which can be accomplished with Babel)
// const element = <h1>Un título</h1>;
ReactDOM.render(element, rootNode);
