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
          and a software developer at{" "}
          <a href="https://www.sap.com/index.html">SAP Inc.</a>, dedicated to
          crafting user-centric web apps for end users and pioneering the
          integration of innovative technologies like GPT.
          <br />
          <br />
          He was also a Research Assistant in{" "}
          <a href="https://www.sfu.ca/~xingdong/">Dr. Xing-dong Yang's</a>{" "}
          (Simon Fraser University -{" "}
          <a href="https://ixlab.cs.sfu.ca/">ixLab</a>) group and{" "}
          <a href="https://apps.ualberta.ca/directory/person/demmanse">
            Dr. Carrie Demmans Epp's
          </a>{" "}
          (University of Alberta -{" "}
          <a href="https://spaces.facsci.ualberta.ca/edtekla/">EdTeKLA</a>)
          Group. That's right, he has a special interest in Human-Computer
          Interaction (HCI) and accessibility tools.
          <br />
          <br />
          He is passionate about travel, cherishing every opportunity to explore
          new destinations and immerse in diverse cultures. Photographing is his
          creative outlet, he shoots on Fuji XS-10.
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
