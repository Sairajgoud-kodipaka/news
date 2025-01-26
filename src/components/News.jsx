/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';


const News = () => {
    const apiKey = "5ee7578452ef4bfc8ae21c137e5c0b7b";
    const [query, setQuery] = useState("");
    const [sortBy, setSortBy] = useState("popularity"); // Default sorting by popularity
    const [articles, setArticles] = useState([]);
    console.log(articles);

    const fetchNews = async () => {
        try {
            const response = await axios.get(
                `https://newsapi.org/v2/everything?q=${query}&sortBy=${sortBy}&apiKey=${apiKey}`
            );
            if (response?.data) {
                setArticles(response?.data?.articles);
            }
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    const handleClick = () => {
        fetchNews();
    };

    return (
        <body className="bg-gray-300 w-screen h-screen">
            <header className="bg-black w-full h-50 flex items-center justify-center relative">
                <img
                    className="w-60 rounded-full bg absolute top-4 left-0 m-2"
                    src="/asset4.png"
                    alt="Logo"
                />
                <p className="text-lg text-white font-semibold opacity-70">
                    All News at a Go - Your One-Stop Destination for Latest Updates
                </p>
            </header>
            <div className="bg-gray-50">
                <div className="flex items-center mt-6 gap-4 justify-center">
                    <input
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-[50%] p-4 border-black rounded mt-5"
                        type="text"
                    />
                    <button
                        onClick={handleClick}
                        className="mt-4 bg-blue-600 rounded font-semibold text-white px-6 py-4 text-lg"
                    >
                        Search news
                    </button>
                </div>
                <div className="grid grid-cols-2 max-w-7xl mx-auto md:grid-cols-3 items-center justify-center gap-3 mt-5">
                    {articles?.map((article, index) => (
                        <div
                            className="w-100 h-100 gap-5 shadow-lg rounded overflow-hidden bg-black transition transform transform hover:translate-y-[-10px] hover:shadow-2xl"
                            key={index}
                        >
                            <div className="w-full h-48 overflow-hidden">
                                {/* Check for valid image URL */}
                                <img
                                    className="w-full h-full object-cover"
                                    src={article.urlToImage || '/placeholder.png'}
                                    alt="News Thumbnail"
                                />
                            </div>
                            <div className="p-3">
                                <h1 className="text-lg text-white font-bold">
                                    {article.title || "No title available"}
                                </h1>
                                <p className="text-md text-white opacity-65">
                                    {article.description
                                        ? article.description.substring(0, 100) + "..."
                                        : "No description available."}
                                </p>
                                <a
                                    href={article.url || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold rounded mt-3 text-white px-6 py-2 bg-blue-600 absolute bottom-2 left-2">Read more</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </body>
    );
};

export default News;
