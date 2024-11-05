function Validate(){
    ValidateName();
    ValidateSurname();
    ValidateStreet();
    ValidateFlatNumber();
    ValidateHouseNumber();
    ValidatePhoneNumber();
    ValidateDate();
    ValidatePassword();
    ValidateCity();
    ValidateCountry();
}

function ValidateName() {
    var inputValue = document.getElementById("imie").value;
    var input = document.getElementById("imie");
    var pattern = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+$/;
    var wynik = pattern.test(inputValue);
    var container = document.getElementById("form-name");
    var errorParagraph = document.getElementById("error-imie");

    if (wynik) {
        console.log("Imię jest poprawne.");
        input.classList.remove("input-red");
        if (errorParagraph) {
            container.removeChild(errorParagraph);
        }
    } else {
        console.log("Imię powinno zaczynać się wielką literą, a reszta liter powinna być mała.");
        if (!errorParagraph) {
            errorParagraph = document.createElement("p");
            errorParagraph.id = "error-imie";
            errorParagraph.textContent = "Imię powinno zaczynać się wielką literą, a reszta liter powinna być mała.";
            container.appendChild(errorParagraph);
        }
        input.classList.add("input-red");
    }
}


function ValidateSurname() {
    var inputValue = document.getElementById("nazwisko").value;
    var input = document.getElementById("nazwisko");
    var pattern = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?$/;
    var wynik = pattern.test(inputValue);
    var container = document.getElementById("form-surname");
    var errorParagraph = document.getElementById("error-nazwisko");

    if (wynik) {
        console.log("Nazwisko jest poprawne.");
        input.classList.remove("input-red");
        if (errorParagraph) {
            container.removeChild(errorParagraph);
        }
    } else {
        console.log("Nazwisko powinno zaczynać się wielką literą i zawierać tylko litery (i ewentualnie kreskę).");
        if (!errorParagraph) {
            errorParagraph = document.createElement("p");
            errorParagraph.id = "error-nazwisko";
            errorParagraph.textContent = "Nazwisko powinno zaczynać się wielką literą i zawierać tylko litery (i ewentualnie kreskę).";
            container.appendChild(errorParagraph);
        }
        input.classList.add("input-red");
    }
}

function ValidateStreet() {
    var inputValue = document.getElementById("ulica").value;
    var input = document.getElementById("ulica");
    var pattern = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+( [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?$/;
    var wynik = pattern.test(inputValue);
    var container = document.getElementById("form-street");
    var errorParagraph = document.getElementById("error-ulica");

    if (wynik) {
        console.log("Ulica jest poprawna.");
        input.classList.remove("input-red");
        if (errorParagraph) {
            container.removeChild(errorParagraph);
        }
    } else {
        console.log("Każde słowo nazwy ulicy powinno zaczynać się wielką literą.");
        if (!errorParagraph) {
            errorParagraph = document.createElement("p");
            errorParagraph.id = "error-ulica";
            errorParagraph.textContent = "Każde słowo nazwy ulicy powinno zaczynać się wielką literą.";
            container.appendChild(errorParagraph);
        }
        input.classList.add("input-red");
    }
}

function ValidateHouseNumber() {
    var inputValue = document.getElementById("nrDomu").value;
    var input = document.getElementById("nrDomu");
    var pattern = /^[0-9]+$/;
    var wynik = pattern.test(inputValue);
    var container = document.getElementById("form-house-number");
    var errorParagraph = document.getElementById("error-nrDomu");

    if (wynik) {
        console.log("Numer domu jest poprawny.");
        input.classList.remove("input-red");
        if (errorParagraph) {
            container.removeChild(errorParagraph);
        }
    } else {
        console.log("Numer domu jest niepoprawny.");
        if (!errorParagraph) {
            errorParagraph = document.createElement("p");
            errorParagraph.id = "error-nrDomu";
            errorParagraph.textContent = "Numer domu jest niepoprawny.";
            container.appendChild(errorParagraph);
        }
        input.classList.add("input-red");
    }
}

function ValidateFlatNumber() {
    var inputValue = document.getElementById("nrMieszkania").value;
    var input = document.getElementById("nrMieszkania");
    var pattern = /^[0-9]+$/;
    var wynik = pattern.test(inputValue);
    var container = document.getElementById("form-flat-number");
    var errorParagraph = document.getElementById("error-nrMieszkania");

    if (wynik) {
        console.log("Numer mieszkania jest poprawny.");
        input.classList.remove("input-red");
        if (errorParagraph) {
            container.removeChild(errorParagraph);
        }
    } else {
        console.log("Numer mieszkania jest niepoprawny.");
        if (!errorParagraph) {
            errorParagraph = document.createElement("p");
            errorParagraph.id = "error-nrMieszkania";
            errorParagraph.textContent = "Numer mieszkania jest niepoprawny.";
            container.appendChild(errorParagraph);
        }
        input.classList.add("input-red");
    }
}


function ValidatePhoneNumber() {
    var inputValue = document.getElementById("nrTelefonu").value;
    var input = document.getElementById("nrTelefonu");
    var pattern = /^[0-9]{9}$/;
    var wynik = pattern.test(inputValue);
    var container = document.getElementById("form-phone-number");
    var errorParagraph = document.getElementById("error-nrTelefonu");

    if (wynik) {
        console.log("Numer telefonu jest poprawny.");
        input.classList.remove("input-red");
        if (errorParagraph) {
            container.removeChild(errorParagraph);
        }
    } else {
        console.log("Numer telefonu powinien składać się z 9 cyfr.");
        if (!errorParagraph) {
            errorParagraph = document.createElement("p");
            errorParagraph.id = "error-nrTelefonu";
            errorParagraph.textContent = "Numer telefonu powinien składać się z 9 cyfr.";
            container.appendChild(errorParagraph);
        }
        input.classList.add("input-red");
    }
}

function ValidateDate() {
    var inputValue = document.getElementById("dataUrodzenia").value;
    var input = document.getElementById("dataUrodzenia");
    var pattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}$/;
    var wynik = pattern.test(inputValue);
    var container = document.getElementById("form-date");
    var errorParagraph = document.getElementById("error-dataUrodzenia");

    if (wynik) {
        console.log("Data jest poprawna.");
        input.classList.remove("input-red");
        if (errorParagraph) {
            container.removeChild(errorParagraph);
        }
    } else {
        console.log("Data jest niepoprawna.");
        if (!errorParagraph) {
            errorParagraph = document.createElement("p");
            errorParagraph.id = "error-dataUrodzenia";
            errorParagraph.textContent = "Data jest niepoprawna.";
            container.appendChild(errorParagraph);
        }
        input.classList.add("input-red");
    }
}





function ValidatePassword() {
    var inputValue = document.getElementById("haslo").value;
    var input = document.getElementById("haslo");
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    // (?=x - oznacza ze x ma byc spelniony
    // .* - oznacza dowolny znak powtarzający 0 lub więcej razy
    // \d - oznacza cyfre ----> to samo co [0-9]
    // \W dowolny znak ,   \W_ dowonlu znak lub podłoga
    //.{8,} - minimum 8 znaków
    var wynik = pattern.test(inputValue);
    var container = document.getElementById("form-password");
    var errorParagraph = document.getElementById("error-haslo");

    if (wynik) {
        console.log("Hasło jest poprawne.");
        input.classList.remove("input-red");
        if (errorParagraph) {
            container.removeChild(errorParagraph);
        }
    } else {
        console.log("Hasło powinno zawierać wielką literę, małą literę, cyfrę oraz znak specjalny.");
        if (!errorParagraph) {
            errorParagraph = document.createElement("p");
            errorParagraph.id = "error-haslo";
            errorParagraph.textContent = "Hasło powinno zawierać wielką literę, małą literę, cyfrę oraz znak specjalny.";
            container.appendChild(errorParagraph);
        }
        input.classList.add("input-red");
    }
}

function ValidateCity() {
    var inputValue = document.getElementById("Miasto").value;
    var input = document.getElementById("Miasto");
    var pattern = /^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+( [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?$/;
    var wynik = pattern.test(inputValue);
    var container = document.getElementById("form-city");
    var errorParagraph = document.getElementById("error-Miasto");

    if (wynik) {
        console.log("Miasto jest poprawne.");
        input.classList.remove("input-red");
        if (errorParagraph) {
            container.removeChild(errorParagraph);
        }
    } else {
        console.log("Każde słowo nazwy miasta powinno zaczynać się wielką literą.");
        if (!errorParagraph) {
            errorParagraph = document.createElement("p");
            errorParagraph.id = "error-Miasto";
            errorParagraph.textContent = "Każde słowo nazwy miasta powinno zaczynać się wielką literą.";
            container.appendChild(errorParagraph);
        }
        input.classList.add("input-red");
    }
}

function ValidateCountry() {
    var inputValue = document.getElementById("Panstwo").value;
    var input = document.getElementById("Panstwo");
    var pattern = /^[A-Z][a-z]+( [A-Z][a-z]+)?$/;
    var wynik = pattern.test(inputValue);
    var container = document.getElementById("form-country");
    var errorParagraph = document.getElementById("error-Panstwo");

    if (wynik) {
        console.log("Państwo jest poprawne.");
        input.classList.remove("input-red");
        if (errorParagraph) {
            container.removeChild(errorParagraph);
        }
    } else {
        console.log("Każde słowo nazwy państwa powinno zaczynać się wielką literą, a reszta liter powinna być mała.");
        if (!errorParagraph) {
            errorParagraph = document.createElement("p");
            errorParagraph.id = "error-Panstwo";
            errorParagraph.textContent = "Każde słowo nazwy państwa powinno zaczynać się wielką literą, a reszta liter powinna być mała.";
            container.appendChild(errorParagraph);
        }
        input.classList.add("input-red");
    }
}