"use client";

import { useState } from "react";
import { Film, LayoutDashboard, Users, Map, Clapperboard, Images, Sparkles, Settings, Plus, Play, ChevronRight } from "lucide-react";

const nav = [
  ["Dashboard", LayoutDashboard], ["Characters", Users], ["Locations", Map],
  ["Episodes", Clapperboard], ["Storyboard", Images], ["Generations", Sparkles], ["Settings", Settings]
] as const;

export default function Home() {
  const [active, setActive] = useState("Dashboard");
  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand"><Film size={22}/><span>ANIMATION<br/><b>STUDIO</b></span></div>
        <div className="project-label">PROJECT</div>
        <div className="project-card"><div className="status-dot"/><div><strong>Harley & Joker</strong><small>Season 01 · Pre-production</small></div></div>
        <nav>{nav.map(([label, Icon]) => <button key={label} onClick={()=>setActive(label)} className={active===label?"nav active":"nav"}><Icon size={18}/><span>{label}</span></button>)}</nav>
        <div className="sidebar-bottom"><small>AI ANIMATION PIPELINE</small><span>v0.1 · Production prototype</span></div>
      </aside>
      <section className="content">
        <header className="topbar"><div><div className="eyebrow">PROJECT / {active.toUpperCase()}</div><h1>{active}</h1></div><button className="primary"><Plus size={16}/> New {active==="Dashboard"?"Shot":active.slice(0,-1)}</button></header>
        {active==="Dashboard" ? <Dashboard/> : <Placeholder title={active}/>}
      </section>
    </main>
  );
}

function Dashboard(){
 return <div className="dashboard">
  <section className="hero"><div><span className="pill">IN DEVELOPMENT</span><h2>Build the shot.<br/><em>Then build the episode.</em></h2><p>A production workspace for characters, scenes, storyboards and AI-generated animation.</p><button className="ghost"><Play size={15}/> Open current shot</button></div><div className="hero-art"><div className="orb orb1"/><div className="orb orb2"/><span>SHOT<br/><b>001</b></span></div></section>
  <div className="grid">
   <Card title="Episode 01" meta="2 scenes · 6 shots" action="Open episode"><div className="timeline"><i/><i/><i/><i/><i/><i/></div></Card>
   <Card title="Characters" meta="2 approved references" action="Manage characters"><div className="faces"><span>H</span><span>J</span></div></Card>
   <Card title="Generation queue" meta="Mock provider · ready" action="Open generations"><div className="queue"><b>SHOT 001</b><span>Draft · 6 sec</span><ChevronRight size={15}/></div></Card>
  </div>
  <section className="workflow"><div><span className="eyebrow">PIPELINE</span><h3>From script to final shot</h3></div><div className="steps">{["Script","Storyboard","Reference","Generate","Review","Approve"].map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b>{i<5&&<ChevronRight size={14}/>}</div>)}</div></section>
 </div>
}
function Card({title,meta,action,children}:{title:string,meta:string,action:string,children:React.ReactNode}){return <article className="card"><div className="card-head"><div><h3>{title}</h3><p>{meta}</p></div><button>{action} <ChevronRight size={14}/></button></div>{children}</article>}
function Placeholder({title}:{title:string}){return <div className="empty"><Sparkles size={30}/><h2>{title}</h2><p>This production module is scaffolded and ready for the next implementation stage.</p><button className="primary"><Plus size={16}/> Create first item</button></div>}