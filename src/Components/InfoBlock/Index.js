import "./InfoBlock.css";

const Index = ({ data }) => {
  return (
    <div className="infoBlock">
      <div className="textPart">
        <h1>{data.headline}</h1>
        <h2>{data.tagline}</h2>
        <p>{data.text}</p>
      </div>
      <div className="picturePart">
      <img src={data.pictureUrl} alt="Data image"></img>
      </div>
    </div>
  );
};

export default Index;
