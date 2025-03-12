import React, { useState } from "react";
import { storage, db, collection, addDoc, ref, uploadBytes, getDownloadURL } from "./firebaseConfig";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    if (!file) return;

    const fileRef = ref(storage, `uploads/${file.name}`);
    await uploadBytes(fileRef, file);
    const fileUrl = await getDownloadURL(fileRef);

    await addDoc(collection(db, "messages"), {
      fileUrl,
      fileType: file.type,
      timestamp: new Date(),
    });

    setFile(null);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default FileUpload;
