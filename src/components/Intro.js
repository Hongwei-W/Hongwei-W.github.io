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
          <span className="t3">Hongwei Wang</span> (pronouns: he/him) is a DevOps Engineer Intern at{" "}
          <a href="https://fullscript.com/">Fullscript</a> working on CLI tools in Go, who recently graduated from the{" "}
          <a href="https://www.ualberta.ca/index.html">University of Alberta</a>{" "} with a Bachelor of Science in Computing Science.
          He is dedicated to crafting user-centric applications, web apps or CLI tools, for end users.
          <br />
          <br />
          He has extensive experience and expertise. His past internships at <a href="https://www.sap.com/canada/index.html">SAP Canada</a> and <a href="https://www.emqx.com/en">EMQ Technologies</a> have fostered his significant industrial-level knowledge in Python back-end development and CLI development in C respectively. He also served as a Research Assistant at <a href="https://www.sfu.ca/">Simon Fraser University</a>{" "} -{" "}
          <a href="https://ixlab.cs.sfu.ca/">ixLab</a> and <a href="https://www.ualberta.ca/index.html">University of Alberta</a>{" "}-{" "}
          <a href="https://spaces.facsci.ualberta.ca/edtekla/">EdTeKLA</a>. He has been leveraging his academic insights to drive innovation in the industry.
          <br />
          <br />
          He is passionate about travel, cherishing every opportunity to explore
          new destinations and immerse in diverse cultures. Photographing is his
          creative outlet, he shoots on Fuji XS-10.
          <br />
          <br />
          You can reach him via email `wanghw22[at]gmail[dot]com`, more
          contact info underneath.
        </span>
      </div>
    </div>
  );
};

export default Intro;
