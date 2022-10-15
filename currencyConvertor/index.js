// Result block
let res = document.querySelector(".result");

// API headers
var myHeaders = new Headers();
myHeaders.append("apikey", "fnTl0FShbZstplTzCLfrmDm0HBlUD0RY");

var requestOptions = {
	method: "GET",
	redirect: "follow",
	headers: myHeaders,
};

// for dropdown list of to and from
let dropdownFrom = document.querySelector("#from_data");
let dropdownTo = document.querySelector("#to_data");
let symbolsList;

fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
	.then((response) => response.json())
	.then((data) => {
		let { symbols } = data;
		symbolsList = symbols;
		render(symbols);
	})
	.catch((error) => console.log("error is this : ", error));

//making dropdown for to and from
function render(symbols) {
	for (let symbol in symbols) {
		let opt = document.createElement("option");
		opt.value = symbol;
		opt.text = symbols[symbol];
		dropdownTo.appendChild(opt);
	}
	for (let symbol in symbols) {
		let opt = document.createElement("option");
		opt.value = symbol;
		opt.text = symbols[symbol];
		dropdownFrom.appendChild(opt);
	}
}

// function to call the api and convert currencies
function callAPI(from, to, amount) {
	fetch(
		`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
		requestOptions
	)
		.then((response) => response.json())
		.then((data) => {
			let { result } = data;
			res.textContent = result;
		})
		.catch((error) => {
			console.log("error is this : ", error);
			res.textContent = `ERROR : ${error}`;
		});
}

document.addEventListener("DOMContentLoaded", () => {
	document
		.querySelector("#currencyConverter")
		.addEventListener("submit", (event) => {
			event.preventDefault();

			let {
				target: { to, from, amount },
			} = event;

			callAPI(from.value, to.value, amount.valueAsNumber);
		});
	document.querySelector(".icon").addEventListener("click", (event) => {
		let from = dropdownFrom.value;
		let to = dropdownTo.value;

		dropdownTo.value = from;
		dropdownFrom.value = to;
	});
});
