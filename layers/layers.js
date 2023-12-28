var wms_layers = [];

var format_BentengUtara_0 = new ol.format.GeoJSON();
var features_BentengUtara_0 = format_BentengUtara_0.readFeatures(json_BentengUtara_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BentengUtara_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BentengUtara_0.addFeatures(features_BentengUtara_0);
var lyr_BentengUtara_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BentengUtara_0, 
                style: style_BentengUtara_0,
                interactive: true,
                title: '<img src="styles/legend/BentengUtara_0.png" /> Benteng Utara'
            });
var format_benteng_1 = new ol.format.GeoJSON();
var features_benteng_1 = format_benteng_1.readFeatures(json_benteng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_benteng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_benteng_1.addFeatures(features_benteng_1);
var lyr_benteng_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_benteng_1, 
                style: style_benteng_1,
                interactive: true,
                title: '<img src="styles/legend/benteng_1.png" /> benteng '
            });
var format_BentengSelatan_2 = new ol.format.GeoJSON();
var features_BentengSelatan_2 = format_BentengSelatan_2.readFeatures(json_BentengSelatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BentengSelatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BentengSelatan_2.addFeatures(features_BentengSelatan_2);
var lyr_BentengSelatan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BentengSelatan_2, 
                style: style_BentengSelatan_2,
                interactive: true,
                title: '<img src="styles/legend/BentengSelatan_2.png" /> Benteng Selatan '
            });
var format_JalanBentengcopy_3 = new ol.format.GeoJSON();
var features_JalanBentengcopy_3 = format_JalanBentengcopy_3.readFeatures(json_JalanBentengcopy_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanBentengcopy_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanBentengcopy_3.addFeatures(features_JalanBentengcopy_3);
var lyr_JalanBentengcopy_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanBentengcopy_3, 
                style: style_JalanBentengcopy_3,
                interactive: true,
                title: '<img src="styles/legend/JalanBentengcopy_3.png" /> Jalan Benteng copy'
            });
var format_motorbekas_4 = new ol.format.GeoJSON();
var features_motorbekas_4 = format_motorbekas_4.readFeatures(json_motorbekas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_motorbekas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_motorbekas_4.addFeatures(features_motorbekas_4);
var lyr_motorbekas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_motorbekas_4, 
                style: style_motorbekas_4,
                interactive: true,
                title: '<img src="styles/legend/motorbekas_4.png" /> motorbekas'
            });

lyr_BentengUtara_0.setVisible(true);lyr_benteng_1.setVisible(true);lyr_BentengSelatan_2.setVisible(true);lyr_JalanBentengcopy_3.setVisible(true);lyr_motorbekas_4.setVisible(true);
var layersList = [lyr_BentengUtara_0,lyr_benteng_1,lyr_BentengSelatan_2,lyr_JalanBentengcopy_3,lyr_motorbekas_4];
lyr_BentengUtara_0.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_benteng_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_BentengSelatan_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_JalanBentengcopy_3.set('fieldAliases', {'id': 'id', 'Nama Jalan': 'Nama Jalan', });
lyr_motorbekas_4.set('fieldAliases', {'Alamat toko motor bekas': 'Alamat toko motor bekas', 'X': 'X', 'Y': 'Y', });
lyr_BentengUtara_0.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', });
lyr_benteng_1.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', });
lyr_BentengSelatan_2.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KDBBPS': '', 'KDCBPS': '', 'KDCPUM': '', 'KDEBPS': '', 'KDEPUM': '', 'KDPBPS': '', 'KDPKAB': '', 'KDPPUM': '', 'LUASWH': '', 'TIPADM': '', 'WADMKC': '', 'WADMKD': '', 'WADMKK': '', 'WADMPR': '', 'WIADKC': '', 'WIADKK': '', 'WIADPR': '', 'WIADKD': '', 'UUPP': '', 'LUAS': '', });
lyr_JalanBentengcopy_3.set('fieldImages', {'id': 'TextEdit', 'Nama Jalan': 'TextEdit', });
lyr_motorbekas_4.set('fieldImages', {'Alamat toko motor bekas': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_BentengUtara_0.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_benteng_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_BentengSelatan_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_JalanBentengcopy_3.set('fieldLabels', {'id': 'no label', 'Nama Jalan': 'no label', });
lyr_motorbekas_4.set('fieldLabels', {'Alamat toko motor bekas': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_motorbekas_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});