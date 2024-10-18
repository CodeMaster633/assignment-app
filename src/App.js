import './App.css';
import InfoBlock from './Components/InfoBlock/Index'

function App() {
  const data = [{
    headline:"Space Cat Adventures",
    tagline:"An epic cosmic journey",
    text:"Follow our brave space cat as it embarks on thrilling missions across the universe. From dodging asteroids to making"+ 
    "friends with alien creatures, every moment is an adventure!",
    pictureUrl:"https://s3-alpha-sig.figma.com/img/ce34/9fc3/4f77b09c2f12d072c1fc4019bb021abe?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NU~I0QgiieDy-T7XlXsoxgoLqYL1ICM2fyfDq8OACO1yh4G9CsN1dAEgEmSmodID2wzRZ9bpaYV0Vn3DROT88GYhK6QYYha1pF9vqitBMEReH8KHBPph0-XtXgngIDvq0XYMGO8EjIZ3CCxc4ry2pJurjUB99cb0MCYbCBb-NUCCJDICohS1k8cdMODU616hA~7mAZKEuuxaSn5CDI0mW4~fPj2DdsjabP~CspnZT5~0Xoi1tO65BMfbiI5MdK5AjpVcg0UxbQ6OMfVswYX-h9QHwVQv-3MBTaA-mH6we~0LzNxZalckS7ZeM2zQq4o4ojAMeXrLkQSoZkIFqH2rfw__"
  },{
    headline:"Galactic Paws: The Space Cat Chronicles",
    tagline:"One paw at a time!",
    text:"From saving space stations from malfunctioning AI systems to exploring uncharted planets, Captain Whiskers"+ 
    "proves that even in the vastness of the universe, curiosity is a cat’s greatest weapon. Armed with his trusty "+
    "laser claw and accompanied by a crew of quirky robotic sidekicks, Whiskers is on a mission to protect the galaxy, one paw at a time.",
    pictureUrl:"https://s3-alpha-sig.figma.com/img/77d0/aa5c/2bad8366fc2c2ad1c5c88543874eab5d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BxTuHWEeR59hlcBiIRIYrrIOVAgkhY9MADsDLzBzXvZfmm1LPVNSsfOXxN6gyVrhR0~-a3TWJ9HR~NlgYPjmFer2sG~-LlCmKtMVTn8hX15QOL80uepbZf7-5HXUkAGRfZXtuUz6MLwujdf-OMAJ0OmbwblAClh3qg4VuxM6THkVWhJeBWqxL0Cb1KyGi8SiHDi5f6yUTYUoJ0oxOaJ7Dy-g-aUY3WgD9-cgvcm1DTkk298O13tLZi3phvSQl22Ctx2er6OgzsDIZaXwgNP-6f8jTkTuDwqogEHg5-3WaYBTKJby3vb7~g4psiJH7WlT-HtSVrE7UPmqGWJSPvQ3hQ__"
  }
]

  return (
    <div className='main-container'>
      <InfoBlock data={data[0]} />
      <InfoBlock data={data[1]} mirrored={true} colored={true}/>
    </div>
  );
}

export default App;
