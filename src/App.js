import logo from './logo.svg';
import './App.css';
import Header from './Common/Header';
import Footer from './Footer/Footer';
import Dashboard from './Common/Dashboard';
import LineChart from './Charts/LineChart';
import BarChart from './Charts/BarChart';
import PieChart from './Charts/PieChart';
import Chartsdisplay from './Common/Chartsdisplay';
import HeadSection from './First/HeadSection';

function App() {
  return (
    <div className="App">

    <Header />
    <HeadSection />
    <Dashboard />
    <Chartsdisplay />
    {/* <LineChart />
    <BarChart /> */}
    {/* <PieChart /> */}
    <Footer />

    </div>
  );
}

export default App;
