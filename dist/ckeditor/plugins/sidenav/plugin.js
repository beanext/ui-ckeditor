/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/**
 * @fileOverview The "sidenav" plugin.
 *
 */

'use strict';

( function() {
	CKEDITOR.plugins.add( 'sidenav', {
		lang: 'af,ar,bg,bn,bs,ca,cs,cy,da,de,el,en,en-au,en-ca,en-gb,eo,es,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn', 
		icons: 'sidenav',
		hidpi: true,
		init: function( editor ) {
			var text = editor.lang.sidenav.toolbar;

			editor.addCommand( 'sidenav', CKEDITOR.plugins.sidenav);
			editor.ui.addButton && editor.ui.addButton( 'SideNavigation', {
				label: text,
				command: 'sidenav',
				toolbar: 'insert,5',
				icon: 'sidenav'
			});
			var head = document.getElementsByTagName('head')[0],  style = document.createElement('style');
			var css = '\r\n\ta.cke_button.cke_button__sidenavigation {\r\n\t\tborder:1px solid #ddd;\r\n\t}\r\n\ta.cke_button.cke_button__sidenavigation:hover {\r\n\t\tborder-color:#a3bcd3;\r\n\t}\r\n\tspan.cke_button_icon.cke_button__sidenav_icon {\r\n\t\twidth:100px;\r\n\t}\r\n\tspan.cke_button_icon.cke_button__sidenav_icon:before {\r\n\t\tcontent: "'+text+'";color:#474747;text-align:center;\r\n\t}';
			style.type = 'text/css';
			if(style.styleSheet){
				style.styleSheet.cssText = css;
			}else{
				style.appendChild(document.createTextNode(css));
			}
			head.appendChild(style);
		}
	} );

	CKEDITOR.plugins.sidenav = {
		exec: function( editor ) {
			function createFakeAnchor( editor, attributes ) {
				return editor.createFakeElement( editor.document.createElement( 'span', { attributes: attributes } ), 'cke_anchor', 'nav_anchor' );
			};
			function isElement ( element ) {
				return element.type == CKEDITOR.NODE_ELEMENT;
			};
			var name = "1";
			var attributes = {
				id: name,
				contenteditable: false,
				'data-cke-saved-name': name,
				'class':'fa fa-flag nav-anchor',
				'style': 'outline: 1px dotted #a3bcd3;'
			};

			if ( CKEDITOR.env.ie && CKEDITOR.env.version < 9 ) {
				attributes[ 'class' ] = 'fa fa-flag nav-anchor cke_anchor';
			}

			// Apply style.
			var style = new CKEDITOR.style( { element: 'span', attributes: attributes } );
			style.type = CKEDITOR.STYLE_INLINE;
			editor.applyStyle( style );
		}
	};
})();
