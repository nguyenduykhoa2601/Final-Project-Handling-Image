import React, { useEffect, useState } from 'react';
import AOS from 'aos'

import Loading from '../utils/Loading'

import "aos/dist/aos.css"
import axios from 'axios';

const File = () => {
    const [imageFirst, setImageFirst] = useState(null)
    const [imageSecond, setImageSecond] = useState(null)
    const [imageFirstFile, setImageFirstFile] = useState(null)
    const [imageSecondFile, setImageSecondFile] = useState(null)
    const [imageResult, setImageResult] = useState(null)
    const [imageResult1, setImageResult1] = useState(null)
    const [loading, setLoading] = useState(false)
    const [result,setResult] = useState(false)

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

    const handleUpload = async(e,image_name1,image_name2) => {
        e.preventDefault()
        const formData1 = new FormData();
        formData1.append("file", imageFirstFile, `${image_name1}.png`);
        const formData2 = new FormData();
        formData2.append("file", imageSecondFile, `${image_name2}.png`);
        try {
            setLoading(true)
            await axios.post(`${process.env.REACT_APP_API}/upload`,formData1)
            await axios.post(`${process.env.REACT_APP_API}/upload`,formData2)
            setResult(true)
            setLoading(false)
        } catch (error) {
            alert(error)
        }
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            setLoading(true)
            const res = await axios.get(`${process.env.REACT_APP_API}/predict`)
            const res1 = await axios.get(`${process.env.REACT_APP_API}/predict1`)
            setImageResult1(res1.data)
            setImageResult(res.data)
            setLoading(false)
        } catch (error) {
            alert(error)
        }
    }

    const downloadImage = async () => {
        var canvas = await document.createElement('canvas');
        var ctx = await canvas.getContext('2d');
        var img = await document.getElementById("imgdl");
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

    const downloadImage1 = async () => {
        var canvas = await document.createElement('canvas');
        var ctx = await canvas.getContext('2d');
        var img = await document.getElementById("imgdl1");
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
    

    if(loading) return <Loading />

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
                imageResult && imageResult1 &&
                <>
                    <div className="file__title_swapped">Image after Swapped</div>
                    <div className="file__result-both">
                        <img id="imgdl" className="file__input-result" src={imageResult} alt="" />
                        <img id="imgdl1" className="file__input-result" src={imageResult1} alt="" />
                    </div>
                    
                    
                </>
            }
            {
                imageFirst && imageSecond && !result ?
                    <button type="submit" className="files__upload" onClick={(e)=>handleUpload(e,"img_1","img_2")}>Upload</button>
                    : null
            }

            {
                result && !imageResult &&  <button type="submit" className="files__upload" onClick={(e)=>handleSubmit(e)}>Swap</button>
            }

            {
                imageResult && <button type="submit" className="files__upload" onClick={()=>downloadImage()}>Download Left Image</button>
            }
            {
                imageResult1 && <button type="submit" className="files__upload" onClick={()=>downloadImage1()}>Download Right Image</button>
            }

        </div>
    );
}

export default File;