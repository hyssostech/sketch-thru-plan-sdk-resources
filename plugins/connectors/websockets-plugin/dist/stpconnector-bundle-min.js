var t,e;t=this,e=function(t){var e=function(t,e,i,o){return new(i||(i=Promise))((function(n,s){function r(t){try{h(o.next(t))}catch(t){s(t)}}function c(t){try{h(o.throw(t))}catch(t){s(t)}}function h(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,c)}h((o=o.apply(t,e||[])).next())}))};class i{constructor(t){this.DEFAULT_TIMEOUT=30,this.connstring=t}get isConnected(){return this.socket&&this.socket.readyState===this.socket.OPEN}get isConnecting(){return this.socket&&this.socket.readyState===this.socket.CONNECTING}get connState(){return this.socket?this.socket.readyState.toString():""}connect(t,i,o){return e(this,void 0,void 0,(function*(){return new Promise(((n,s)=>e(this,void 0,void 0,(function*(){this.isConnected&&n(),this.serviceName=t,this.solvables=i,this.timeout=o;try{this.socket=yield this.promiseWithTimeout(this.tryConnect(this.connstring)),yield this.register(this.serviceName,this.solvables,this.timeout)}catch(t){return void s(new Error("Failed to connect: "+t.message))}this.socket.onmessage=t=>{this.onInform&&this.onInform(t.data)},this.socket.onerror=t=>{this.onError&&this.onError("Error connecting to STP. Check that the service is running and refresh page to retry")},this.socket.onclose=t=>e(this,void 0,void 0,(function*(){if(!this.isConnecting)try{yield this.connect(this.serviceName,this.solvables,this.timeout)}catch(t){this.onError&&this.onError("Lost connection to STP. Check that the service is running and refresh page to retry")}})),n()}))))}))}register(t,i,o){if(!this.isConnected)throw new Error("Failed to register: connection is not open ("+this.connState+")");return this.promiseWithTimeout(new Promise(((o,n)=>e(this,void 0,void 0,(function*(){this.baseName=t,this.name=this.baseName+"_"+this.uniqueId(9),this.socket.send(JSON.stringify({method:"Register",params:{serviceName:this.name,language:"javascript",solvables:i.join()}})),o()})))),o)}disconnect(t){return this.promiseWithTimeout(new Promise(((t,i)=>e(this,void 0,void 0,(function*(){this.isConnected||this.socket.close(),t()})))),t)}inform(t,i){if(!this.isConnected)throw new Error("Failed to send message: connection is not open ("+this.connState+")");return this.promiseWithTimeout(new Promise(((i,o)=>e(this,void 0,void 0,(function*(){this.socket.send(t),i()})))),i)}request(t,e){throw new Error("Method not implemented")}tryConnect(t){return new Promise(((e,i)=>{var o=new WebSocket(t);o.onopen=()=>e(o),o.onerror=t=>i(new Error("Unspecified error communicating with STP"))}))}promiseWithTimeout(t,e){return e||(e=this.DEFAULT_TIMEOUT),Promise.race([t,new Promise(((t,i)=>{let o=setTimeout((()=>{clearTimeout(o),i(new Error("Operation timed out"))}),1e3*e)}))])}uniqueId(t){return t||(t=9),Math.random().toString(36).substr(2,t)}}t.StpWebSocketsConnector=i,t.default=i,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).StpWS={});