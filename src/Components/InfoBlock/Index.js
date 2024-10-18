import "./InfoBlock.css";

const Index = ({ data, mirrored }) => {
  return (
    <div className={`infoBlock ${mirrored ? 'mirrored' : '' }`}>
      <div className="picturePart">
        <img src={data.pictureUrl} alt="Data image"></img>
      </div>
      <div className="textPart">
        <h1>{data.headline}</h1>
        <h2>{data.tagline}</h2>
        <p>{data.text}</p>
      </div>
      
    </div>
  );
};

export default Index;
