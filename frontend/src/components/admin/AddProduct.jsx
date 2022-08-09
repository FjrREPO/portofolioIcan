import React, { useState } from "react";
import "./Admin.css";
import Swal from 'sweetalert2'
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowCircleLeft } from 'react-icons/fa'

const AddProduct = () => {

    //add product
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    };

    const saveProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("category", category);
    };

    const handleClickButton = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("category", category);
        try {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        
        swalWithBootstrapButtons.fire({
            text: "You want to add this data?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Add!',
            cancelButtonText: 'Cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
            axios.post("http://localhost:5000/admin/", formData, {
            headers: {
            "Content-type": "multipart/form-data",
            },
            });
            navigate("/admin/");
            swalWithBootstrapButtons.fire(
                'Success!',
                'Your data has been added.',
                'success'
            )
            } else if (
            result.dismiss === Swal.DismissReason.cancel
            ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your data was not added.',
                'error'
            )
            }
        })
        } catch (error) {
        console.log(error);
        }
        }


    return (
        <>
            <div className="admin__back">
                <div className="admin__backbutton">
                    <Link to='/admin' className="admin__backname"><FaArrowCircleLeft/> Back</Link>
                </div>
            </div>
            <div className="admin__mainform">
                <form onSubmit={saveProduct} className='admin__form'>
                    <div className="admin__childform">
                        <label className="admin__head">Link Image</label>
                            <div className="admin_sidelink">
                                <input
                                    type="text"
                                    className="admin__inputlink"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder=" https:"
                                    list="Format"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="admin__inputlink"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    placeholder=" Video / Photo"
                                />
                            </div>
                            <div>
                                <label className="admin__head head22">Choose Image</label>
                                    <input
                                        type="file"
                                        className="admin__inputimage"
                                        onChange={loadImage}
                                    />
                                {preview ? (
                                        <figure className="admin__previewimage">
                                        <img src={preview} alt="PreviewImage" className="admin__mainpreview"/>
                                        </figure>
                                    ) : (
                                        ""
                                )}
                            </div>
                        <div className="">
                            <button type="submit" className="admin__buttonsave" onClick={handleClickButton}>
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddProduct