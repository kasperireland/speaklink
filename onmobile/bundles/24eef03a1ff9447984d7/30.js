(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1327:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(18),o=n.n(a),s=n(91),r=n.n(s),l=n(95),i=n(92),c=n(102),m=n(98),u=n(99),d=n(162),g=n(231),h=n(106);class p extends r.a.Component{constructor(e){super(e),o()(this,"updateCurrentRoom",async e=>{const t=g.a.get();let n;try{n=await t.getStats()}catch{return}let a=null;e&&(a=e.name);const o=t.crawlingRooms(),s=o.crawlingRooms.size,r=o.totalRooms.size;this.setState({eventIndexSize:n.size,eventCount:n.eventCount,crawlingRoomsCount:s,roomCount:r,currentRoom:a})}),o()(this,"onDisable",async()=>{u.a.createTrackedDialogAsync("Disable message search","Disable message search",n.e(29).then(n.bind(null,1314)),null,null,!1,!0)}),o()(this,"onCrawlerSleepTimeChange",e=>{this.setState({crawlerSleepTime:e.target.value}),m.b.setValue("crawlerSleepTime",null,h.a.DEVICE,e.target.value)}),this.state={eventIndexSize:0,eventCount:0,crawlingRoomsCount:0,roomCount:0,currentRoom:null,crawlerSleepTime:m.b.getValueAt(h.a.DEVICE,"crawlerSleepTime")}}componentWillUnmount(){const e=g.a.get();null!==e&&e.removeListener("changedCheckpoint",this.updateCurrentRoom)}async componentDidMount(){let e=0,t=0,n=0,a=0,o=null;const s=g.a.get();if(null!==s){s.on("changedCheckpoint",this.updateCurrentRoom);try{const t=await s.getStats();e=t.size,a=t.eventCount}catch{}const r=s.crawlingRooms();t=r.crawlingRooms.size,n=r.totalRooms.size;const l=s.currentRoom();l&&(o=l.name)}this.setState({eventIndexSize:e,eventCount:a,crawlingRoomsCount:t,roomCount:n,currentRoom:o})}render(){const e=c.a.get().brand,t=l.getComponent("views.elements.Field");let n;n=null===this.state.currentRoom?Object(i.a)("Not currently indexing messages for any room."):Object(i.a)("Currently indexing: %(currentRoom)s",{currentRoom:this.state.currentRoom});const a=Math.max(0,this.state.roomCount-this.state.crawlingRoomsCount),o=r.a.createElement("div",null,Object(i.a)("%(brand)s is securely caching encrypted messages locally for them to appear in search results:",{brand:e}),r.a.createElement("div",{className:"mx_SettingsTab_subsectionText"},n,r.a.createElement("br",null),Object(i.a)("Space used:")," ",Object(d.a)(this.state.eventIndexSize,0),r.a.createElement("br",null),Object(i.a)("Indexed messages:")," ",Object(d.d)(this.state.eventCount),r.a.createElement("br",null),Object(i.a)("Indexed rooms:")," ",Object(i.a)("%(doneRooms)s out of %(totalRooms)s",{doneRooms:Object(d.d)(a),totalRooms:Object(d.d)(this.state.roomCount)})," ",r.a.createElement("br",null),r.a.createElement(t,{label:Object(i.a)("Message downloading sleep time(ms)"),type:"number",value:this.state.crawlerSleepTime,onChange:this.onCrawlerSleepTimeChange}))),s=l.getComponent("views.dialogs.BaseDialog"),m=l.getComponent("views.elements.DialogButtons");return r.a.createElement(s,{className:"mx_ManageEventIndexDialog",onFinished:this.props.onFinished,title:Object(i.a)("Message search")},o,r.a.createElement(m,{primaryButton:Object(i.a)("Done"),onPrimaryButtonClick:this.props.onFinished,primaryButtonClass:"primary",cancelButton:Object(i.a)("Disable"),onCancel:this.onDisable,cancelButtonClass:"danger"}))}}}}]);
//# sourceMappingURL=30.js.map