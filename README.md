Test pro kódery
===============

Toto je má implementace testu pro kódery v rámci přijímacího řízení do [Etnetery](https://www.etnetera.cz/). **Výsledná
 stránka lze najít v souboru `dist/index.html`.**
 

Pro zápis stylopisů jsem použil preprocesor _LESS_ a metodiku _BEM_. _JavaScript_ je vanilkový. 🍦



## Struktura projektu

Pro rychlé nastavení vývojového prostředí jsem vyzkoušel [Pingy CLI](https://pin.gy/cli/) (i když na _Grunt_ nakonec 
také došlo). Z&nbsp;tohoto důvodu je struktura projektu trochu jiná, než bych si v&nbsp;ideálním případě představoval (nyní 
jsou skripty v&nbsp;adresáři a `scripts` a stylopisy ve `styles`). Jsem toho názoru, že každý skript a stylopis přísluší nějaké komponentě a vše na 
webu je komponenta (např. dle taxonomie _Atomic Design_). V současné době se snažím projekty vést tak, aby každá 
komponenta měla vlastní adresář, který v&nbsp;sobě obsahuje styly i skripty – u kódování takovéto jednorázové šablony 
ale nemá smysl tomu věnovat takovou péči. 🙂



## Knihovny

Pro carousel jsem použil _vanilla JS_ řešení třetí strany – knihovnu [lory](http://meandmax.github.io/lory/). Kód 
tooltipu vychází z&nbsp;[Balloon.css](https://kazzkiq.github.io/balloon.css/).



## Příkazy pro vývoj

* `pingy dev` – spustí lokální vývojový server s automatickou aktualizací výstupu v prohlížeči
* `grunt concatJs` – sloučení JS knihoven třetích stran do souboru `vendor.js`
* `pingy export` – vygeneruje výsledný web do adresáře `dist` 
* `grunt postcss` – post-processing CSS kódu v adresáři `dist`
* `grunt bs` – spustí [Browsersync](https://www.browsersync.io/) server pro testování na mobilních zařízení na 
lokální síti



## Favicon

Chybí. 😭