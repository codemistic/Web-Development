const inputs = document.querySelectorAll('.controls input');
// controls input means all inputs which are in controls div 


function handelUpdate() {
    const suffix = this.dataset.sizing || '';
    // sizing is data property set in indexedDB.html
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
    // set property function syntax is setProperty('whixh variable is to changed , what should be its new value ')

    console.log(this.value);

}

inputs.forEach(input => input.addEventListener('change', handelUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handelUpdate));