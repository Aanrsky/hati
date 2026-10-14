
// =====================================================
// PESAN KECIL UNTUKMU
// =====================================================


// ================================
// HELPER
// ================================

function $(id) {
    return document.getElementById(id);
}


// ================================
// SCREEN
// ================================

const screens = {
    home: $("home"),
    letter: $("letter"),
    question: $("question"),
    game: $("game"),
    final: $("final")
};


function showScreen(screen) {

    Object.values(screens).forEach(
        function (item) {

            if (item) {
                item.classList.add("hidden");
            }

        }
    );


    if (screen) {
        screen.classList.remove("hidden");
    }

}


// ================================
// BACKGROUND HEARTS
// ================================

const hearts =
    $("hearts");


function createHeart() {

    if (!hearts) {
        return;
    }


    const heart =
        document.createElement("div");


    heart.className =
        "bg-heart";


    heart.textContent =
        Math.random() > .25
            ? "♥"
            : "♡";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        8 +
        Math.random() * 13 +
        "px";


    heart.style.animationDuration =
        7 +
        Math.random() * 8 +
        "s";


    hearts.appendChild(
        heart
    );


    setTimeout(
        function () {
            heart.remove();
        },
        16000
    );

}


setInterval(
    createHeart,
    500
);


for (
    let i = 0;
    i < 15;
    i++
) {

    setTimeout(
        createHeart,
        i * 120
    );

}


// ================================
// OPEN GIFT
// ================================

const openButton =
    $("openButton");


const gift =
    $("gift");


function openLetter() {

    if (gift) {

        gift.style.transform =
            "scale(1.15) rotate(-5deg)";

    }


    setTimeout(
        function () {

            showScreen(
                screens.letter
            );

            startTyping();

        },
        350
    );

}


if (openButton) {

    openButton.addEventListener(
        "click",
        openLetter
    );

}


if (gift) {

    gift.addEventListener(
        "click",
        openLetter
    );

}


// ================================
// TYPING LETTER
// ================================

let typingStarted = false;


const letterText =
    "Aku sebenarnya cuma mau bilang sesuatu yang sederhana. Ada orang-orang yang kalau ngobrol sama mereka, waktu rasanya jadi lebih cepat. Dan entah kenapa... kamu termasuk salah satunya. Jadi hari ini aku bikin sesuatu kecil buat kamu. Bukan sesuatu yang serius kok. Cuma sedikit pesan, sedikit permainan, dan banyak hati. ♥";


function startTyping() {

    if (typingStarted) {
        return;
    }


    typingStarted = true;


    const target =
        $("typingText");


    if (!target) {
        return;
    }


    target.textContent =
        "";


    let index = 0;


    const timer =
        setInterval(
            function () {

                target.textContent +=
                    letterText[index];


                index++;


                if (
                    index >=
                    letterText.length
                ) {

                    clearInterval(
                        timer
                    );

                }

            },
            28
        );

}


// ================================
// LETTER NEXT
// ================================

const letterNext =
    $("letterNext");


if (letterNext) {

    letterNext.addEventListener(
        "click",
        function () {

            showScreen(
                screens.question
            );

        }
    );

}


// ================================
// NO BUTTON
// ================================

const noButton =
    $("noButton");


const noMessage =
    $("noMessage");


const buttonArea =
    $("buttonArea");


let noCount = 0;


const noTexts = [

    "Eits 😭",

    "Kok gitu sih wkwk",

    "Jangan ditekan dong 😭",

    "Tombolnya kabur 🏃",

    "Hampir dapat 👀",

    "Coba yang sebelah 😭",

    "Aku tahu kamu bercanda 😌",

    "NO-nya malu sama kamu 💨"

];


function moveNoButton() {

    if (
        !noButton ||
        !buttonArea
    ) {
        return;
    }


    noCount++;


    const area =
        buttonArea.getBoundingClientRect();


    const button =
        noButton.getBoundingClientRect();


    const maxX =
        Math.max(
            90,
            area.width / 2 -
            button.width / 2 -
            10
        );


    const maxY =
        45;


    const x =
        (
            Math.random() * 2 - 1
        ) *
        maxX;


    const y =
        (
            Math.random() * 2 - 1
        ) *
        maxY;


    noButton.style.transform =
        `translate(${x}px, ${y}px)`;


    if (noMessage) {

        noMessage.textContent =
            noTexts[
                (noCount - 1) %
                noTexts.length
            ];

    }

}


if (noButton) {

    noButton.addEventListener(
        "mouseenter",
        moveNoButton
    );


    noButton.addEventListener(
        "pointerdown",
        function (event) {

            event.preventDefault();

            moveNoButton();

        }
    );


    noButton.addEventListener(
        "touchstart",
        function (event) {

            event.preventDefault();

            moveNoButton();

        },
        {
            passive: false
        }
    );

}


// ================================
// YES
// ================================

const yesButton =
    $("yesButton");


if (yesButton) {

    yesButton.addEventListener(
        "click",
        function () {

            celebration();


            setTimeout(
                function () {

                    showScreen(
                        screens.game
                    );

                },
                700
            );

        }
    );

}


// ================================
// CELEBRATION
// ================================

function celebration() {

    const symbols = [
        "♥",
        "♡",
        "✦",
        "✧"
    ];


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const item =
            document.createElement(
                "div"
            );


        item.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        item.style.position =
            "fixed";


        item.style.left =
            "50%";


        item.style.top =
            "50%";


        item.style.zIndex =
            "999";


        item.style.pointerEvents =
            "none";


        item.style.color =
            "#e77898";


        item.style.fontSize =
            12 +
            Math.random() * 18 +
            "px";


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            80 +
            Math.random() *
            180;


        item.animate(

            [
                {
                    transform:
                        "translate(-50%,-50%) scale(.2)",
                    opacity: 0
                },

                {
                    transform:
                        "translate(-50%,-50%) scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${Math.cos(angle) * distance}px),
                            calc(-50% + ${Math.sin(angle) * distance}px)
                        ) scale(.5)`,
                    opacity: 0
                }

            ],

            {
                duration:
                    800 +
                    Math.random() * 600,

                easing:
                    "ease-out"
            }

        );


        document.body.appendChild(
            item
        );


        setTimeout(
            function () {
                item.remove();
            },
            1600
        );

    }

}


// ================================
// MINI GAME
// ================================

const startGame =
    $("startGame");


const gameArea =
    $("gameArea");


const scoreElement =
    $("score");


let score = 0;

let gameRunning = false;

let gameTimer = null;


if (startGame) {

    startGame.addEventListener(
        "click",
        startMiniGame
    );

}


function startMiniGame() {

    if (gameRunning) {
        return;
    }


    gameRunning = true;

    score = 0;


    if (scoreElement) {

        scoreElement.textContent =
            "0";

    }


    const start =
        $("gameStart");


    if (start) {

        start.remove();

    }


    spawnGameHeart();

}


function spawnGameHeart() {

    if (
        !gameRunning ||
        !gameArea
    ) {
        return;
    }


    const heart =
        document.createElement(
            "button"
        );


    heart.className =
        "game-heart";


    heart.textContent =
        "♥";


    const maxX =
        Math.max(
            20,
            gameArea.clientWidth - 50
        );


    const maxY =
        Math.max(
            20,
            gameArea.clientHeight - 60
        );


    heart.style.left =
        Math.random() *
        maxX +
        "px";


    heart.style.top =
        Math.random() *
        maxY +
        "px";


    gameArea.appendChild(
        heart
    );


    let clicked = false;


    heart.addEventListener(
        "click",
        function () {

            if (clicked) {
                return;
            }


            clicked = true;


            score++;


            if (scoreElement) {

                scoreElement.textContent =
                    score;

            }


            heart.remove();


            if (score >= 5) {

                finishGame();

            } else {

                spawnGameHeart();

            }

        }
    );


    gameTimer =
        setTimeout(
            function () {

                if (
                    !clicked &&
                    heart.parentNode
                ) {

                    heart.remove();

                    spawnGameHeart();

                }

            },
            1200
        );

}


// ================================
// GAME FINISH
// ================================

function finishGame() {

    gameRunning = false;


    if (gameTimer) {

        clearTimeout(
            gameTimer
        );

    }


    celebration();


    setTimeout(
        function () {

            showScreen(
                screens.final
            );

        },
        800
    );

}


// ================================
// FINAL HEART
// ================================

const heartButton =
    $("heartButton");


const finalStatus =
    $("finalStatus");


if (heartButton) {

    heartButton.addEventListener(
        "click",
        function () {

            celebration();


            if (finalStatus) {

                finalStatus.textContent =
                    "♥ hati berhasil dikirim...";

            }

        }
    );

}


// ================================
// RESTART
// ================================

const againButton =
    $("againButton");


if (againButton) {

    againButton.addEventListener(
        "click",
        function () {

            score = 0;

            gameRunning = false;

            typingStarted = false;

            noCount = 0;


            if (scoreElement) {

                scoreElement.textContent =
                    "0";

            }


            if (noButton) {

                noButton.style.transform =
                    "translate(0,0)";

            }


            if (noMessage) {

                noMessage.textContent =
                    "";

            }


            showScreen(
                screens.home
            );

        }
    );

}


// ================================
// START
// ================================

showScreen(
    screens.home
);

console.log(
    "Pesan Kecil Untukmu berhasil dimuat 💗"
);