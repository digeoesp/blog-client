import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      {/* comment */}
      <img
        className="headerImg"
        src="https://eyesofodysseus.files.wordpress.com/2013/01/earth-reflection.jpg"
        alt=""
      />
    </div>
  );
}