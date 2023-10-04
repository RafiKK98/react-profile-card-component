import './App.css';

function App() {

  return (
    <div className="card">
      <div className="card-header">
        <img src="/images/bg-pattern-card.svg" alt="" />
      </div>
      <div className="card-content">
        <img src="/images/image-victor.jpg" alt="" />
        <p>Victor Crest<span> 26</span></p>
        <p>London</p>
      </div>
      <div className="card-footer">
        <div className="footer-item">
          <p className="status">80K</p>
          <small className="item-name">Followers</small>
        </div>
        <div className="footer-item">
          <p className="status">803K</p>
          <small className="item-name">Likes</small>
        </div>
        <div className="footer-item">
          <p className="status">1.4K</p>
          <p className="item-name">Photos</p>
        </div>
      </div>
    </div>
  )
}

export default App
