String.prototype.escapeDiacritics = function()
{
    return this.replace(/ą/g, 'a').replace(/Ą/g, 'A')
        .replace(/ć/g, 'c').replace(/Ć/g, 'C')
        .replace(/ę/g, 'e').replace(/Ę/g, 'E')
        .replace(/ł/g, 'l').replace(/Ł/g, 'L')
        .replace(/ń/g, 'n').replace(/Ń/g, 'N')
        .replace(/ó/g, 'o').replace(/Ó/g, 'O')
        .replace(/ś/g, 's').replace(/Ś/g, 'S')
        .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
        .replace(/ź/g, 'z').replace(/Ź/g, 'Z');
}


function mapy() {  
if(map.name == 'Ithan') {   

}
//Panel Główny 
$('<div id="panelik" style="background-image: url(http://s2.manifo.com/usr/2/2015/06/manager/panelik2.png); no-repeat; width: 200px; height: 300px; color: black; z-index:370;font-family: Arial, Helvetica, sans-serif; text-align: center; position: absolute; line-height: 50%"><div id="glowne" style="margin-top: 30px; margin-left: 20px; margin-right: 20px;"><span style="font-size: 20px"><b><i>Dodatek Klanu <br /><br />LsT</i></b><br /><span id="exp-click" style="font-size: 16px"><br /><br /><a><img src="http://i.imgur.com/ZQ4AR7l.gif" Tip="Wiadomości klanowe">     </a></span><span id="exp-tekst" style="font-size: 14px"></span><span id="e2-click" style="font-size: 16px"><a><img src="http://i.imgur.com/wW8cfJG.gif" Tip="Regulamin Klanu">      </a></span><span id="e2-tekst" style="font-size: 14px"><span id="b-click" style="font-size: 16px"><a><img src="http://img.margonem.pl/obrazki/itemy/neu/kh-mapa01.gif" Tip="Imprezy Klanowe">     </a></span><span id="q-tekst" style="font-size: 14px"><img src="http://img.margonem.pl/obrazki/itemy/zlo/tuz103.gif" Tip="Konkursy Klanowe"></span></span><span id="q-click" style="font-size: 14px"><br /><br><img src="http://game8.margonem.pl/obrazki/npc/obj/tuz098.gif" Tip="Depozyt Klanowy">     </span></span><span id="a-click" style="font-size: 14px"><img src="http://img.margonem.pl/obrazki/itemy/pap/kalamarz04.gif" Tip="Nieobecności">     </span></span><span id="g-click" style="font-size: 14px"><img src="http://game8.margonem.pl/obrazki/itemy/pap/pap48.gif" Tip="Wyniki Konkursów">     </span></span><span id="o-click" style="font-size: 14px"><img src="http://www.margonem.pl/obrazki/itemy/zlo/worek7.gif" Tip="Ofetry Klanowe"><br></br><br></br><br></br><br></span></span><span id="panel-zamknij" style="font-size: 15px"><br /><br /><br /><a><u>Zamknij</u></a><br /></span><span id="info-dod" style="font-size: 10px"><br /><br /></br> Twórca dodatku - Neteflox </div></br></span>').hide().appendTo('#centerbox');
 
//on/off
$('<div style="position:absolute; z-index:350; left:130px; bottom:39px; width: 22px; height: 22px;"><center><img tip="Dodatek Klanowy"; src="http://s2.manifo.com/usr/2/2015/06/manager/lst537343346.png"></div></center>').css('opacity','1.0').appendTo('#panel').click(function(){ 
$('#panelik').toggle();
});
 
//Wiadomości Klanowe
$('#exp-click').click(function() { mAlert('<center><b><i>Wiadomości Klanowe</i></b><br><font style="color:#025076">Brak</font><br><br></font><br></font><br></center>');   
});
 
//Imprezy Klanowe
$('#b-click').click(function() { mAlert('<center><b><i>Imprezy Klanowe<br><br></i></b><br><font style="color:#025076">Brak zapowiadzianych</font>');   
});
 
//Konkursy klanowe
  $('#q-tekst').click(function() { mAlert('<center><b><i>Konkursy Klanowe<br><font style="color:red"><br>Konkurs Exp II</font></b><br>Informacje strona prywatnej</b>');   
});
 
//Regulamin
  $('#e2-click').click(function() { mAlert('<center><b><i>Regulamin Klanu</b><br><br>1.Kłótnie na chacie klanowym są zabronione i karane upomnieniem.<br><br>2. Staramy się unikać przeklinania na chacie klanowym.<br><br>3. Gdy któryś z klanowiczów reprezentuje nieodpowiednie zachowanie, to zgłoś zaistniałą sytuację do założyciela, bądź rady klanu.<br><br>4. Jeśli inny klanowicz utrudnia ci grę poprzez np. wyzywanie , zabieranie expa poprzez bicie mobów itd,patrz punkt wyżej. Pamiętaj, że jeśli nie masz dowodu w postaci screena/ów, to nic nie poradzimy. W tej sprawie można kontaktować się zarówno na priv, jak i na pocztę.<br><br>5.Pieniądze z klanu można pożyczyć dopiero wtedy gdy da się jakąś broń lub zbrojkę lub jakiś przedmiot hero uni lege o podobnej wartości pod zastaw.<br><br>6.Ten kto znalazł herosa ma prawo do wybrania strony lootu [prawa albo lewa]. Jeżeli spadły 2 hera, a np. została zaklepana lewa strona, to hero prawe ma ten kto złapie. W przypadku zdobycia legendy 50% bierze osoba, która herosa znalazła, a 50% osoba, która złapała legendę.<br><br>7. Kradzież lootu / Zabicie klanowicza z premedytacją / otrzymanie 3 ostrzeżeń jest karana natychmiastowym wydaleniem z klanu. <br><br><br></i></center>');
});
 
//Depozyt
  $('#q-click').click(function() { mAlert('<center><b><i>Depozyt klanowy</b></i><br><br><b></b>Do depozytu każdy może przekazać przedmioty <i>(min unikat lvl70+)</i> przesyłając je na pocztę do Neteflox. Przedmioty z depozytu wydawane są w granicach 10lvli i na waszą profesję na postaci na którą chcecie go otrzymać.<br><i>Depozyt dostępny tylko dla osob z opłaconym wpisowym.<br></i></center>');
});
 
//Nieobecności
$('#a-click').click(function() { mAlert('<center><b><i>Nieobecności<br><br>Nieaktywność w klanie (nieusprawiedliwiona)<br>000-100lvl / bez wpisowego 7 dni <br>101-150lvl 15 dni <br>151-199lvl 20 dni<br>Powyżej 200lvl 30 dni<br>Po tym czasie wyrzucenie z klanu.</i></center>');
});
 
//Wyniki konkursów
  $('#g-click').click(function() { mAlert('<center><b><i>Wyniki Konkursów<br><br>Konkurs Exp I</i></b><br><i>I miejsce Nierealny 206-193 = 13 lvli<br>II miejsce Eturin 120-111 = 9 lvli <br>III miejsce H a Q 121-113 = 8 lvli<br></i>');   
});
 
//Oferty Klanowe
  $('#o-click').click(function() { mAlert('<center><b><i>Oferty Klanowe</b><br><font style="color:red"><br>Potem</font><br><br><b></b><br>');   
});
 
 
 
//zamknij
$('#panel-zamknij').click(function() { $('#panelik').hide();  });
 
 
 
  jQuery('<img id="myeqff" src="http://s2.manifo.com/usr/2/2015/06/manager/lst537343346.png" width="22px" height="22px" tip="<b>Znak Klanu LsT</b><b class=artefact>* Artefakt * <br>Exp +6%<br.</b><i class=looter>W dniu 14.06.13 został nałożony znak klanu LsT przez Neteflox na wszystkich klanowiczów.</i>" ctip = "t_item" alt="WEX">').css({position: 'absolute', top: '5px', left: '210px'}).appendTo("#panel");
 
   

 
  $("#chattxt").prepend('<div class="sys_red" id="reklamaChat"><font style="color:red">Witam w klanie LsT!</div>');   
 
   };
 
g.loadQueue.push({fun: mapy,data: ''});
//Twórca Neteflox
