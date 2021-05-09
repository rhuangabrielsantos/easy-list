import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function Home() {
  return (
    <div className="h-screen bg-aro flex flex-col items-center justify-between">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
