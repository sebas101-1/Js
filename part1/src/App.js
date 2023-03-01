import logo from './logo.svg';
import './App.css';
function Hello(props){
  return(
  <div>
    <p>A website By <a href="https://github.com/sebas101-1">{props.name}</a></p>
  </div>
  );
}
function App() {
  return (
    <>
    <p>Hello React</p>
    <Hello name="Sebastien" />

    </>
  );
}

export default App;
