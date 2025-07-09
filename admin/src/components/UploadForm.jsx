import React, { useState } from "react";
import axios from "axios";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./UploadForm.css";

const UploadForm = () => {
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [sizes, setSizes] = useState([
    { label: "small", price: "" },
    { label: "medium", price: "" },
    { label: "large", price: "" },
  ]);

  const handleFileChange = (e) => {
  const selected = Array.from(e.target.files);

  const tooBig = selected.find(file => file.size > 20 * 1024 * 1024);
  if (tooBig) {
    alert("One or more images are over 20MB. Please upload smaller files.");
    return;
  }

  setFiles(selected);
  setPreview(selected.map(file => URL.createObjectURL(file)));
};


  const handlePriceChange = (index, value) => {
    const newSizes = [...sizes];
    newSizes[index].price = value;
    setSizes(newSizes);
  };

  const handleUpload = async () => {
    if (!files.length || !title) return alert("Please fill all required fields!");

    const formData = new FormData();
    files.forEach(file => formData.append("images", file));
    formData.append("title", title);
    formData.append("description", description);
    formData.append("sizes", JSON.stringify(sizes));
    formData.append("tags", JSON.stringify(tags.split(",").map(t => t.trim())));

    try {
      await axios.post("http://localhost:5000/api/paintings", formData);
      alert("Painting uploaded!");
      setFiles([]);
      setPreview([]);
      setTitle("");
      setDescription("");
      setTags("");
      setSizes([
        { label: "small", price: "" },
        { label: "medium", price: "" },
        { label: "large", price: "" },
      ]);
    } catch (err) {
      alert("Upload failed.");
      console.error(err);
    }
  };

  return (
    <div className="upload-container">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      
      <div className="size-inputs">
        {sizes.map((s, idx) => (
          <input
            key={idx}
            type="number"
            placeholder={`${s.label} price`}
            value={s.price}
            onChange={(e) => handlePriceChange(idx, e.target.value)}
          />
        ))}
      </div>

      <input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags (comma-separated)" />

      <label className="upload-box">
        <FaCloudUploadAlt className="upload-icon" />
        <p>Choose Images</p>
        <input type="file" multiple accept="image/*" onChange={handleFileChange} hidden />
      </label>

      {preview.length > 0 && (
        <div className="preview-section">
          {preview.map((src, idx) => (
            <img src={src} key={idx} alt={`Preview ${idx}`} />
          ))}
        </div>
      )}

      <button className="upload-btn" onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadForm;
