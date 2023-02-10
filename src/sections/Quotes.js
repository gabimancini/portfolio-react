// Hooks
import React, { useState, useEffect } from "react";

const Quotes = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const URL = "http://quotes.rest/qod.json?category=inspire";

    useEffect(() => {
        getQuote();
        const intervalID = setInterval(() => {
            getQuote()
        }, 24 * 60 * 60 * 1000);
        return () => {
            clearInterval(intervalID);
        }
    }, [])
    function getQuote() {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setQuote(data.contents.quotes[0].quote);
                setAuthor(data.contents.quotes[0].author);
            })
    }
    return (
        <section className=" text-center bg-servicesBg">
            <div className=" container">
                <h3 className="text-h2">{quote}</h3>
                <p>- {author}</p>
                    <p className="flex justify-center">
                        <img src="https://theysaidso.com/branding/theysaidso.png" alt="Logo They said so" className="w-4" />
                        <a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com" style={{ color: '#ccc' }}>
                            They Said So®
                        </a>
                    </p>
            </div>
        </section>
    )
}

export default Quotes;