var wms_layers = [];

var format_Swedencopy_0 = new ol.format.GeoJSON();
var features_Swedencopy_0 = format_Swedencopy_0.readFeatures(json_Swedencopy_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Swedencopy_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Swedencopy_0.addFeatures(features_Swedencopy_0);
var lyr_Swedencopy_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Swedencopy_0, 
                style: style_Swedencopy_0,
                popuplayertitle: "Sweden copy",
                interactive: true,
    title: 'Sweden copy<br />\
    <img src="styles/legend/Swedencopy_0_0.png" /> 93509 - 97122<br />\
    <img src="styles/legend/Swedencopy_0_1.png" /> 97122 - 112728<br />\
    <img src="styles/legend/Swedencopy_0_2.png" /> 112728 - 190668<br />\
    <img src="styles/legend/Swedencopy_0_3.png" /> 190668 - 500197<br />\
    <img src="styles/legend/Swedencopy_0_4.png" /> 500197 - 981263<br />'
        });
var format_WB_countries_Admin0_10m_1 = new ol.format.GeoJSON();
var features_WB_countries_Admin0_10m_1 = format_WB_countries_Admin0_10m_1.readFeatures(json_WB_countries_Admin0_10m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WB_countries_Admin0_10m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WB_countries_Admin0_10m_1.addFeatures(features_WB_countries_Admin0_10m_1);
var lyr_WB_countries_Admin0_10m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WB_countries_Admin0_10m_1, 
                style: style_WB_countries_Admin0_10m_1,
                popuplayertitle: "WB_countries_Admin0_10m",
                interactive: true,
                title: '<img src="styles/legend/WB_countries_Admin0_10m_1.png" /> WB_countries_Admin0_10m'
            });
var format_Sweden_2 = new ol.format.GeoJSON();
var features_Sweden_2 = format_Sweden_2.readFeatures(json_Sweden_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sweden_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sweden_2.addFeatures(features_Sweden_2);
var lyr_Sweden_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sweden_2, 
                style: style_Sweden_2,
                popuplayertitle: "Sweden",
                interactive: true,
    title: 'Sweden<br />\
    <img src="styles/legend/Sweden_2_0.png" /> 93509 - 97122<br />\
    <img src="styles/legend/Sweden_2_1.png" /> 97122 - 112728<br />\
    <img src="styles/legend/Sweden_2_2.png" /> 112728 - 190668<br />\
    <img src="styles/legend/Sweden_2_3.png" /> 190668 - 500197<br />\
    <img src="styles/legend/Sweden_2_4.png" /> 500197 - 981263<br />'
        });

lyr_Swedencopy_0.setVisible(true);lyr_WB_countries_Admin0_10m_1.setVisible(true);lyr_Sweden_2.setVisible(true);
var layersList = [lyr_Swedencopy_0,lyr_WB_countries_Admin0_10m_1,lyr_Sweden_2];
lyr_Swedencopy_0.set('fieldAliases', {'id': 'id', 'name': 'name', 'x': 'x', 'y': 'y', 'population': 'population', });
lyr_WB_countries_Admin0_10m_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'featurecla': 'featurecla', 'LEVEL': 'LEVEL', 'TYPE': 'TYPE', 'FORMAL_EN': 'FORMAL_EN', 'FORMAL_FR': 'FORMAL_FR', 'POP_EST': 'POP_EST', 'POP_RANK': 'POP_RANK', 'GDP_MD_EST': 'GDP_MD_EST', 'POP_YEAR': 'POP_YEAR', 'LASTCENSUS': 'LASTCENSUS', 'GDP_YEAR': 'GDP_YEAR', 'ECONOMY': 'ECONOMY', 'INCOME_GRP': 'INCOME_GRP', 'FIPS_10_': 'FIPS_10_', 'ISO_A2': 'ISO_A2', 'ISO_A3': 'ISO_A3', 'ISO_A3_EH': 'ISO_A3_EH', 'ISO_N3': 'ISO_N3', 'UN_A3': 'UN_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'CONTINENT': 'CONTINENT', 'REGION_UN': 'REGION_UN', 'SUBREGION': 'SUBREGION', 'REGION_WB': 'REGION_WB', 'NAME_AR': 'NAME_AR', 'NAME_BN': 'NAME_BN', 'NAME_DE': 'NAME_DE', 'NAME_EN': 'NAME_EN', 'NAME_ES': 'NAME_ES', 'NAME_FR': 'NAME_FR', 'NAME_EL': 'NAME_EL', 'NAME_HI': 'NAME_HI', 'NAME_HU': 'NAME_HU', 'NAME_ID': 'NAME_ID', 'NAME_IT': 'NAME_IT', 'NAME_JA': 'NAME_JA', 'NAME_KO': 'NAME_KO', 'NAME_NL': 'NAME_NL', 'NAME_PL': 'NAME_PL', 'NAME_PT': 'NAME_PT', 'NAME_RU': 'NAME_RU', 'NAME_SV': 'NAME_SV', 'NAME_TR': 'NAME_TR', 'NAME_VI': 'NAME_VI', 'NAME_ZH': 'NAME_ZH', 'WB_NAME': 'WB_NAME', 'WB_RULES': 'WB_RULES', 'WB_REGION': 'WB_REGION', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Sweden_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'x': 'x', 'y': 'y', 'population': 'population', });
lyr_Swedencopy_0.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'population': 'Range', });
lyr_WB_countries_Admin0_10m_1.set('fieldImages', {'OBJECTID': '', 'featurecla': '', 'LEVEL': '', 'TYPE': '', 'FORMAL_EN': '', 'FORMAL_FR': '', 'POP_EST': '', 'POP_RANK': '', 'GDP_MD_EST': '', 'POP_YEAR': '', 'LASTCENSUS': '', 'GDP_YEAR': '', 'ECONOMY': '', 'INCOME_GRP': '', 'FIPS_10_': '', 'ISO_A2': '', 'ISO_A3': '', 'ISO_A3_EH': '', 'ISO_N3': '', 'UN_A3': '', 'WB_A2': '', 'WB_A3': '', 'CONTINENT': '', 'REGION_UN': '', 'SUBREGION': '', 'REGION_WB': '', 'NAME_AR': '', 'NAME_BN': '', 'NAME_DE': '', 'NAME_EN': '', 'NAME_ES': '', 'NAME_FR': '', 'NAME_EL': '', 'NAME_HI': '', 'NAME_HU': '', 'NAME_ID': '', 'NAME_IT': '', 'NAME_JA': '', 'NAME_KO': '', 'NAME_NL': '', 'NAME_PL': '', 'NAME_PT': '', 'NAME_RU': '', 'NAME_SV': '', 'NAME_TR': '', 'NAME_VI': '', 'NAME_ZH': '', 'WB_NAME': '', 'WB_RULES': '', 'WB_REGION': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Sweden_2.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'population': 'Range', });
lyr_Swedencopy_0.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'x': 'no label', 'y': 'no label', 'population': 'no label', });
lyr_WB_countries_Admin0_10m_1.set('fieldLabels', {'OBJECTID': 'no label', 'featurecla': 'no label', 'LEVEL': 'no label', 'TYPE': 'no label', 'FORMAL_EN': 'no label', 'FORMAL_FR': 'no label', 'POP_EST': 'no label', 'POP_RANK': 'no label', 'GDP_MD_EST': 'no label', 'POP_YEAR': 'no label', 'LASTCENSUS': 'no label', 'GDP_YEAR': 'no label', 'ECONOMY': 'no label', 'INCOME_GRP': 'no label', 'FIPS_10_': 'no label', 'ISO_A2': 'no label', 'ISO_A3': 'no label', 'ISO_A3_EH': 'no label', 'ISO_N3': 'no label', 'UN_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', 'CONTINENT': 'no label', 'REGION_UN': 'no label', 'SUBREGION': 'no label', 'REGION_WB': 'no label', 'NAME_AR': 'no label', 'NAME_BN': 'no label', 'NAME_DE': 'no label', 'NAME_EN': 'no label', 'NAME_ES': 'no label', 'NAME_FR': 'no label', 'NAME_EL': 'no label', 'NAME_HI': 'no label', 'NAME_HU': 'no label', 'NAME_ID': 'no label', 'NAME_IT': 'no label', 'NAME_JA': 'no label', 'NAME_KO': 'no label', 'NAME_NL': 'no label', 'NAME_PL': 'no label', 'NAME_PT': 'no label', 'NAME_RU': 'no label', 'NAME_SV': 'no label', 'NAME_TR': 'no label', 'NAME_VI': 'no label', 'NAME_ZH': 'no label', 'WB_NAME': 'no label', 'WB_RULES': 'no label', 'WB_REGION': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Sweden_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'x': 'no label', 'y': 'no label', 'population': 'no label', });
lyr_Sweden_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});