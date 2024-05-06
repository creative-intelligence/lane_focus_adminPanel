import React, { useState } from 'react';
import Header from '../layouts/partials/header';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Content() {
  const [aboutUs, setAboutUs] = useState('');
  const [privacyPolicy, setPrivacyPolicy] = useState('');
  const [termsAndConditions, setTermsAndConditions] = useState('');

  const handleEditorChange = (value, editor) => {
    switch (editor) {
      case 'aboutUs':
        setAboutUs(value);
        break;
      case 'privacyPolicy':
        setPrivacyPolicy(value);
        break;
      case 'termsAndConditions':
        setTermsAndConditions(value);
        break;
      default:
        break;
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ],
  }

  return (
    <div>
      <Header header={"Manage settings"} />
      <div className="max-w-screen-2xl mx-auto bg-white lg:py-10">
        <div className="mx-4 sm:mx-9 my-3">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-2">About Us</h2>
              <ReactQuill
                theme="snow"
                value={aboutUs}
                onChange={(value) => handleEditorChange(value, 'aboutUs')}
                modules={modules}
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Privacy Policy</h2>
              <ReactQuill
                theme="snow"
                value={privacyPolicy}
                onChange={(value) => handleEditorChange(value, 'privacyPolicy')}
                modules={modules}
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Terms and Conditions</h2>
              <ReactQuill
                theme="snow"
                value={termsAndConditions}
                onChange={(value) => handleEditorChange(value, 'termsAndConditions')}
                modules={modules}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
