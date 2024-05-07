import React, { useState } from "react";
import Header from "../layouts/partials/header";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Content() {
  const [activeButton, setActiveButton] = useState("aboutUs");
  const [aboutUs, setAboutUs] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState("");

  const handleEditorChange = (value, editor) => {
    switch (editor) {
      case "aboutUs":
        setAboutUs(value);
        break;
      case "privacyPolicy":
        setPrivacyPolicy(value);
        break;
      case "termsAndConditions":
        setTermsAndConditions(value);
        break;
      default:
        break;
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div>
      <Header header={"Manage settings"} />
      <div className="max-w-screen-2xl lg:mx-9 overflow-x-auto drop-shadow-xl rounded-lg lg:my-8 my-4 bg-white lg:py-10">
        <div className="mx-4 sm:mx-9 my-3">
          <div className="space-y-4">
            <div className="space-x-4">
              <button
                className={`rounded-md w-full sm:w-auto text-sm ${
                  activeButton === "aboutUs" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                } px-6 py-2 font-medium capitalize`}
                onClick={() => setActiveButton("aboutUs")}
              >
                About Us
              </button>
              <button
                className={`rounded-md w-full sm:w-auto text-sm ${
                  activeButton === "privacyPolicy" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                } px-6 py-2 font-medium capitalize`}
                onClick={() => setActiveButton("privacyPolicy")}
              >
                Privacy Policy
              </button>
              <button
                className={`rounded-md w-full sm:w-auto text-sm ${
                  activeButton === "termsAndConditions" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                } px-6 py-2 font-medium capitalize`}
                onClick={() => setActiveButton("termsAndConditions")}
              >
                Terms and Conditions
              </button>
            </div>
            <div>
              {activeButton === "aboutUs" && (
                <ReactQuill
                  theme="snow"
                  value={aboutUs}
                  onChange={(value) => handleEditorChange(value, "aboutUs")}
                  modules={modules}
                />
              )}
              {activeButton === "privacyPolicy" && (
                <ReactQuill
                  theme="snow"
                  value={privacyPolicy}
                  onChange={(value) => handleEditorChange(value, "privacyPolicy")}
                  modules={modules}
                />
              )}
              {activeButton === "termsAndConditions" && (
                <ReactQuill
                  theme="snow"
                  value={termsAndConditions}
                  onChange={(value) => handleEditorChange(value, "termsAndConditions")}
                  modules={modules}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
