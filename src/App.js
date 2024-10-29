import './App.css';
import InfoBlock from './Components/InfoBlock/Index';
import useFetchData from './Hooks/useFetchData';
import { useState, useEffect } from 'react';

function App() {
  const spaceCatsData = [
    {
      headline: "Space Cat Adventures",
      tagline: "An epic cosmic journey",
      text: "Follow our brave space cat as it embarks on thrilling missions across the universe. From dodging asteroids to making friends with alien creatures, every moment is an adventure!",
      pictureUrl: "https://s3-alpha-sig.figma.com/img/ce34/9fc3/4f77b09c2f12d072c1fc4019bb021abe?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NU~I0QgiieDy-T7XlXsoxgoLqYL1ICM2fyfDq8OACO1yh4G9CsN1dAEgEmSmodID2wzRZ9bpaYV0Vn3DROT88GYhK6QYYha1pF9vqitBMEReH8KHBPph0-XtXgngIDvq0XYMGO8EjIZ3CCxc4ry2pJurjUB99cb0MCYbCBb-NUCCJDICohS1k8cdMODU616hA~7mAZKEuuxaSn5CDI0mW4~fPj2DdsjabP~CspnZT5~0Xoi1tO65BMfbiI5MdK5AjpVcg0UxbQ6OMfVswYX-h9QHwVQv-3MBTaA-mH6we~0LzNxZalckS7ZeM2zQq4o4ojAMeXrLkQSoZkIFqH2rfw__",
    },
    {
      headline: "Galactic Paws: The Space Cat Chronicles",
      tagline: "One paw at a time!",
      text: "From saving space stations from malfunctioning AI systems to exploring uncharted planets, Captain Whiskers proves that even in the vastness of the universe, curiosity is a cat’s greatest weapon. Armed with his trusty laser claw and accompanied by a crew of quirky robotic sidekicks, Whiskers is on a mission to protect the galaxy, one paw at a time.",
      pictureUrl: "https://s3-alpha-sig.figma.com/img/77d0/aa5c/2bad8366fc2c2ad1c5c88543874eab5d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BxTuHWEeR59hlcBiIRIYrrIOVAgkhY9MADsDLzBzXvZfmm1LPVNSsfOXxN6gyVrhR0~-a3TWJ9HR~NlgYPjmFer2sG~-LlCmKtMVTn8hX15QOL80uepbZf7-5HXUkAGRfZXtuUz6MLwujdf-OMAJ0OmbwblAClh3qg4VuxM6THkVWhJeBWqxL0Cb1KyGi8SiHDi5f6yUTYUoJ0oxOaJ7Dy-g-aUY3WgD9-cgvcm1DTkk298O13tLZi3phvSQl22Ctx2er6OgzsDIZaXwgNP-6f8jTkTuDwqogEHg5-3WaYBTKJby3vb7~g4psiJH7WlT-HtSVrE7UPmqGWJSPvQ3hQ__",
    },
  ];

  const { data: dogData, loading } = useFetchData('https://random.dog/woof.json?ref=apilist.fun');
  const [modifiedDogData, setModifiedDogData] = useState(null);

  useEffect(() => {
    if (dogData) {
      setModifiedDogData({
        ...dogData,
        pictureUrl: dogData.url,
        headline: "Dogs are taking over",
        tagline: "Humans have no chance",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      });
    }
  }, [dogData]);

  return (
    <div className="main-container">
      <InfoBlock data={spaceCatsData[0]} />
      <InfoBlock data={spaceCatsData[1]} mirrored={true} colored={true} />
      {loading ? (
        <p>Indlæser data...</p>
      ) : (
        modifiedDogData && <InfoBlock data={modifiedDogData} />
      )}
    </div>
  );
}

export default App;
