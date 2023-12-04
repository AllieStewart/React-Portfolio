export default function ResumePage() {
    // Link Resume + display simplified skills list
    const pdfURL = "/resume/Allie_Stewart_Resume.pdf";
    return (
        <div className="resume">
            <h1>Resume</h1>
            <div>
                 <iframe src={pdfURL} width="100%" height="500px" frameBorder="0"/>
            </div>
            <h2 className='skills'>Skills List</h2>
            <h2>Front-End</h2>
            <li>
                Something
            </li>

            <h2>Back-End</h2>
            <li>
                Another thing
            </li>
        </div>
    );
}


{/* <ReactPDF file={{
                    data: {pdfURL}
                }}/> */}

{/* <object data={pdfURL} type="application/pdf" width="100%" height="100%" scrolling="no">
            </object> */}