import React, {useState} from "react";
import axios from "axios"
import Form from "react=bootstarp?form"

export default function FilesUploadComponent () {
  const [file, setFile] = useState("")
  const setdata = (e)=> {
    console.log(e.target.value)
  }

  // const setimgfile = (e)=> {
  //   setFile(e.target.files[0])
  // }

  const addUserData = async(e)=> {
    e.preventDefault()
    var formData = new FormData();
    formData.append("photo",file)
    formData.append("photo", file);

    const config = {
      headers: {
        "content-Type":"multipart/form-data"
      }
    }
    const res = await axios.post("/files-upload-component", formData,config);
    console.log(res);
  }
    return (
      <div className="container">
        <div className="row">
          <form>
            <h3> File Upload</h3>
            <div className="form-group">
              <input type="file" />
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary"
                type="submit"
                name="print"
                // onChange={setimgfile}
                onClick={addUserData}
              >
                Print
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
