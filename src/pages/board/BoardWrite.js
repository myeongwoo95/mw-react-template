import { CKEditor, CKEditorContext } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React from "react";
import Context from "@ckeditor/ckeditor5-core/src/context";

const BoardWrite = () => {
  return (
    <div className=" flex flex-col mx-auto max-w-7xl p-6">
      <CKEditor
        editor={ClassicEditor}
        config={{
          placeholder: "내용을 입력하세요.",
          toolbar: {
            items: ["heading"],
          },
        }}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default BoardWrite;
