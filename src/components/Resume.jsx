import resume from './Resume/Jasmine-Neal-Resume.pdf'

function Resume() {
    return (
    //<div> I am the Resume page
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
        <hr />
        <a className="button is-primary"
          href={resume}
          target="_blank" rel="noreferrer">
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript</li>
            <li>OpenAPI, JSON</li>
            <li>React</li>
            <li>Markdown</li>
            <li>Git</li>
        </ul>
      </div>
    </div>
)}

export default Resume