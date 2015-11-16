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
			editor.addCommand( 'sidenav', CKEDITOR.plugins.sidenav);
			editor.ui.addButton && editor.ui.addButton( 'SideNavigation', {
				label: editor.lang.sidenav.toolbar,
				command: 'sidenav',
				toolbar: 'insert,5',
				icon: 'sidenav'
			} );
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
				'class':'fa fa-flag nav-anchor'
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
