// Start of JSX file
// Resume page that has linked resume.pdf and small list of skills underneath.
export default function ResumePage() {
    // Link Resume + display simplified skills list
    const pdfURL = "/resume/Allie_Stewart_Resume.pdf";
    return (
        <div className="resume">
            <h1 className="resume-title">Resume</h1>
            <div className="resume-pdf">
            <embed src={pdfURL} width="100%" height="600px" />
            </div>
            <h2 className='skills'>Skills List</h2>

            <h2>Front-End</h2>
            <li>HTML</li>
            <li>CSS</li>
            <li>Handlebars</li>
            <li>React</li>

            <h2>Back-End</h2>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>MySQL</li>
            <li>MongoDB</li>
        </div>
    );
}
// End of JSX file