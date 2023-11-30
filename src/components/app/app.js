import "./app.scss";
import Header from "../header/Header";
import Footer from "../footer/footer";
import Buttons from "../button/button";


const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="container"></div>
      </main>
      <Footer />
      <Buttons />
    </div>
  );
};

export default App;
