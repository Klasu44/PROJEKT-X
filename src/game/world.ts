export type Region={id:string;name:string;subtitle:string;population:string;stability:number;prosperity:number;note:string};
export const regions:Region[]=[
{id:'capital',name:'VELIGRAD',subtitle:'Dystrykt stołeczny',population:'1,42 mln',stability:58,prosperity:72,note:'Ministerstwa, centrale przedsiębiorstw, media i czarny rynek walut.'},
{id:'dravina',name:'DRAVINA',subtitle:'Zachodni pas przemysłowy',population:'2,08 mln',stability:43,prosperity:49,note:'Huty, kopalnie i kombinaty. Związki zawodowe potrafią zatrzymać kraj.'},
{id:'karsko',name:'KARSKO',subtitle:'Kraina autonomiczna',population:'1,15 mln',stability:39,prosperity:55,note:'Dwujęzyczny region graniczny. Autonomia jest realną instytucją, nie folklorem.'},
{id:'morava',name:'MORAVA',subtitle:'Centralne równiny',population:'2,31 mln',stability:64,prosperity:46,note:'Rolnictwo, małe miasta i państwowe skupy. Ceny nawozów bywają ważniejsze od ideologii.'},
{id:'primorje',name:'PRIMORJE',subtitle:'Wybrzeże',population:'1,07 mln',stability:61,prosperity:68,note:'Port San Varo, turystyka, prywatny handel i przemyt.'},
{id:'rudnik',name:'RUDNIK',subtitle:'Południowy wschód',population:'1,67 mln',stability:52,prosperity:31,note:'Góry, słaba infrastruktura i poczucie porzucenia przez stolicę.'}
];
export const indicators=[['Rezerwy walutowe','1,84 mld ₣'],['Inflacja','31,7%'],['Bezrobocie','11,4%'],['Dług publiczny','46% PKB'],['Poparcie dla porządku konst.','54%'],['Gotowość armii','67%']];
export const headlines=['PREZYDENT I PREMIER NIE UZGODNILI SKŁADU RZĄDU','BANK CENTRALNY OGRANICZA SPRZEDAŻ DEWIZ','DRAVINA: ZWIĄZKI GROŻĄ STRAJKIEM GENERALNYM','ZGROMADZENIE KARSKA ŻĄDA GWARANCJI AUTONOMII'];
