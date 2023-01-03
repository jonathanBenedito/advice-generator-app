const adviceButton = document.querySelector('#adviceButton');

async function getNewAdvice() {
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    return await response.json();
}

function updateAdviceId(adviceId) {
    const adviceIdElement = document.querySelector('#adviceId');
    adviceIdElement.innerHTML = `ADVICE #${adviceId}`;
}

async function swapAdvice() {
    const adviceDescription = document.querySelector('#adviceDescription');
    const newAdvice = await getNewAdvice();
    updateAdviceId(newAdvice.slip.id);
    adviceDescription.innerHTML = newAdvice.slip.advice;
}

adviceButton.addEventListener('click', swapAdvice);

swapAdvice();