import Card from "./Card";

function App() {
  let data = require("../cards.json");

  return (
    <div className="App">
      <div className="container">
        {data.map(({ lang, url }) => {
          return <Card lang={lang} key={lang} url={url} />;
        })}
      </div>
    </div>
  );
}

export default App;
