document.addEventListener("DOMContentLoaded", () => {
    let counter = 0;
    let h1Element = document.getElementById("counter");
    let pause = document.querySelector('button#pause');
    let heart = document.querySelector('button#heart');
    let minus = document.querySelector('button#minus');
    let plus = document.querySelector('button#plus');
    let likes = document.querySelector('ul.likes');
    let likeElement = document.createElement('li');


    // setinterval
    let interval = setInterval(() => {
        counter += 1;
        h1Element.innerHTML = counter;
    }, 1000);


    // pause interval
    pause.addEventListener("click", () => {
        

        if (pause.innerText === "pause") {
            console.log("paused");
            clearInterval(interval);

            // change pause to resume
            pause.innerHTML = "resume";

            // disable all buttons
            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true;

        } else {
            interval = setInterval(() => {
                counter += 1;
                h1Element.innerHTML = counter;
                pause.innerHTML = "pause";
                plus.disabled = false;
                minus.disabled = false;
                heart.disabled = false;
            }, 1000)
        }
    });


    // increment or decrement counter
    plus.addEventListener('click', () => {
        ++counter;
        h1Element.innerHTML = counter;
    });

    minus.addEventListener('click', () => {
        --counter;
        h1Element.innerHTML = counter;
    });

    // add like event 
    heart.addEventListener('click', () => {
        likeElement.innerHTML = `${counter} has been liked`;
        likes.appendChild(likeElement);
    });
})