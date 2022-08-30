import hongwei from "../static/img/hongwei.JPG";

const Intro = () => {
  return (
    <div className="Intro flexbox-container" id="INTRO">
      <div className="image">
        <img
          alt="A photo of Hongwei stands at the spiral stairs at JW Marriott Edmonton"
          src={hongwei}
        />
      </div>
      <div className="intro section">
        <span>
          <span className="t3">Hongwei Wang</span> (pronoun: he/him) is a
          fourth-year Computing Science student at the University of Alberta. He
          is also a current Research Assistant in Dr. Xing-dong Yang's (Simon
          Fraser University - ixLab) group and Dr. Carrie Demmans Epp's
          (University of Alberta - EdTeKLA) Group. He has a special interest in
          Human-Computer Interaction (HCI) and accessibility tools.
          <br />
          <br />
          Other than Computing Science, he is interested in Hotel Management. He
          loves to know people from the hotel industry. His favorite brand is
          Hyatt but he only has an elite status in Marriott.
          <br />
          <br />
          He is also a newbie photographer, he shoots on Fujifilm XS-10.
          <br />
          <br />
          You can reach him via email `hongwei2[at]ualberta[dot]ca`, more
          contact info underneath.
        </span>
      </div>
    </div>
  );
};

export default Intro;
