import React, { useEffect, useState } from 'react';
import AOS from 'aos'

import Loading from '../utils/Loading'

import "aos/dist/aos.css"

const File = () => {
    const [imageFirst, setImageFirst] = useState(null)
    const [imageSecond, setImageSecond] = useState(null)
    const [imageFirstFile, setImageFirstFile] = useState(null)
    const [imageSecondFile, setImageSecondFile] = useState(null)
    const [imageResult, setImageResult] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    const generatePreviewImageUrl = (file, callback) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = (e) => callback(reader.result);
    };

    const handleChangeFirstInput = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        setImageFirstFile(file);
        generatePreviewImageUrl(file, (previewImageUrl) => {
            setImageFirst(previewImageUrl);
        });
    }

    const handleChangeSecondInput = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        setImageSecondFile(file);
        generatePreviewImageUrl(file, (previewImageUrl) => {
            setImageSecond(previewImageUrl);
        });
    }

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    return (
        <div className="files__swap">
            <div className="files__action">
                {
                    imageFirst ?
                        <img
                            className="file__image-first"
                            src={imageFirst}
                            alt="" />
                        :
                        <input
                            data-aos="fade-right"
                            className="file__input-first"
                            type="file"
                            onChange={handleChangeFirstInput}
                            accept="image/png, image/jpeg"
                        />

                }
                {
                    imageSecond ?
                        <img
                            className="file__image-second"
                            src={imageSecond} alt="" />
                        :
                        <input
                            data-aos="fade-left"
                            type="file"
                            className="file__input-second"
                            onChange={handleChangeSecondInput}
                            accept="image/png, image/jpeg"
                        />
                }
            </div>
            {
                imageResult && 
                <>
                <div className="file__title_swapped">Image after Swapped</div>
                <img className="file__input-result" src={imageSecond} alt="" />
                </>
            }
            {
                imageFirst && imageSecond ?
                    <button className="files__upload" onClick={() => setImageResult(true)}>Swap</button> : null
            }







        </div>
    );
}

export default File;
