import Myheader from "./Myheader";
// import "./App.css";
import Counter from "./Counter";
import Container from "./Container";

function App() {

  const counterProps ={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
  }
  return (
    <Container >
      <div className="App">
        <Myheader />
        <header className="App-header">
          <h2>안녕리액트</h2>
          <p id="bold_text">hi</p>
          <Counter {...counterProps}/>
        </header>
      </div>
    </Container>
  );
}

export default App;
