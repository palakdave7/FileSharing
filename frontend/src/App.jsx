import { useState, useRef, useEffect } from 'react';
import { UploadFile } from '../service/api';

import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const[res,setRes]=useState(null);

  const uploadRef = useRef();

  const handleUpload = () => {
    uploadRef.current.click(); // just trigger the click
  };

  useEffect(() => {
    const apiCall = async () => {
      if (file) {
        const fileData = new FormData();
        fileData.append("name", file.name);
        fileData.append("file", file);

        try {
          const response = await UploadFile(fileData);
          setRes(response.path);
          console.log("Response from API:", response);
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      }
    };

    apiCall();
  }, [file]);

  return (
    <div className='container'>
      <h1>File Sharing App</h1>
      <div>
        <button onClick={handleUpload}>Upload</button>
        <input
          type="file"
          ref={uploadRef}
          style={{ display: "none" }}
          onChange={(event) => setFile(event.target.files[0])}
        />
      </div>
      <div>
        <a href={res}>{res}</a>
      </div>
    </div>
  );
}

export default App;
