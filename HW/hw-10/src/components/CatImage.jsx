import React, { useState, useEffect } from "react";
import axios from "axios"
import styles from "./CatImage.module.css"

const CatImage = () => {
    const [catImage, setCatImage] = useState("")
    const [loading, setLoading] = useState(false)

    const fetchCatImage = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://api.thecatapi.com/v1/images/search")
            setCatImage(response.data[0].url)
        } catch (error) {
            console.error("Ошибка загрузки изображения", error);
        }
        setLoading(false)
    }

    return (
        <div className={styles.container}> 
        <h1>Случайный котик</h1>
        {loading ? (
            <p>Загрузка...</p>
        ) : (
            catImage && <img src={catImage} alt="Random Cat" className={styles.image} />
        )}
        <button onClick={fetchCatImage} className={styles.button}>
            Новый котик
        </button>
        </div>
    )
}

export default CatImage;