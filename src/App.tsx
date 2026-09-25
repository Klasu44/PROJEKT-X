import {useState} from 'react';
import {regions,indicators,headlines} from './game/world';

type Tab='biurko'|'mapa'|'archiwum';
export default function App(){
 const [tab,setTab]=useState<Tab>('biurko'); const [selected,setSelected]=useState(regions[0]);
 return <div className="shell">
  <header><div><b>INTERREGNUM</b><span> REPUBLIKA VELIGRADU</span></div><div className="date">3 STYCZNIA 1994 · 07:40</div></header>
  <nav>{(['biurko','mapa','archiwum'] as Tab[]).map(x=><button className={tab===x?'active':''} onClick={()=>setTab(x)}>{x.toUpperCase()}</button>)}</nav>
  {tab==='biurko'&&<main className="desk">
   <section className="brief"><div className="stamp">ŚCIŚLE TAJNE</div><p className="kicker">KOMITET STABILIZACJI PAŃSTWA · BIULETYN 001</p><h1>Państwo działa.<br/>Na razie.</h1><p>Od sześciu tygodni Republika Veligradu nie ma rządu posiadającego pewność większości. Prezydent odmawia podpisania trzech nominacji. Premier twierdzi, że prezydent przekracza konstytucję. Bank centralny traci rezerwy. Dravina grozi strajkiem. Karsko pyta, czy stolica nadal przestrzega umowy autonomicznej.</p><p>Wczoraj o 23:18 parlament powołał <strong>Komitet Stabilizacji Państwa</strong>. Twój urząd miał być sekretariatem technicznym. O 06:12 na biurko trafiły jednak trzy teczki oznaczone „decyzja Sekretarza”.</p><div className="signature">SEKRETARIAT KSP / EGZ. 1</div>
   </section>
   <aside><h3>WSKAŹNIKI STARTOWE</h3>{indicators.map(([a,b])=><div className="metric"><span>{a}</span><b>{b}</b></div>)}<h3>TELEKS</h3>{headlines.map((h,i)=><p className="wire"><em>0{7+i}:2{i}</em> {h}</p>)}</aside>
  </main>}
  {tab==='mapa'&&<main className="mapview"><section><p className="kicker">PODZIAŁ ADMINISTRACYJNY / 1994</p><h1>Republika Veligradu</h1><div className="regions">{regions.map(r=><button onClick={()=>setSelected(r)} className={selected.id===r.id?'selected':''}><b>{r.name}</b><small>{r.subtitle}</small></button>)}</div></section><aside><p className="kicker">DOSSIER REGIONU</p><h2>{selected.name}</h2><p>{selected.subtitle} · {selected.population}</p><div className="bar"><i style={{width:selected.stability+'%'}}/></div><small>STABILNOŚĆ {selected.stability}/100</small><div className="bar"><i style={{width:selected.prosperity+'%'}}/></div><small>PROSPERITY {selected.prosperity}/100</small><p>{selected.note}</p></aside></main>}
  {tab==='archiwum'&&<main className="archive"><p className="kicker">ARCHIWUM PAŃSTWOWE · ODTajniono dla KSP</p><h1>1945—1994</h1>{[['1945','Powstaje Republika Ludowa Veligradu. Monarchia znika bez wojny domowej, lecz czystki administracyjne trwają trzy lata.'],['1962','Reforma zakładów: dyrektorzy dostają autonomię produkcyjną. System pozostaje politycznie zamknięty, gospodarczo staje się hybrydą.'],['1974','Układ Karski tworzy autonomię językową i regionalne zgromadzenie. Dla jednych kompromis, dla innych bomba z opóźnionym zapłonem.'],['1983','Kryzys zadłużeniowy. Reglamentacja importu, tajne kredyty i narodziny sieci pośredników, którzy w latach 90. staną się biznesmenami.'],['1989','Partia rezygnuje z monopolu. Służby nie zostają rozwiązane; zmieniają szyldy, kadry pozostają.'],['1991','Pierwsze wolne wybory. Rozdrobniony parlament i kompromisowa konstytucja tworzą silnego prezydenta oraz silnego premiera.'],['1993','Pęka koalicja reform. Prywatyzacja zostaje zatrzymana w połowie. Nikt nie wie, kto naprawdę odpowiada za państwowe holdingi.'],['1994','INTERREGNUM.']].map(([y,t])=><article><b>{y}</b><p>{t}</p></article>)}</main>}
  <footer>TURA 1 BUILD · WORLD FOUNDATION · v0.1.0</footer>
 </div>
}
