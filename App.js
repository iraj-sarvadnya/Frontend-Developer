import logo from './img/logo.png';
import './App.css';
import Header from './Component/Header';
import SearchResults from './Component/Newsearch';
import Sidebar from './Component/Toggle';
import Counter from './Component/Counter';
import RocketDesign from './Component/RocketDesign';
import OverviewSlide from './Component/Overview';
import VideoPhotoGallery from './Component/VideoPhotoGallery';
import MerlinComponent from './Component/MerlinComponent';
import Footer from './Component/Footer';
import ScrollButton from './Component/ScrollTop';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Sidebar />
        <SearchResults />
      </header>
      <Counter />
      <RocketDesign />
      <OverviewSlide />
      <VideoPhotoGallery />
      <MerlinComponent />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
