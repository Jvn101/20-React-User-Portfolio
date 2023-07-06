import resume from './Resume/Jasmine-Neal-Resume.pdf'

function Resume() {
    return (
    //<div> I am the Resume page
    
    <div className="columns">
      <h1 class="pageHeading">Resume</h1>
      <div className="column">
        
     <div class="ResumeContent">
        <a className="button is-primary"
          href={resume}>
          <span className="icon">
           
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div>
        <h2>Skills:</h2>
    
        <ul class="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>JSON</li>
            <li>React</li>
            <li>Markdown</li>
            <li>Git</li>
        </ul>
      </div>
      </div>
    </div>
)}

export default Resume