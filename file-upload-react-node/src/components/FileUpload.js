import axios from "axios";
import React, { Component,useState } from "react";

 const FileUploadComponent = () => {

    const [image,setImage]=useState("");
    const [imageUrl, setImageUrl] = useState('');

    const  onFileChange=(e)=> {
        setImage(e.target.files[0] )
    }

   const  onSubmit=(e)=> {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image',image)
        axios.post("http://localhost:7000/upload", formData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(res => {
          setImageUrl(res.data.imageUrl);
        })
    }
  return (
    <div className="container">
      <h3>React File Upload</h3>
      <hr />
      <div className="row" style={{ marginTop: "40px" }}>
        <div className="col-md-4 offset-md-4">
          <form onSubmit={onSubmit} >
            <div className="form-group">
              <input type="file" accept="image/*"  onChange={onFileChange} />
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Upload
              </button>
            </div>
          </form>
        </div>
        {imageUrl && <img src={imageUrl} alt="Uploaded" />}
      </div>
    </div>
  );
};


export default FileUploadComponent