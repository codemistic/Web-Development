const nextQuote = document.querySelector(".quote-next");
const quote = document.querySelector(".quote-high");
const author = document.querySelector(".quote-author");

const BASE_URL = `https://api.quotable.io`;

const fetchQuote = async (pathname) => {
    fetch(`${BASE_URL}/${pathname}`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            quote.textContent = data.content;
            author.textContent = `_${data.author}`;
            nextQuote.id = `${data._id}`;
        });
};

nextQuote.addEventListener("click", () => {
    fetchQuote(`random`);
});

window.addEventListener("load", () => {
    fetchQuote(`random`);
});
