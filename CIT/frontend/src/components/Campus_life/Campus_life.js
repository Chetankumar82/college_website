import "./Campus.css";
import campusimage from "./../../assets/images/campus_life.JPG";
import pic from "./../../assets/images/image_camouslife.png";
const Campus_life = () => {
  return (
    <div className="campus">
      <div className="first">
        <h2 className="title">CAMPUS LIFE</h2>
        <img alt="image" src={pic} />
        <div className="desc">
          <h1>UNIVERSITY IS THE BEST TIME OF YOUR LIFE.</h1>
          <p>
            EXPLORE UNIVERSITY'S 10+ COURSES ACROSS VARIOUS SPECIALISATIONS THAT
            PROVOKE INTELLECTUAL AND INTUITIVE LEARNING AMONG STUDENTS.
          </p>
        </div>
      </div>
      <div className="second">
        <img alt="img" src={campusimage} className="campusimage" />
      </div>
    </div>
  );
};

export default Campus_life;
