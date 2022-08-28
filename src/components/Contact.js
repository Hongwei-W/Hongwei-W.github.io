const Contact = ({ contact }) => {
  return (
    <div className="Contact flexbox-container section">
      {/*{contact.map((contact, index) => (*/}
      <>
        {contact[0].linkedIn && (
          <div>
            <a href={contact[0].linkedIn} target="_blank" title="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        )}
        {contact[0].resume && (
          <div>
            <a href={contact[0].resume} target="_blank" title="Resume">
              <i className="fa-solid fa-file-user"></i>
            </a>
          </div>
        )}
        {contact[0].github && (
          <div>
            <a href={contact[0].github} target="_blank" title="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        )}
        {contact[0].leetcode && (
          <div>
            <a href={contact[0].leetcode} target="_blank" title="LeetCode">
              <iconify-icon icon="simple-icons:leetcode"></iconify-icon>
            </a>
          </div>
        )}
        {contact[0].email && (
          <div>
            <i className="fa-solid fa-at"></i>
            <span className="tooltiptext">{contact[0].email}</span>
          </div>
        )}
      </>
      {/*))}*/}
    </div>
  );
};

export default Contact;
