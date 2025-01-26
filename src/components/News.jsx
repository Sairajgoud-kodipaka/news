/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useState } from 'react'

const News = () => {
    const apikey = "5ee7578452ef4bfc8ae21c137e5c0b7b"
    const [query, setQuery] = useState("")
    const [articles, setArticles] = useState([])
    console.log(articles.url)

    const fetchNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=5ee7578452ef4bfc8ae21c137e5c0b7b`);
            console.log(response.data); // Log the entire API response

            if (response?.data) {
                setArticles(response?.data?.articles)
            }

        } catch (error) {
            console.log(error);

        }
    }
    const handleClick = () => {
        fetchNews()
    }

    return (
        
<body className="bg-gray-300 w-screen h-screen">
            <header className='bg-black w-full h-50 flex items-center justify-center relative'>
            <img className="w-60 rounded-full bg absolute top-4 left-0 m-2" src="/asset4.png" alt="Logo" />
            <p className="text-lg text-white font-semibold opacity-70">News that Matters</p>            </header>
            <div className='bg-gray-50 h'>
                <div className="flex items-center mt-6 gap-4 justify-center ">
                    <input onChange={(e) => setQuery(e.target.value)} className="w-[50%] p-4 border-black rounded  mt-5" type="text" />
                    <button onClick={handleClick} className="mt-4 bg-blue-600 rounded font-semibold text-white px-6 py-4 text-lg">Search news</button>
                    </div>
                <div className="grid grid-cols-2 max-w-7xl mx-auto md:grid-cols-3 items-center justify-center gap-3 mt-5">
                    {articles?.map((article) => (
                        <div className="w-96 h-auto gap-5 shadow-lg rounded overflow-hidden bg-black" key={article.url}>
                            <div className="w-full h-48 overflow-hidden">
                                <img className="w-full h-full object-cover" src={article.urlToImage} alt="" />
                            </div>
                            <div className="p-3">
                                <h1 className="text-lg text-white font-bold">{article.title}</h1>
                                <p className="text-md  text-white opacity-65">{article.description.substring(0, 100)}...</p>
                                <a href={article.url || '#'}target="_blank"rel="noopener noreferrer" className="text-sm font-semibold rounded mt-3 text-white px-6 py-2 bg-blue-600">Read more</a>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </body>
    )
}

export default News
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useState } from 'react'

const News = () => {
    const apikey = "5ee7578452ef4bfc8ae21c137e5c0b7b"
    const [query, setQuery] = useState("")
    const [articles, setArticles] = useState([])
    console.log(articles.url)

    const fetchNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=5ee7578452ef4bfc8ae21c137e5c0b7b`);
            console.log(response.data); // Log the entire API response

            if (response?.data) {
                setArticles(response?.data?.articles)
            }

        } catch (error) {
            console.log(error);

        }
    }
    const handleClick = () => {
        fetchNews()
    }

    return (
        
<body className="bg-gray-300 w-screen h-screen">
            <header className='bg-black w-full h-50 flex items-center justify-center relative'>
            <img className="w-60 rounded-full bg absolute top-4 left-0 m-2" src="/asset4.png" alt="Logo" />
            <p className="text-lg text-white font-semibold opacity-70">News that Matters</p>            </header>
            <div className='bg-gray-50 h'>
                <div className="flex items-center mt-6 gap-4 justify-center ">
                    <input onChange={(e) => setQuery(e.target.value)} className="w-[50%] p-4 border-black rounded  mt-5" type="text" />
                    <button onClick={handleClick} className="mt-4 bg-blue-600 rounded font-semibold text-white px-6 py-4 text-lg">Search news</button>
                    </div>
                <div className="grid grid-cols-2 max-w-7xl mx-auto md:grid-cols-3 items-center justify-center gap-3 mt-5">
                    {articles?.map((article) => (
                        <div className="w-96 h-auto gap-5 shadow-lg rounded overflow-hidden bg-black" key={article.url}>
                            <div className="w-full h-48 overflow-hidden">
                                <img className="w-full h-full object-cover" src={article.urlToImage} alt="" />
                            </div>
                            <div className="p-3">
                                <h1 className="text-lg text-white font-bold">{article.title}</h1>
                                <p className="text-md  text-white opacity-65">{article.description.substring(0, 100)}...</p>
                                <a href={article.url || '#'}target="_blank"rel="noopener noreferrer" className="text-sm font-semibold rounded mt-3 text-white px-6 py-2 bg-blue-600">Read more</a>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </body>
    )
}

export default News
