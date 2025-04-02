import { useState } from "react";
import { SectionComponent } from "./components/sections";
import "./App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState([
    { input1: "", input2: "", input3: "" },
  ]);
  const [education, setEducation] = useState([
    { input1: "", input2: "", input3: "" },
  ]);
  const [jobExperience, setJobExperience] = useState([
    { input1: "", input2: "", input3: "" },
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  const renderTable = (header, rows) => (
    <div className="table-container">
      <h2>{header}</h2>
      <table className="data-table">
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.input1}</td>
              <td>{row.input2}</td>
              <td>{row.input3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <h1>My CV</h1>

      {!isSubmitted ? (
        <>
          <SectionComponent
            headerText="General Information"
            inputPlaceholders={["Name", "Tel.", "Email"]}
            rows={generalInfo}
            setRows={setGeneralInfo}
          />
          <SectionComponent
            headerText="Education"
            inputPlaceholders={["Date", "School Name", "Title of Study"]}
            rows={education}
            setRows={setEducation}
          />
          <SectionComponent
            headerText="Job Experience"
            inputPlaceholders={["Date", "Company Name", "Tasks"]}
            rows={jobExperience}
            setRows={setJobExperience}
          />
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </>
      ) : (
        <>
          {renderTable("General Information", generalInfo)}
          {renderTable("Education", education)}
          {renderTable("Job Experience", jobExperience)}
          <button className="edit-button" onClick={handleEdit}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default App;
