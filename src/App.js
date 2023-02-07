import "./App.css";
import Post from "./Post";

function App() {
  return (
    <>
      <div className="app">
        <div className="app__header">
          <img
            className="app__headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
          />
        </div>

      <Post username="ThatNiggaAli" caption="Wow, it works" imageUrl="https://parklifedc.com/wp-content/uploads/2022/10/49086603938_17de59bc78_z.jpg" />
      <Post />
      <Post />
      <Post />
      </div>

    </>
  );
}

export default App;
