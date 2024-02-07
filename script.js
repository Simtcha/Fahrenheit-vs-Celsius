/*
Pokud pečete podle anglických receptů, často se po váš požaduje rozehřát troubu na uvedenou teplotu. 
Pokud si ovšem neuvědomíte, že Američané používají pro měření teploty stupně Fahrenheita namísto Celsia, bude vás na konci pečení čekat nemilé překvapení.
Nastudujte si na České Wikipedii jak se převádějí stupně Fahrenheita na stupně Celsia a vytvořte webovou stránku, která takový převod provede. 
Vaše stránka se zeptá uživatele teplotu ve stupních Fahrenheita a pomocí document.body.innerHTML vypíše její ekvivalent ve stupních Celsia. */

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

const stupneF = prompt("Zadej Fahrenheit stupně: ")
stupneCelsia = round(((5 * (stupneF- 32))/9),1)

document.body.innerHTML += "<section>" + stupneF + " °F je přesně " + stupneCelsia + " °C. " + "</section>"

if (stupneCelsia > 25) {
    document.body.innerHTML += "<p>"+ "Sakra teplo";
  } else if ((stupneCelsia < 25 && stupneCelsia  > 0)) {
    document.body.innerHTML += "<p>"+ "To se dá";
  } else { 
    document.body.innerHTML += "<p>"+ "Sakra zima";
  }
  