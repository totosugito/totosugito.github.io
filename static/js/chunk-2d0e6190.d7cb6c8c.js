(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6190"],{"96fc":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vue-good-table",{attrs:{columns:t.columns,rows:t.data,"pagination-options":{enabled:!0,mode:"pages",position:"bottom",dropdownAllowAll:!0},"search-options":{enabled:!0,placeholder:"Cari Jukir "},selectOptions:{enabled:!0,selectOnCheckboxOnly:!0,selectionText:"rows selected",clearSelectionText:"clear"}},scopedSlots:t._u([{key:"table-row",fn:function(e){return["action"==e.column.field?n("span",[n("b-button",{attrs:{block:"",variant:"primary"},on:{click:function(n){t.infoClicked(e.row)}}},[t._v("Info")]),n("b-button",{attrs:{block:"",variant:"success"},on:{click:function(n){t.updateClicked(e.row)}}},[t._v("Update")])],1):"link_foto"==e.column.field?n("span",[n("img",{staticClass:"thumbailTablePhoto",attrs:{src:"http://"+e.formattedRow[e.column.field]}})]):n("span",[t._v("\n      "+t._s(e.formattedRow[e.column.field])+"\n      ")])]}}])}),n("p",{staticClass:"error-msg"},[t._v(t._s(t.errorMsg))])],1)},a=[],i=(n("cadf"),n("551c"),n("097d"),n("1da7")),l={name:"table-jukir",data:function(){return{columns:[{label:"ID Jukir",field:"id",thClass:"text-center"},{label:"Foto",field:"link_foto",html:"true",tdClass:"text-center",thClass:"text-center"},{label:"Nama",field:"nm",thClass:"text-center"},{label:"Jalan",field:"jalan",thClass:"text-center"},{label:"Action",field:"action",thClass:"text-center"}],data:[],errorMsg:""}},beforeMount:function(){this.getData()},mounted:function(){var t=this;i["a"].$on("success",function(e){t.data=e,t.errorMsg=""}),i["a"].$on("fail",function(e){t.data=[],t.errorMsg=e})},methods:{getData:function(){var t=this;this.$store.dispatch("find_info_jukir_by_range",{}).then(function(){return t.$router.push("/table-jukir")})},updateClicked:function(t){this.$router.push({path:"/detail/detail-jukir",query:{id:t.id}})},infoClicked:function(t){this.$router.push({path:"info/info-jukir",query:{id:t.id}})}},beforeDestroy:function(){i["a"].$off("success"),i["a"].$off("fail")}},r=l,s=n("2877"),c=Object(s["a"])(r,o,a,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0e6190.d7cb6c8c.js.map