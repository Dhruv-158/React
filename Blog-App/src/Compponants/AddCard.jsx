/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';  
import './AddCard.css';


function AddCard(props) {


    const [img, setImg] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [msg, setMsg] = useState("");

    const submit = (e) => {
        e.preventDefault();

        if (!img || !title || !desc) {
            setMsg("Enter all data");
            setTimeout(() => {
                setMsg("");
            }, 1500);
        } else {
            props.addCard(img, title, desc);
        }
        setImg("");
        setTitle("");
        setDesc("");
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const base64String = reader.result;
                setImg(base64String);
                console.log(base64String)
            };
            reader.readAsDataURL(file);
            
        }
    };
    

    const handleEditorChange = (content, editor) => {
        setDesc(content);
    };

    return (
        <>
            <div className='container-md'>
                <form onSubmit={submit}>
                    {msg && <h4 className='text-danger'>{msg}</h4>}
                    <div className="mb-3">
                        <label htmlFor="Img" className="form-label">Images</label>
                        <input
                            type="file"
                            className="form-control w-75"
                            id="Img"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Title" className="form-label">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="form-control w-75"
                            id="Title"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Description" className="form-label">Description</label>
                        <Editor
                            apiKey='ex4smvetm23ay3uyiuqw5dkobg1byaar66oa2qdk7xlbevm9'
                            value={desc}
                            onEditorChange={handleEditorChange}
                            init={{
                                height: 300,
                                menubar: true,
                                // z-index:0,
                                plugins: [
                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor',
                                    'searchreplace', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | outdent indent | numlist bullist | link image | code | z-index-1',
                            }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}

export default AddCard;