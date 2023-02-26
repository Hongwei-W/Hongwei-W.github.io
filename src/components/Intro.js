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
          fourth-year Computing Science student at the{" "}
          <a href="https://www.ualberta.ca/index.html">University of Alberta</a>{" "}
          and is currently working for{" "}
          <a href="https://www.sap.com/index.html">SAP Inc.</a> as a software
          developer. He was also a current Research Assistant in{" "}
          <a href="https://www.sfu.ca/~xingdong/">Dr. Xing-dong Yang's</a>{" "}
          (Simon Fraser University -{" "}
          <a href="https://ixlab.cs.sfu.ca/">ixLab</a>) group and{" "}
          <a href="https://apps.ualberta.ca/directory/person/demmanse">
            Dr. Carrie Demmans Epp's
          </a>{" "}
          (University of Alberta -{" "}
          <a href="https://spaces.facsci.ualberta.ca/edtekla/">EdTeKLA</a>)
          Group. He has a special interest in Human-Computer Interaction (HCI)
          and accessibility tools.
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
