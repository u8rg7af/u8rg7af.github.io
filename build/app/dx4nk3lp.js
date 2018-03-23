/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{matchPath as e}from"./chunk2.js";class i{constructor(){this.unsubscribe=(()=>{}),this.activeClass="link-active",this.exact=!1,this.custom="a",this.match=null}computeMatch(t){return t||(t=this.activeRouter.get("location").pathname),e(t,{path:this.urlMatch||this.url,exact:this.exact,strict:!0})}componentWillLoad(){this.unsubscribe=this.activeRouter.subscribe(()=>{this.match=this.computeMatch()}),this.match=this.computeMatch()}componentDidUnload(){this.unsubscribe()}handleClick(t){if(t.preventDefault(),this.activeRouter)return this.activeRouter.get("history").push(this.getUrl(this.url),{});console.warn('<stencil-route-link> wasn\'t passed an instance of the router as the "router" prop!')}getUrl(t){const e=this.activeRouter.get("root")||"/";return"/"==t.charAt(0)&&"/"==e.charAt(e.length-1)?e.slice(0,e.length-1)+t:e+t}render(){let e={class:{[this.activeClass]:null!==this.match},onClick:this.handleClick.bind(this)};return"a"===this.custom&&(e=Object.assign({},e,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex})),t(this.custom,Object.assign({},e),t("slot",null))}static get is(){return"stencil-route-link"}static get properties(){return{activeClass:{type:String,attr:"active-class"},activeRouter:{context:"activeRouter"},anchorRole:{type:String,attr:"anchor-role"},anchorTabIndex:{type:String,attr:"anchor-tab-index"},anchorTitle:{type:String,attr:"anchor-title"},custom:{type:String,attr:"custom"},exact:{type:Boolean,attr:"exact"},match:{state:!0},url:{type:String,attr:"url"},urlMatch:{type:"Any",attr:"url-match"}}}}export{i as StencilRouteLink};