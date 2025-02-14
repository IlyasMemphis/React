import React from "react";
import {Link} from "react-router-dom"

const articles = [
    { id: 1, title: "Первая статья" },
    { id: 2, title: "Вторая статья" },
    { id: 3, title: "Третья статья" },
  ];

  const Articles = () => {
    return (
        <div>
            <h1>Список статей</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <Link to={`/artickes/${article.id}`}>{article.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
  }

  export default Articles