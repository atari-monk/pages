(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();class a{arcadeMachine;content;footer;constructor(s,o,n){this.arcadeMachine=s,this.content=o,this.footer=n}render(){return`
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
      `}}class d{render(){return`
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
    `}}class l{render(){return`
<div class="game-card coming-soon">
    <div class="game-icon">?</div>
    <h3>More Games Coming Soon!</h3>
    <p>Stay tuned for awesome additions</p>
</div>
        `}}class c{href;icon;title;description;constructor(s,o,n,e){this.href=s,this.icon=o,this.title=n,this.description=e}render(){return`
<a
    href="${this.href}"
    class="game-card"
    target="_blank"
>
    <div class="game-icon">${this.icon}</div>
    <h3>${this.title}</h3>
    <p>${this.description}</p>
</a>
        `}}function u(){const r=[];return r.push(new c("/pages/rock-paper-scissors/index.html","✊✋✌️","Rock Paper Scissors","Classic hand game showdown!").render(),new c("/pages/scenelet/index.html","🎭","Scenelet","Loop through dramatic scenes!").render(),new c("/pages/stars/index.html","⭐","Stars","Explore the cosmos!").render(),new l().render()),r.join("")}class h{render(){return`
<footer class="game-footer">
    <p>© 2025 GAME HUB | Press START to continue</p>
</footer>
        `}}function g(){return new a(new d().render(),u(),new h().render()).render()}document.querySelector("#app").innerHTML=g();
