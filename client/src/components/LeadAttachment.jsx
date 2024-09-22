import React, { useState, useCallback } from "react";
import { FaUpload, FaFileDownload, FaTrash, FaArrowUp } from "react-icons/fa";

const Attachments = () => {
  const [files, setFiles] = useState([]);

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const droppedFiles = Array.from(event.dataTransfer.files).map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type,
    }));
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files).map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type,
    }));
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    event.target.value = ""; 
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Attachments</h2>

      <div
        className="border-dashed border-2 border-blue-400 p-4 rounded-lg mb-4 cursor-pointer flex flex-col items-center"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById("file-input").click()}
      >
        <div className="bg-blue-300 text-white rounded-md p-4 mb-2">
          <FaArrowUp className="text-lg" />
        </div>
        <span className="text-gray-600">
          Drag & drop your files here or click to upload
        </span>
        <input
          type="file"
          id="file-input"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
                File Name
              </th>
              <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
                Preview
              </th>
              <th className="py-3 px-4 border-b border-gray-200 text-left text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition-all border-b duration-300"
              >
                <td className="py-4 px-4 border-b border-gray-200 text-gray-700">
                  {file.name}
                </td>
                <td className="py-4 px-4 border-b border-gray-200">
                  {file.type.startsWith("image/") ? (
                    <img
                      src={file.url}
                      alt={file.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ) : (
                    <span className="text-gray-500">No Preview</span>
                  )}
                </td>
                <td className="py-4 px-4 my-5 border-gray-200 flex items-center">
                  <a
                    href={file.url}
                    download
                    className="text-blue-500 mr-2 hover:text-blue-700 w-8 text-center"
                  >
                    <FaFileDownload />
                  </a>
                  <button
                    onClick={() => handleRemoveFile(index)}
                    className="text-red-500 hover:text-red-700 w-8 text-center"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {files.length === 0 && (
              <tr>
                <td colSpan="3" className="py-4 px-4 text-center text-gray-500">
                  No attachments uploaded
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attachments;
