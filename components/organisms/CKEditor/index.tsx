import React, { FC, useEffect, useRef } from "react";
import { FormField, FormItem, FormMessage } from "../../ui/form";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { jobFormSchema } from "@/lib/form-schema"; // Sesuaikan skema Anda
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Essentials,
  Paragraph,
  Bold,
  Italic,
  Clipboard,
  Typing,
  ShiftEnter,
  Image,
  Link,
  List,
  Underline,
  Heading,
  BlockQuote,
  WordCount,
  Alignment,
  Autoformat,
  SpecialCharacters,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

interface CKEditorComponentProps {
  form: any; // Gantilah `any` sesuai tipe yang lebih spesifik jika perlu
  name: string;
  editorLoaded?: boolean;
}

const CKEditorComponent: FC<CKEditorComponentProps> = ({
  form,
  name,
  editorLoaded,
}) => {
  // Menangani nilai awal dari form.getValues(name)
  //   const initialData = typeof form.getValues(name) === "string"
  //   ? form.getValues(name)  // Jika sudah string, langsung digunakan
  //   : Array.isArray(form.getValues(name))
  //   ? form.getValues(name).join(", ") // Jika array, gabungkan menjadi string
  //   : JSON.stringify(form.getValues(name)) || ""; // Jika objek, stringify, jika undefined, pakai string kosong

  const editorRef = useRef<any>(null);
 

  return (
    <>
      {editorLoaded ? (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <CKEditor
                editor={ClassicEditor}
                config={{
                  licenseKey: "GPL", // Sesuaikan lisensi Anda
                  plugins: [
                    Essentials,
                    Paragraph,
                    Bold,
                    Italic,
                    Underline,
                    Clipboard,
                    Typing,
                    ShiftEnter,
                    Link,
                    List,
                    Heading,
                    BlockQuote,
                    Alignment,
                    WordCount,
                    SpecialCharacters,
                    Autoformat,
                  ],
                  toolbar: [
                    "undo",
                    "redo",
                    "|",
                    "bold",
                    "italic",
                    "underline",
                    "|",
                    // "formatPainter",
                    "alignment",
                    "fontFamily",
                    "fontSIze",
                    "bulletedList",
                    "numberedList",
                    "|",
                    "link",
                    "blockQuote",
                    "|",
                    "wordCount",
                    "heading",
                  ],

                  initialData: form.getValues(name),
                }}
                onChange={(_: any, editor: any) => {
                  const data = editor.getData();
                  form.setValue(name, data);
                }}
              />
              <FormMessage className="mt-3" />
            </FormItem>
          )}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default CKEditorComponent;
