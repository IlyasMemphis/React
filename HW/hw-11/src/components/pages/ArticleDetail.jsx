import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const articles = {
    1: "Содержание первой статьи...",
    2: "Содержание второй статьи...",
    3: "Содержание третьей статьи...",
  };
  

  const ArticleDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Статья {id}</h1>
            <p>{articles[id] || "Статья не найдена"}</p>
            <button onClick={() => navigate(-1)}>Назад</button>
        </div>
    );
  };

  export default ArticleDetail;