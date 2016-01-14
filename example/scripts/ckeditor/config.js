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
    //config.image_previewText = 'juhua';
    //config.filebrowserBrowseUrl = '123';
    //config.filebrowserUploadUrl = '123';

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

    config.font_names = '宋体/SimSun;新宋体/NSimSun;仿宋/FangSong;楷体/KaiTi;仿宋_GB2312/FangSong_GB2312;' +
        '楷体_GB2312/KaiTi_GB2312;黑体/SimHei;华文细黑/STXihei;华文楷体/STKaiti;华文宋体/STSong;华文中宋/STZhongsong;' +
        '华文仿宋/STFangsong;华文彩云/STCaiyun;华文琥珀/STHupo;华文隶书/STLiti;华文行楷/STXingkai;华文新魏/STXinwei;' +
        '方正舒体/FZShuTi;方正姚体/FZYaoti;细明体/MingLiU;新细明体/PMingLiU;微软雅黑/Microsoft YaHei;微软正黑/Microsoft JhengHei;' +
        'Arial Black/Arial Black;' + config.font_names;

    config.fontSize_sizes = '特号/54pt;初号/42pt;小初/36pt;大一/31.5pt;一号/28pt;小一/24pt;二号/21pt;小二/18pt;三号/16pt;小三/15pt;四号/14pt;小四/12pt;五号/10pt;小五/9pt;六号/8pt;小六/6.875pt;七号/5.25pt;八号/4.5pt;' + config.fontSize_sizes;

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
