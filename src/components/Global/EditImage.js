import React, { useEffect, useState } from 'react';
import { useDropzone } from "react-dropzone";
import AOS from 'aos'

import { openDefaultEditor } from '../../pintura/pintura'

import "../../pintura/pintura.css"
import "aos/dist/aos.css"

const editImage = (image, done) => {
    const imageFile = image.pintura ? image.pintura.file : image;
    const imageState = image.pintura ? image.pintura.data : {};

    const editor = openDefaultEditor({
        src: imageFile,
        imageState
    });

    editor.on("close", () => {

    });

    editor.on("process", ({ dest, imageState }) => {
        Object.assign(dest, {
            pintura: { file: imageFile, data: imageState }
        });
        done(dest);
    });
};

const EditImage = () => {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })
                )
            );
        },
    });

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    const thumbs = files.map((file, index) => (
        <div key={file.name} className="image__edit-action">
            <img src={file.preview} className="image__editing" alt="" id="imageDownload" />
            <button className="image__edit-button"
                onClick={() =>
                    editImage(file, (output) => {
                        const updatedFiles = [...files];
                        updatedFiles[index] = output;
                        if (file.preview) URL.revokeObjectURL(file.preview);
                        Object.assign(output, {
                            preview: URL.createObjectURL(output)
                        });
                        setFiles(updatedFiles);
                    })
                }
            >
                Edit
            </button>
        </div>
    ));

    useEffect(
        () => () => {
            files.forEach((file) => URL.revokeObjectURL(file.preview));
        },
        [files]
    );

    const downloadImage = async () => {
        var canvas = await document.createElement('canvas');
        var ctx = await canvas.getContext('2d');
        var img = await document.getElementById("imageDownload");
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        var data = canvas.toDataURL("image/png")
        window.location.href = data
        var a = document.createElement('a');
        a.href = data;
        a.download = 'download.png';
        document.body.appendChild(a);
        a.click();
    }

    return (
        <div className="edit">
            <div className="edit__title" data-aos="flip-right">Let's start editing image</div>
            {
                files[0] ? thumbs :
                    <div data-aos="flip-up" {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} className="edit__input-image" />
                        <div className="dropzone__text">Select image from your computer</div>
                    </div>
            }
            {
                 files[0] &&  <button className="edit__download" onClick={downloadImage}>Download</button>
            }
       
          

        </div>
    );
}

export default EditImage;
