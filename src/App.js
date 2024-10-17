import './App.css';
import InfoBlock from './Components/InfoBlock/Index'

function App() {
  const data = {
    headline:"Space Cat Adventures",
    tagline:"An epic cosmic journey",
    text:"Follow our brave space cat as it embarks on thrilling missions across the universe. From dodging asteroids to making"+ 
    "friends with alien creatures, every moment is an adventure!",
    pictureUrl:"https://s3-alpha-sig.figma.com/img/77d0/aa5c/2bad8366fc2c2ad1c5c88543874eab5d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BxTuHWEeR59hlcBiIRIYrrIOVAgkhY9MADsDLzBzXvZfmm1LPVNSsfOXxN6gyVrhR0~-a3TWJ9HR~NlgYPjmFer2sG~-LlCmKtMVTn8hX15QOL80uepbZf7-5HXUkAGRfZXtuUz6MLwujdf-OMAJ0OmbwblAClh3qg4VuxM6THkVWhJeBWqxL0Cb1KyGi8SiHDi5f6yUTYUoJ0oxOaJ7Dy-g-aUY3WgD9-cgvcm1DTkk298O13tLZi3phvSQl22Ctx2er6OgzsDIZaXwgNP-6f8jTkTuDwqogEHg5-3WaYBTKJby3vb7~g4psiJH7WlT-HtSVrE7UPmqGWJSPvQ3hQ__"
  }

  return (
    <div className='main-container'>
      <InfoBlock data={data}/>
    </div>
  );
}

export default App;
