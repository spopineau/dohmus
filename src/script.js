/*jslint plusplus: true, eqeq: true*/
"use strict";

function closeOnclick(close) {
    var div;
    close.onclick = function () {
        div = this.parentElement;
        div.style.display = "none";
    };

}

function listaddevenListener(list) {

    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);

}


function gestionLI() {

    var myNodelist, i, close, list,
        span, txt;

    // Create a "close" button and append it to each list item
    myNodelist = document.getElementsByTagName("LI");
    for (i = 0; i < myNodelist.length; i++) {
        span = document.createElement("SPAN");
        txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {

        closeOnclick(close[i]);

    }

    // Add a "checked" symbol when clicking on a list item
    //    var list = document.querySelector('ul');

    for (i = 1; i <= document.getElementsByClassName("clsTableau").length; i++) {
        list = document.querySelector("#monUL" + i);
        listaddevenListener(list);
    }

}

// Create a new list item when clicking on the "Add" button
function newElement(num) {
    var li, inputValue, t, span, txt, close, i;

    li = document.createElement("li");
    inputValue = document.getElementById("InputTitre" + num).value;
    t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        /*global alert*/
        alert("You must write something!");
    } else {
        document.getElementById("monUL" + num).appendChild(li);
    }
    document.getElementById("InputTitre" + num).value = "";

    span = document.createElement("SPAN");
    txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        closeOnclick(close[i]);
    }
}

function toto() {
    alert("toto");
}

function creationclsTableau(idPosFlex, i) {
    var Posflex, d, divclsTableau, divheader, h, input, span, ul;
    d = document.getElementById(idPosFlex);
    divclsTableau = document.createElement("div");
    divclsTableau.setAttribute("class", "clsTableau");

    divheader = document.createElement("div");
    divheader.setAttribute("class", "header");

    h = document.createElement("h2");
    h.innerHTML = "Param" + i;

    input = document.createElement("input");
    input.setAttribute("id", "InputTitre" + i);
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "titre test ...");
    span = document.createElement("span");
    span.setAttribute("class", "addBtn");
    span.innerHTML = "Add";
    span.addEventListener('click', function () {
        newElement(i);
    });

    divheader.appendChild(h);
    divheader.appendChild(input);
    divheader.appendChild(span);

    ul = document.createElement("ul");
    ul.setAttribute("id", "monUL" + i);

    divclsTableau.appendChild(divheader);
    divclsTableau.appendChild(ul);

    d.appendChild(divclsTableau);
    

}

function start() {
    var i;
    for (i = 1; i <= 5; i++) {
        creationclsTableau("PosFlex1", i);
    }
    for (i = 6; i <= 10; i++) {
        creationclsTableau("PosFlex2", i);
    }
    gestionLI();
        

}

start();
