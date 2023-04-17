window.addEventListener("DOMContentLoaded", () => {

    let mainSection = document.querySelector(".main-section"),
        light = document.querySelector(".light"),
        map = document.querySelector(".map"),
        imgmap = document.getElementById("imgmap"),
        whompingWillow = document.querySelector(".whompingWillow"),
        hippogriff = document.querySelector(".hippogriff"),
        express = document.querySelector(".express"),
        gringotts = document.querySelector(".gringotts"),
        coords1 = document.querySelector(".coords1"),
        coords2 = document.querySelector(".coords2"),
        coords3 = document.querySelector(".coords3"),
        coords4 = document.querySelector(".coords4");

    mainSection.addEventListener("mousemove", (e) => {
        map.classList.remove("hide");
    }, false);

    light.addEventListener("mousemove", (e) => {
        if (!whompingWillow.classList.contains("active") || !hippogriff.classList.contains("active") || !express.classList.contains("active") || !gringotts.classList.contains("active")){
            light.style.background = `radial-gradient(circle at ${e.offsetX}px ${e.offsetY + 30}px, transparent 3%, rgba(0,0,0,0.98) 8%)`;
        }
    }, false);

    coords1.coords = `${(23.6 * imgmap.offsetLeft / 100).toFixed(0)}px,${(33.3 * imgmap.offsetTop / 100).toFixed(0)}px,30px`;
    coords1.addEventListener("click", (e) => {
        e.preventDefault();
        whompingWillow.classList.add("active");
    }, false);

    coords2.coords = `${(34.2 * imgmap.offsetLeft / 100).toFixed(0)}px,${(44.4 * imgmap.offsetTop / 100).toFixed(0)}px,30px`;
    coords2.addEventListener("click", (e) => {
        e.preventDefault();
        hippogriff.classList.add("active");
    }, false);

    coords3.coords = `${(52.2 * imgmap.offsetLeft / 100).toFixed(0)}px,${(37.6 * imgmap.offsetTop / 100).toFixed(0)}px,30px`;
    coords3.addEventListener("click", (e) => {
        e.preventDefault();
        express.classList.add("active");
    }, false);

    coords4.coords = `${(75.3 * imgmap.offsetLeft / 100).toFixed(0)}px,${(30.2 * imgmap.offsetTop / 100).toFixed(0)}px,30px`;
    coords4.addEventListener("click", (e) => {
        e.preventDefault();
        gringotts.classList.add("active");
    }, false);

    light.addEventListener("click", (e) => {
        if (whompingWillow.classList.contains("active") && hippogriff.classList.contains("active") && express.classList.contains("active") && gringotts.classList.contains("active")){
            light.style.background = `transparent 100%`;
        }
    }, false);

    // contextmenu
    let menuDisplayed = false,
        menuBox = null;

    window.addEventListener("contextmenu", (ev) => {
        let left = ev.clientX;
        let top = ev.clientY;
        menuBox = document.querySelector(".menu");
        menuBox.style.left = left + 5 + "px";
        menuBox.style.top = top + 5 + "px";
        menuBox.style.display = "block";

        ev.preventDefault();

        menuDisplayed = true;
        });

    window.addEventListener("click", (ev) => {
        if (menuDisplayed == true) {
            menuBox.style.display = "none";
            menuDisplayed = false;
        }
    });

    // modal-all
    let btn = document.querySelector(".btn");
    let modalX = document.querySelector(".modalX");
    let modal = document.querySelector(".modal-all");

    modalX.addEventListener("click", () => {
        modal.classList.remove("modal-active");
    });

    btn.addEventListener("click", () => {
        modal.classList.add("modal-active");
    });

    let again = document.querySelector(".again");
    again.addEventListener("click", () => {
        whompingWillow.classList.remove("active");
        hippogriff.classList.remove("active");
        express.classList.remove("active");
        gringotts.classList.remove("active");
        map.classList.add("hide");
        });

}, false);