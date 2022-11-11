import './App.scss';
import Header from './components/Header/Header'
import Container from './components/Container/Container'
import Home from './components/Home/Home'
import Feature from './components/Feature/Feature';
import CoreFeature from './components/CoreFeature/CoreFeature';
import ExistingFeature from './components/ExistingFeature/ExistingFeature'
import AppFeature from './components/AppFeature/AppFeature';
import WorkFeature from './components/WorkFeature/WorkFeature';
import Pricing from './components/Pricing/Pricing';
import ContainerItem from './components/ContainerItem/ContainerItem';
import Footer from './components/Footer/Footer';
import QuestionPricing from './components/QuestionPricing/QuestionPricing';
import Payment from './components/Payment/Payment';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container component={<ContainerItem  Component={Home}/>} isHome={true} backgroundImg={true} backgroundImg1={true} />
      <Container component={<ContainerItem Component={Feature} />} />
      <Container component={<ContainerItem Component={CoreFeature} />} noPadding={true} />
      <Container component={<ContainerItem Component={ExistingFeature} />} />
      <Container component={<ContainerItem Component={AppFeature} />} noPadding={true} />
      <Container component={<ContainerItem Component={WorkFeature} />} backgroundImg={true} backgroundImg2={true} />
      <Container component={<ContainerItem Component={Testimonial} />} />
      <Payment />
      <Container component={<ContainerItem Component={Pricing} />} backgroundImg={true} backgroundImg2={true} />
      <Container component={<ContainerItem Component={QuestionPricing} />} />
      <Container isBorder={true} component={<ContainerItem Component={Footer}  />} />
      <div className='footerText'>All right reserved - Design & Developed byRedQ, Inc</div>
    </div>
  );
}

export default App;
