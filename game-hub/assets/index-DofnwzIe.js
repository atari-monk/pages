(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();class c{arcadeMachine;content;footer;constructor(n,i,s){this.arcadeMachine=n,this.content=i,this.footer=s}render(){return`
        ${this.getHeader()}
        ${this.getMain()}
        ${this.footer}
        `}getHeader(){return`
      <header class="game-header">
        ${this.getTitle()}
        ${this.arcadeMachine}
      </header>
      `}getTitle(){return`
      <div class="pixel-corners">
          <h1>GAME HUB</h1>
      </div>
      `}getMain(){return`
      <main class="game-grid">
        ${this.content}      
      </main>
      `}}class a{render(){return`
    <div class="arcade-machine">
      ${this.getScreen()}
      ${this.getControls()}
    </div>
    `}getScreen(){return`
      <div class="screen">
        <p>SELECT YOUR GAME</p>
      </div>
    `}getControls(){return`
      <div class="controls">
        ${this.getJoystick()}
        ${this.getButtons()}
      </div>
    `}getJoystick(){return'<div class="joystick"></div>'}getButtons(){return`
      <div class="buttons">
        <button class="btn red"></button>
        <button class="btn yellow"></button>
        <button class="btn green"></button>
      </div>
    `}}class d{render(){return`
<div class="game-card coming-soon">
    <div class="game-icon">?</div>
    <h3>More Games Coming Soon!</h3>
    <p>Stay tuned for awesome additions</p>
</div>
        `}}class l{href;icon;title;description;constructor(n,i,s,e){this.href=n,this.icon=i,this.title=s,this.description=e}render(){return`
<a
    href="${this.href}"
    class="game-card"
    target="_blank"
>
    <div class="game-icon">${this.icon}</div>
    <h3>${this.title}</h3>
    <p>${this.description}</p>
</a>
        `}}function u(){const r=[];return r.push(new l("","✊✋✌️","Rock Paper Scissors","Classic hand game showdown!").render(),new d().render()),r.join("")}class h{render(){return`
<footer class="game-footer">
    <p>© 2025 GAME HUB | Press START to continue</p>
</footer>
        `}}function g(){return new c(new a().render(),u(),new h().render()).render()}document.querySelector("#app").innerHTML=g();
