import React, { useState, useEffect } from "react";
import "./Admin.css";
import axios from "axios";
import { Link  } from "react-router-dom";
import { FaArrowCircleLeft } from 'react-icons/fa'
import { FaRegPlusSquare } from 'react-icons/fa'
import Swal from 'sweetalert2'

const Admin = () => {

    //product list
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get("http://localhost:5000/admin/");
        setProducts(response.data);
    };

    const handleClickButton = async (productId) => {
        try {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        
        swalWithBootstrapButtons.fire({
            text: "You want to delete this data?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete!',
            cancelButtonText: 'Cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/admin/${productId}`);
                swalWithBootstrapButtons.fire(
                    'Success!',
                    'Your data has been deleted.',
                    'success'
                )
            } else if (
            result.dismiss === Swal.DismissReason.cancel
            ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your data was not deleted.',
                'error'
            )
            }
        })
        getProducts();
        } catch (error) {
        console.log(error);
        }
    }

    //Product Filter
    const [category, setCategory] = useState([]);

    const [filter, setFilter] = useState("Video");

    const getUsers = async () => {
        const { data } = await axios.get("http://localhost:5000/admin/");
        setFilter(data);
    };

    useEffect(() => {
        
        getUsers();

        if (filter === "Video") {
        const filteredData = filter.filter(
            (product) => product.category === filter
        );

        setFilter(filteredData);
        }

        if (filter === "Photo") {
        const filteredData = filter.filter(
            (product) => product.category === filter
        );

        setFilter(filteredData);
        }
    }, [filter]);

    const active = 'tab__btn__active'

    return (
        <>
            <section className="admin__main">
                <div className="admin__backadmin">
                    <div className="admin__backbutton">
                        <Link to='/' className="admin__backname"><FaArrowCircleLeft/> Back</Link>
                    </div>
                </div>
                <section id="admin">
                <div className="admin__add">
                    <div className="admin__addbutton">
                        <Link to='/addproduct' className="admin__backname"><FaRegPlusSquare/> Add</Link>
                    </div>
                </div>
                    <div className="projectt" id="admin">
                        <div className='tab__btns text-end'>
                            <>
                            <button
                                className={` ${
                                    filter === "Video" ? active : ""
                                } secondary__btn`}
                                onClick={() => setCategory("Video")}
                            >
                                Video
                            </button>
                            <button
                                className={` ${
                                    filter === "Photo" ? active : ""
                                } secondary__btn`}
                                onClick={() => setCategory("Photo")}
                            >
                                Photo
                            </button>
                            </>
                        </div>
                        <div className="container admin__backgr">
                            <div className="row">
                                {products.filter(product => product.category === category)
                                .map((product) => (
                                    <>
                                        <div className="col__3 admin__maincol" key={product.id}>
                                            <div className="project__box pointer relative">
                                                <div className="project__box__img pointer relative">
                                                    <div className="project__img__box">
                                                    <a href={product.name} target='_blank' rel="noreferrer"><img src={product.url} alt="" className="project__img" /></a>
                                                    </div>
                                                    
                                                    <div className="mask__effect"/>
                                                </div>
                                                <div className="admin__maincrud">
                                                    <Link to={`edit/${product.id}`} className="admin__crud">
                                                        Edit
                                                    </Link>
                                                    <Link
                                                        onClick={() => handleClickButton(product.id)}
                                                        className="admin__crud"
                                                        alt=''
                                                        to="/admin/"
                                                    >
                                                        Delete
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Admin
