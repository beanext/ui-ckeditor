/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
    config.language = 'zh-cn';
    config.skin = 'office2013';
    //config.image_previewText = '';
    //config.filebrowserBrowseUrl = '';
    //config.filebrowserUploadUrl = '';

    config.toolbar_buiSimple = [
        ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-',
            'Undo', 'Redo', '-',
            'Find', 'Replace', '-',
            'SelectAll', '-', 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-',
            'RemoveFormat', 'NumberedList', 'BulletedList', '-',
            'Outdent', 'Indent', '-',
            'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-',
            'BidiLtr', 'BidiRtl'],
        '/',
        ['Link', 'Unlink', 'Anchor', 'HorizontalRule', 'Image', 'Flash', 'Table', 'Smiley', 'SpecialChar', '-',
            'Styles', 'Format', 'Font', 'FontSize', 'TextColor', 'BGColor', 'RemoveFormat'],
        ['Maximize']
    ];

    config.toolbar_buiSidenav = [
        ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-',
            'Undo', 'Redo', '-',
            'Find', 'Replace', '-',
            'SelectAll', '-', 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-',
            'RemoveFormat', 'NumberedList', 'BulletedList', '-',
            'Outdent', 'Indent', '-',
            'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-',
            'BidiLtr', 'BidiRtl'],
        '/',
        ['Link', 'Unlink', 'Anchor', 'HorizontalRule', 'Image', 'Flash', 'Table', 'Smiley', 'SideNavigation', 'SpecialChar', '-',
            'Styles', 'Format', 'Font', 'FontSize', 'TextColor', 'BGColor', 'RemoveFormat'],
        ['Maximize']
    ];
    if(config.extraPlugins.length || config.extraPlugins.indexOf(0) !== ",") {
        config.extraPlugins = "," + config.extraPlugins;
    }
    config.extraPlugins += 'filetools,clipboard,uploadwidget';
    config.autoGrow_minHeight = 200;
    config.autoGrow_maxHeight = 600;
    config.autoGrow_bottomSpace = 50;
};
