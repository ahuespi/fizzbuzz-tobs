function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            var img = document.createElement("img");
            img.src = "/img/fizzbuzz.png";
            img.className = "content fizzbuzz"
            var src = document.getElementById("main");

            var img = document.createElement("span");
            img.innerText = `${i} - Fizz Buzz`;
            img.className = "content"
            var src = document.getElementById("main");
            src.appendChild(img)
        } else if (i % 3 == 0) {
            var img = document.createElement("img");
            img.src = "/img/fizz.png";
            img.className = "content fizz"
            var src = document.getElementById("main");
            src.appendChild(img);
        } else if (i % 5 == 0) {
            var img = document.createElement("img");
            img.src = "/img/buzz.png";
            img.className = "content buzz"
            var src = document.getElementById("main");
            src.appendChild(img);
        } else {
            var img = document.createElement("span");
            img.innerText = i;
            img.className = "content"
            var src = document.getElementById("main");
            src.appendChild(img)
        }
    }
}

fizzbuzz()