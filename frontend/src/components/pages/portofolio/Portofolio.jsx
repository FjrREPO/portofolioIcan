import React, { useState, useEffect } from "react";
import "./Portofolio.css";
import axios from "axios";

function Project() {

    //product list
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get("http://localhost:5000/admin/");
        setProducts(response.data);
    };

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
        const filteredData = products.filter(
            (product) => product.category === filter
        );

        setFilter(filteredData);
        }

        if (filter === "Photo") {
        const filteredData = products.filter(
            (product) => product.category === filter
        );

        setFilter(filteredData);
        }
    }, []);

    const active = 'tab__btn__active'

    return (
        <section id="portofolio">
        <div className="project component__space" id="Portfolio">
        <div className="headingtext">
            <h1 className="heading">My&nbsp;<span className="headingspan">Portofolio</span></h1>
        </div>
        <div className='tab__btns text-end'>
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
        </div>
        <div className="container">
            <div className="row">
                {products.filter(product => product.category === category)
                .map((product) => (
                    <>
                        <div className="col__3 admin__maincol" key={product.id}>
                            <div className="project__box pointer relative" data-aos="zoom-in-right">
                                <div className="project__box__img pointer relative">
                                    <div className="project__img__box">
                                    <a href={product.name} target='_blank' rel="noreferrer"><img src={product.url} alt="" className="project__img" /></a>
                                    </div>
                                    <div className="mask__effect"/>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
                <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                    <a href="https://www.instagram.com/withtirta/?hl=id" target='_blank' rel='noreferrer'><button className="view__more pointer btn">See more</button></a>
                </div>
            </div>
        </div>
        </div>
        </section>
    );
}

export default Project;
