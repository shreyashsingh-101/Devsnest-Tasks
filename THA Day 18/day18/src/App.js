import "./App.css";

const BoxW = () => {
  return <div className="boxw"></div>;
};

const BoxB = () => {
  return <div className="boxb"></div>;
};

const RowB = () => {
  let boxes = [];
  for (let i = 0; i < 8; i++) {
    if (i % 2 === 0) boxes.push(<BoxB></BoxB>);
    else boxes.push(<BoxW></BoxW>);
  }

  return <div className="row">{boxes}</div>;
};

const RowW = () => {
  let boxes = [];
  for (let i = 0; i < 8; i++) {
    if (i % 2 === 0) boxes.push(<BoxW></BoxW>);
    else boxes.push(<BoxB></BoxB>);
  }

  return <div className="row">{boxes}</div>;
};

let rows = [];

for (let i = 0; i < 8; i++) {
  if (i % 2 === 0) rows.push(<RowB></RowB>);
  else rows.push(<RowW></RowW>);
}

function App() {
  return (
    <div className="App">
      <div className="board">{rows}</div>
    </div>
  );
}

export default App;
