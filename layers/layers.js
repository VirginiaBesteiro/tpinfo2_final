ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-9.528241, 34.685206, 4.600542, 44.930027]);
var wms_layers = [];


        var lyr_IGNEspaaBase_0 = new ol.layer.Tile({
            'title': 'IGN España Base',
            'type':'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tms-ign-base.idee.es/1.0.0/IGNBaseTodo/{z}/{x}/{-y}.jpeg'
            })
        });
var format_Cuerposdeagua_1 = new ol.format.GeoJSON();
var features_Cuerposdeagua_1 = format_Cuerposdeagua_1.readFeatures(json_Cuerposdeagua_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Cuerposdeagua_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuerposdeagua_1.addFeatures(features_Cuerposdeagua_1);
var lyr_Cuerposdeagua_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cuerposdeagua_1, 
                style: style_Cuerposdeagua_1,
                popuplayertitle: 'Cuerpos de agua',
                interactive: true,
                title: '<img src="styles/legend/Cuerposdeagua_1.png" /> Cuerpos de agua'
            });
var format_Vasfrreas_2 = new ol.format.GeoJSON();
var features_Vasfrreas_2 = format_Vasfrreas_2.readFeatures(json_Vasfrreas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Vasfrreas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vasfrreas_2.addFeatures(features_Vasfrreas_2);
var lyr_Vasfrreas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vasfrreas_2, 
                style: style_Vasfrreas_2,
                popuplayertitle: 'Vías férreas',
                interactive: true,
                title: '<img src="styles/legend/Vasfrreas_2.png" /> Vías férreas'
            });
var format_Carreteras_3 = new ol.format.GeoJSON();
var features_Carreteras_3 = format_Carreteras_3.readFeatures(json_Carreteras_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Carreteras_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carreteras_3.addFeatures(features_Carreteras_3);
var lyr_Carreteras_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carreteras_3, 
                style: style_Carreteras_3,
                popuplayertitle: 'Carreteras',
                interactive: true,
                title: '<img src="styles/legend/Carreteras_3.png" /> Carreteras'
            });
var format_Capital_4 = new ol.format.GeoJSON();
var features_Capital_4 = format_Capital_4.readFeatures(json_Capital_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Capital_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capital_4.addFeatures(features_Capital_4);
var lyr_Capital_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Capital_4, 
                style: style_Capital_4,
                popuplayertitle: 'Capital',
                interactive: true,
                title: '<img src="styles/legend/Capital_4.png" /> Capital'
            });

lyr_IGNEspaaBase_0.setVisible(true);lyr_Cuerposdeagua_1.setVisible(true);lyr_Vasfrreas_2.setVisible(true);lyr_Carreteras_3.setVisible(true);lyr_Capital_4.setVisible(true);
var layersList = [lyr_IGNEspaaBase_0,lyr_Cuerposdeagua_1,lyr_Vasfrreas_2,lyr_Carreteras_3,lyr_Capital_4];
lyr_Cuerposdeagua_1.set('fieldAliases', {'id_rio': 'id_rio', 'rotulo': 'Nombre', 'pers_hidro': 'pers_hidro', 't_rio': 't_rio', 'fecha_alta': 'fecha_alta', 'fecha_baja': 'fecha_baja', 'capacidad': 'capacidad', 'id_ipe': 'id_ipe', 'st_area_sh': 'Área', 'st_length_': 'st_length_', });
lyr_Vasfrreas_2.set('fieldAliases', {'t_ffcc': 't_ffcc', 'estado_fis': 'estado_fis', 'ancho_via': 'ancho_via', 'rotulo': 'Línea férrea', 'fecha_alta': 'fecha_alta', 'fecha_baja': 'fecha_baja', 'electrific': 'electrific', 'num_vias': 'num_vias', 'tipo': 'Tipo de vía', 'st_length_': 'st_length_', });
lyr_Carreteras_3.set('fieldAliases', {'t_ctra': 't_ctra', 'rotulo': 'Carretera', 'estado_fis': 'estado_fis', 'orden': 'orden', 'fecha_alta': 'fecha_alta', 'acceso': 'acceso', 'fecha_baja': 'fecha_baja', 'tipo': 'Tipo de carretera', 'st_length_': 'st_length_', });
lyr_Capital_4.set('fieldAliases', {'fecha_alta': 'fecha_alta', 'fecha_baja': 'fecha_baja', 'rotulo': 'Capital', 'id_prov': 'id_prov', 'id_ine': 'id_ine', 'rotulo2': 'rotulo2', 'layer': 'layer', 'path': 'path', });
lyr_Cuerposdeagua_1.set('fieldImages', {'id_rio': 'TextEdit', 'rotulo': 'TextEdit', 'pers_hidro': 'Range', 't_rio': 'Range', 'fecha_alta': 'DateTime', 'fecha_baja': 'DateTime', 'capacidad': 'TextEdit', 'id_ipe': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_Vasfrreas_2.set('fieldImages', {'t_ffcc': 'Range', 'estado_fis': 'Range', 'ancho_via': 'Range', 'rotulo': 'TextEdit', 'fecha_alta': 'DateTime', 'fecha_baja': 'DateTime', 'electrific': 'Range', 'num_vias': 'Range', 'tipo': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_Carreteras_3.set('fieldImages', {'t_ctra': 'Range', 'rotulo': 'TextEdit', 'estado_fis': 'Range', 'orden': 'Range', 'fecha_alta': 'DateTime', 'acceso': 'Range', 'fecha_baja': 'DateTime', 'tipo': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_Capital_4.set('fieldImages', {'fecha_alta': 'DateTime', 'fecha_baja': 'DateTime', 'rotulo': 'TextEdit', 'id_prov': 'TextEdit', 'id_ine': 'TextEdit', 'rotulo2': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Cuerposdeagua_1.set('fieldLabels', {'id_rio': 'hidden field', 'rotulo': 'inline label - visible with data', 'pers_hidro': 'hidden field', 't_rio': 'hidden field', 'fecha_alta': 'hidden field', 'fecha_baja': 'hidden field', 'capacidad': 'hidden field', 'id_ipe': 'hidden field', 'st_area_sh': 'inline label - visible with data', 'st_length_': 'hidden field', });
lyr_Vasfrreas_2.set('fieldLabels', {'t_ffcc': 'hidden field', 'estado_fis': 'hidden field', 'ancho_via': 'hidden field', 'rotulo': 'inline label - always visible', 'fecha_alta': 'hidden field', 'fecha_baja': 'hidden field', 'electrific': 'hidden field', 'num_vias': 'hidden field', 'tipo': 'inline label - visible with data', 'st_length_': 'hidden field', });
lyr_Carreteras_3.set('fieldLabels', {'t_ctra': 'hidden field', 'rotulo': 'inline label - always visible', 'estado_fis': 'hidden field', 'orden': 'hidden field', 'fecha_alta': 'hidden field', 'acceso': 'hidden field', 'fecha_baja': 'hidden field', 'tipo': 'inline label - visible with data', 'st_length_': 'hidden field', });
lyr_Capital_4.set('fieldLabels', {'fecha_alta': 'hidden field', 'fecha_baja': 'hidden field', 'rotulo': 'inline label - always visible', 'id_prov': 'hidden field', 'id_ine': 'hidden field', 'rotulo2': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Capital_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});