const p_code = document.querySelectorAll('.value a')[1].textContent;
const p_name = document.querySelectorAll('.breadcrumb a')[2].textContent;
const ques = { p_code, p_name };
chrome.runtime.sendMessage({ entry: ques });