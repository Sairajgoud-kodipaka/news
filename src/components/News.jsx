/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useState } from 'react'
import './News.css'


const News = () => {
    const apikey = "5ee7578452ef4bfc8ae21c137e5c0b7b"
    const [query, setQuery] = useState("")
    const [articles, setArticles] = useState([])
    console.log(articles)

    const fetchNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=5ee7578452ef4bfc8ae21c137e5c0b7b`);
            if (response?.data) {
                setArticles(response?.data?.articles)
            }

        } catch (error) {
            console.log(error)

        }
    }
    const handleClick = () => {
        fetchNews()
    }

    return (
        
        <div className='bg-black w-screen'>
            <header>
                <img src="/asset4.png" alt="" />
                <p className='text-white opacity-80%'>News that Matters</p>
            </header>
            <body>
                <div className="flex items-center mt-6 gap-4 justify-center">
                    <input onChange={(e) => setQuery(e.target.value)} className="w-[50%] p-4 border-none rounded" type="text" />
                    <button onClick={handleClick} className="bg-blue-600 rounded font-semibold text-white px-6 py-4">Search news</button>
                </div>
                <div className="grid grid-cols-2 max-w-7xl mx-auto md:grid-cols-3 items-center justify-center gap-3 mt-5">
                    {articles?.map((article) => (
                        <div className="w-96 h-auto gap-5 shadow-lg rounded overflow-hidden bg-white" key={article.url}>
                            <div className="w-full h-48 overflow-hidden">
                                <img className="w-full h-full object-cover" src={article.urlToImage} alt="" />
                            </div>
                            <div className="p-3">
                                <h1 className="text-lg font-bold">{article.title}</h1>
                                <p className="text-md opacity-95">{article.description.substring(0, 100)}...</p>
                                <a href={article.url} target="_blank" className="text-sm font-semibold rounded mt-3 text-white px-6 py-2 bg-blue-600">Read more</a>
                            </div>
                        </div>
                    ))}
                </div>
            </body>
        </div>
    )
}

export default News