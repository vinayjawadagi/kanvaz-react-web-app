export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <td></td>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of your Web application
        running on Netlify.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as" defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type" defaultValue="Online">
              <option value="Online">Online</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top"></td>
          <label htmlFor="wd-select-entry"> Online Entry Options </label>
          <div id="wd-select-entry">
            <input type="checkbox" id="wd-text-entry" name="entry-option" value="Text Entry" />
            <label htmlFor="text-entry">Text Entry</label>
            <br />

            <input type="checkbox" id="wd-website-url" name="entry-option" value="Website URL" />
            <label htmlFor="website-url">Website URL</label>
            <br />

            <input
              type="checkbox"
              id="wd-media-recording"
              name="entry-option"
              value="Media Recording"
            />
            <label htmlFor="media-recording">Media Recording</label>
            <br />

            <input
              type="checkbox"
              id="student-annotation"
              name="entry-option"
              value="Student Annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />

            <input type="checkbox" id="wd-file-upload" name="entry-option" value="File Uploads" />
            <label htmlFor="file-uploads">File Uploads</label>
            <br />
          </div>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <input id="wd-assign-to" value="Everyone" />
        </tr>
        <br />
        <tr>
          <td align="right" valign="top"></td>
          <label htmlFor="wd-due-date">Due</label>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <input type="date" id="wd-due-date" value="2024-11-11" />
        </tr>
        <br />

        <tr>
          <td></td>
          <td colSpan={1} align="left" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td colSpan={1} align="left" valign="top">
            <label htmlFor="wd-available-until">Until</label>
          </td>
        </tr>

        <tr>
          <td></td>
          <td align="left" colSpan={1}>
            <input type="date" id="wd-available-from" value="2024-11-06" />
          </td>

          <td>
            <input type="date" id="wd-available-until" value="2024-11-12" />
          </td>
        </tr>
        <tr>
          <td colSpan={4}>
            <hr />
          </td>
        </tr>
        <tr>
          <td colSpan={4} align="right" valign="top">
            <button>Cancel</button> <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
