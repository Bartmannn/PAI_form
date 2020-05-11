var name; var surname; var age; var nr; var ZIP; var place; var email; var phone; var hour; var minutes; var NFZ; var date; var symptoms = ['','','','','']; var areaContent = ''; var symptoms2 = [];

function giveName(){
    name = document.getElementById('name').value;
}

function giveSurname(){
    surname = document.getElementById('surname').value;
}

function giveAge(){
    age = document.getElementById('age').value;
}

function giveStreet(){
    street = document.getElementById('street').value;
}

function giveNumber(){
    number = document.getElementById('number').value;
}

function giveZIP(){
    ZIP = document.getElementById('ZIP').value;
}

function givePlace(){
    place = document.getElementById('place').value;
}

function giveEmail(){
    email = document.getElementById('email').value;
}

function givePhone(){
    phone = document.getElementById('phone').value;
}

function giveHour(){
    hour = document.getElementById('hour').value;
}

function giveN_minutes(){
    minutes = document.getElementById('n_minutes').value;
}

function giveR_minutes(){
    minutes = document.getElementById('r_minutes').value;
}

function giveNFZ(){
    NFZ = document.getElementById('NFZ').value;
}

function giveDate(){
    date = document.getElementById('date').value;
}

function giveTextAreaContent(){
    areaContent = document.getElementById('other_info').value;
}


function giveSymptoms(ID,index){
    if (document.getElementById(ID).checked == true){
        symptoms[index] += document.getElementById(ID).value;
    }
    else {
        symptoms[index] = '';
    }
}

function changeTimeForRange(){
    document.getElementById('r_minutes').value = document.getElementById('n_minutes').value;
}

function changeTimeForNumber(){
    document.getElementById('n_minutes').value = document.getElementById('r_minutes').value;
}

function disableMinutes(){
    if (hour == 16){
        document.getElementById('n_minutes').value = 0;
        document.getElementById('r_minutes').value = 0;
        minutes = '0';
        document.getElementById('n_minutes').disabled = true;
        document.getElementById('r_minutes').disabled = true;
    }
    else{
        document.getElementById('n_minutes').disabled = false;
        document.getElementById('r_minutes').disabled = false;
    }
}

function enableTextarea(){
    if (document.getElementById('other').checked == true){
        document.getElementById('other_info').style = 'display: block;'
    }
    else{
        document.getElementById('other_info').style = 'display: none;'
    }
}

function actualDate(){
    now = new Date();
    actDate = toTwoLetters(now.getFullYear().toString())+'-'+toTwoLetters((now.getMonth()+1).toString())+'-'+toTwoLetters(now.getDate().toString());
    //document.write(actDate);
    document.getElementById('date').min = actDate;
}

function toTwoLetters(string){
    if (string.length < 2) return ('0'+string);
    else return string;
}

function minutesEqualizer(){
    var zm = document.getElementById('n_minutes').value;
    if (zm == 0 || zm == 15 || zm == 30 || zm == 45) console.log('JUPI!')
    else document.getElementById('n_minutes').value = 0;
}



function pageRender(){
    var c = 0;
    for (var i=0;i<symptoms.length;i++){
        if (symptoms[i] != ''){
            symptoms2[c] = symptoms[i];
            c++;
        }
    }
    screen = window.open();

    screen.document.write('<link rel="stylesheet" href="style.css">');
    screen.document.write('<div id="paperSheet">');
    screen.document.write('<h1 style="font-size: 60px; text-align:center;">Podsumowanie</h1>')
    screen.document.write('<hr style="margin-bottom: 40xp;">');

    screen.document.write('<br><br>');
    screen.document.write('<div id="customerInfo" style="text-align: right;">')
    screen.document.write(name +' '+ surname);
    screen.document.write('<br>');
    screen.document.write('Ul. '+street+' '+number);
    screen.document.write('<br>');
    screen.document.write(ZIP+' '+place);

    screen.document.write('</div>')
    screen.document.write('<br><br>');
    screen.document.write('<u>Kod potwierdzenia rejestracji:</u> '+date[8]+date[9]+date[5]+date[6]+'_'+toTwoLetters(hour)+toTwoLetters(minutes)+'_'+name[0]+surname[0]+String.fromCharCode(40+name.length+surname.length));
    screen.document.write('<br><br>');
    screen.document.write('Data wizyty: '+date);
    screen.document.write('<br><br>');
    screen.document.write('<table>');
    screen.document.write('<tr>');
    screen.document.write('<td>godz:</td><td>lekarz:</td><td>nr pokoju</td>');
    screen.document.write('</tr>');
    screen.document.write('<tr>');
    screen.document.write('<td>'+toTwoLetters(hour)+':'+toTwoLetters(minutes)+'</td>');
    if (hour == 8 || hour == 9 || (hour == 10 && minutes == 0)) screen.document.write('<td>Alojzy Tabsiński</td><td style="text-align:center;">5</td>');
    else if ((hour == 10 && minutes > 0) || hour == 11 || (hour == 12 && minutes == 0)) screen.document.write('<td>Marcelina Bańkowska</td><td style="text-align:center;">13</td>');
    else if ((hour == 12 && minutes > 0) || hour == 13 || (hour == 14 && minutes == 0)) screen.document.write('<td>Władimir Pikuś</td><td style="text-align:center;">8</td>');
    else screen.document.write('<td>Constantin Searoup</td><td style="text-align:center;">11</td>')

    screen.document.write('</tr>');
    screen.document.write('</table>');
    screen.document.write('<br><br>');
    screen.document.write('Zgłoszone objawy chorobowe: ');
    for (var i=0;i<symptoms2.length;i++){
        if (i != symptoms2.length-1) screen.document.write(symptoms2[i]+', ');
        else screen.document.write(symptoms2[i]);
    }
    if (areaContent != '') screen.document.write(', '+areaContent);
    screen.document.write('.');
    screen.document.write('<br><br>');
    screen.document.write('<hr>');
    screen.document.write('</div>');

}