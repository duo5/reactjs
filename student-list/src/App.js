import React, { Component } from 'react';
import './App.css';
import StudentTable from './components/StudentTable';

const DATA = [{"id":1,"student_name":"mdebanke0","adress":"10519 Northfield Street","email":"ddeeny0@boston.com","phone":"(468) 6503544","gender":"Female"},
{"id":2,"student_name":"dwoodruff1","adress":"6961 Barby Place","email":"msiddle1@webnode.com","phone":"(969) 9946933","gender":"Male"},
{"id":3,"student_name":"jbiggin2","adress":"92841 Sutteridge Alley","email":"cgiorgielli2@cdc.gov","phone":"(562) 5341800","gender":"Female"},
{"id":4,"student_name":"elofty3","adress":"48646 Arapahoe Alley","email":"ldudgeon3@miitbeian.gov.cn","phone":"(517) 5840919","gender":"Male"},
{"id":5,"student_name":"bderkes4","adress":"44 Northfield Pass","email":"bbredgeland4@walmart.com","phone":"(999) 7161891","gender":"Female"},
{"id":6,"student_name":"jretallack5","adress":"5 Division Court","email":"mobee5@psu.edu","phone":"(258) 5969259","gender":"Female"},
{"id":7,"student_name":"jmingardi6","adress":"13377 Sherman Point","email":"kboissier6@gnu.org","phone":"(785) 2792240","gender":"Male"},
{"id":8,"student_name":"pbanaszkiewicz7","adress":"1 Little Fleur Junction","email":"rbowering7@hc360.com","phone":"(994) 6019168","gender":"Female"},
{"id":9,"student_name":"rselland8","adress":"79 Twin Pines Drive","email":"bblacksell8@washington.edu","phone":"(396) 8262298","gender":"Female"},
{"id":10,"student_name":"cseth9","adress":"19754 Carberry Lane","email":"rreynoollds9@geocities.jp","phone":"(473) 4832815","gender":"Male"},
{"id":11,"student_name":"ccreddona","adress":"386 High Crossing Crossing","email":"bwateridgea@globo.com","phone":"(786) 1035754","gender":"Female"},
{"id":12,"student_name":"ccristofarob","adress":"32076 School Road","email":"tloutheb@symantec.com","phone":"(854) 9208661","gender":"Female"},
{"id":13,"student_name":"pcousinc","adress":"612 Paget Park","email":"powensc@elpais.com","phone":"(610) 3813320","gender":"Male"},
{"id":14,"student_name":"sbradtked","adress":"97 Waywood Parkway","email":"ftallachd@reverbnation.com","phone":"(967) 9247290","gender":"Male"},
{"id":15,"student_name":"cluetkemeyerse","adress":"7 Kingsford Circle","email":"mglowinskie@technorati.com","phone":"(137) 5393700","gender":"Male"},
{"id":16,"student_name":"hzorzinf","adress":"93053 Lerdahl Road","email":"lgibbinsf@google.co.uk","phone":"(331) 4358324","gender":"Male"},
{"id":17,"student_name":"gstrowlgerg","adress":"18 Ridgeview Circle","email":"twiersmag@bravesites.com","phone":"(138) 9344587","gender":"Female"},
{"id":18,"student_name":"abeefonh","adress":"253 Twin Pines Trail","email":"hblabberh@hatena.ne.jp","phone":"(555) 1722670","gender":"Male"},
{"id":19,"student_name":"mmennelli","adress":"97446 Forest Dale Hill","email":"kdifrancecshii@xing.com","phone":"(858) 1339206","gender":"Male"},
{"id":20,"student_name":"halfonzoj","adress":"545 Jenifer Terrace","email":"pgerritj@yellowbook.com","phone":"(448) 6846750","gender":"Male"},
{"id":21,"student_name":"wtreugek","adress":"5260 Maywood Street","email":"jdank@un.org","phone":"(903) 4815164","gender":"Male"},
{"id":22,"student_name":"amarzellanol","adress":"985 Mifflin Street","email":"lbankl@hostgator.com","phone":"(816) 4205331","gender":"Female"},
{"id":23,"student_name":"ijaycockm","adress":"63908 Kennedy Street","email":"ppiggottm@ed.gov","phone":"(922) 3930516","gender":"Female"},
{"id":24,"student_name":"eoveryn","adress":"23170 Kennedy Road","email":"mchilesn@bbb.org","phone":"(589) 2301221","gender":"Male"},
{"id":25,"student_name":"bcasbourneo","adress":"0070 Vera Avenue","email":"aearnshawo@spotify.com","phone":"(728) 7129210","gender":"Male"},
{"id":26,"student_name":"rscrowstonp","adress":"11931 Prentice Way","email":"mgraylingp@mit.edu","phone":"(895) 7302259","gender":"Female"},
{"id":27,"student_name":"hmccloryq","adress":"5847 7th Point","email":"vcrichq@unicef.org","phone":"(780) 3427550","gender":"Female"},
{"id":28,"student_name":"wmathivetr","adress":"7789 Johnson Crossing","email":"golanderr@timesonline.co.uk","phone":"(121) 6249294","gender":"Female"},
{"id":29,"student_name":"dingons","adress":"2 Northport Hill","email":"ahambeltons@reverbnation.com","phone":"(176) 4298089","gender":"Male"},
{"id":30,"student_name":"eristet","adress":"0 Iowa Point","email":"mclemanceaut@cpanel.net","phone":"(707) 6570498","gender":"Male"},
{"id":31,"student_name":"ahugeninu","adress":"273 American Street","email":"dkilbeyu@npr.org","phone":"(276) 6491293","gender":"Female"},
{"id":32,"student_name":"scullinanev","adress":"68 Kropf Drive","email":"gdudmarshv@sbwire.com","phone":"(522) 1245274","gender":"Male"},
{"id":33,"student_name":"ncrallanw","adress":"71002 Blue Bill Park Lane","email":"rdownesw@devhub.com","phone":"(826) 6269978","gender":"Male"},
{"id":34,"student_name":"bovitzx","adress":"5 Ludington Place","email":"agoomx@unc.edu","phone":"(659) 7243079","gender":"Male"},
{"id":35,"student_name":"mkleinberery","adress":"4 Elmside Hill","email":"cvankovy@reddit.com","phone":"(877) 8653815","gender":"Male"},
{"id":36,"student_name":"lworsamz","adress":"419 Susan Avenue","email":"lmogfordz@example.com","phone":"(327) 2486507","gender":"Male"},
{"id":37,"student_name":"fferrant10","adress":"35 Sauthoff Park","email":"apuckrin10@constantcontact.com","phone":"(481) 1303040","gender":"Male"},
{"id":38,"student_name":"cdight11","adress":"73 Fairview Hill","email":"acardiff11@infoseek.co.jp","phone":"(214) 4254431","gender":"Female"},
{"id":39,"student_name":"mpeckitt12","adress":"2165 Memorial Pass","email":"eumbert12@msn.com","phone":"(900) 7982016","gender":"Female"},
{"id":40,"student_name":"kborne13","adress":"57844 Pearson Court","email":"ttouret13@stanford.edu","phone":"(733) 3270525","gender":"Female"},
{"id":41,"student_name":"cferrulli14","adress":"6730 Anzinger Plaza","email":"skennon14@soundcloud.com","phone":"(608) 2848701","gender":"Male"},
{"id":42,"student_name":"lravenscroftt15","adress":"01898 Ridgeview Drive","email":"dlawful15@sphinn.com","phone":"(164) 8344274","gender":"Male"},
{"id":43,"student_name":"aklosser16","adress":"62446 Talmadge Road","email":"bbeaver16@shinystat.com","phone":"(557) 1327276","gender":"Female"},
{"id":44,"student_name":"afilippov17","adress":"8404 Raven Trail","email":"kmadgwick17@cnet.com","phone":"(962) 7699510","gender":"Female"},
{"id":45,"student_name":"lsuckling18","adress":"7730 Onsgard Road","email":"bwhether18@slate.com","phone":"(770) 6778098","gender":"Female"},
{"id":46,"student_name":"creimer19","adress":"484 Upham Plaza","email":"eferras19@usda.gov","phone":"(615) 7484135","gender":"Male"},
{"id":47,"student_name":"jemmins1a","adress":"8 Bayside Avenue","email":"mgraser1a@wikia.com","phone":"(205) 9925707","gender":"Male"},
{"id":48,"student_name":"bhebditch1b","adress":"499 Becker Road","email":"bdegliabbati1b@usatoday.com","phone":"(740) 5665917","gender":"Male"},
{"id":49,"student_name":"atremethack1c","adress":"944 Roth Lane","email":"bbeeres1c@mtv.com","phone":"(511) 5958891","gender":"Male"},
{"id":50,"student_name":"cdraxford1d","adress":"379 East Place","email":"vlinge1d@de.vu","phone":"(656) 2759284","gender":"Female"}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <StudentTable students={DATA} />
        </header>
      </div>
    );
  }
}

export default App;