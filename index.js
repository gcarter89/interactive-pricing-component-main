//slider component
const slider = document.getElementById('range');

//output components
const price = document.getElementById('price');
const view = document.getElementById('views');

//checkbox component
const checkbox = document.getElementById('checkbox');

//array of prices & views
const prices = [8.00, 12.00, 16.00, 28.00, 36.00]
const views = ['50K','60K', '100K', '200K', '750K']

function handleInput(discount = 1) {
    price.innerHTML = `$${(prices[slider.value] * discount).toFixed(2)}`;
    view.innerHTML = `${views[slider.value]} PAGEVIEWS`
    slider.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%)${(slider.value / 4)*100}%, hsl(224, 65%, 95%) ${(slider.value / 4)*100}%)`;
}

// set default value
handleInput()

//default slider input function
slider.oninput = () => {
    handleInput()
}

//listen for checkbox changes and toggle between discount
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        handleInput(0.75)
        slider.oninput = () => {
            handleInput(0.75)
        }
    } else {
        handleInput()
        slider.oninput = () => {
            handleInput()
        }
    }
})