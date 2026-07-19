import React from 'react';

const CKEditorContent = ({ content }) => {
  return (
    <div 
      className="ckeditor-content"
      dangerouslySetInnerHTML={{ __html: content }} 
    />
  );
};

export default CKEditorContent;
