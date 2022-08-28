import hongwei from "../static/img/hongwei.JPG";

const Intro = () => {
  return (
    <div className="Intro flexbox-container">
      <div className="image">
        <img
          alt="A photo of Hongwei stands at the spiral stairs at JW Marriott Edmonton"
          src={hongwei}
        />
      </div>
      <div className="intro section">
        <span>
          <span className="t2">Hongwei Wang</span> (pronoun: he/him) is a fourth
          year Computing Science student at University of Alberta. He is also a
          current Research Assistant in Dr. Xing-dong Yang's (SFU) group and in
          Dr. Carrie Demmans Epp's (UAlberta) Group. He has special interest in
          Human Computer Interaction (HCI) and accessibility tools.
          <br />
          <br />
          Other than Computing Science, he is interested in Hotel Management and
          Psychology. He loves to know people from hotel industry. His favorite
          brand is Hyatt but he only has elite status in Marriott.
          <br />
          <br />
          He is also a newbie photographer, he shoot on Fujifilm XS-10.
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
