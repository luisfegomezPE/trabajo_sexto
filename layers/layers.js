var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_date2020011722_21_40_obs379track_points_1 = new ol.format.GeoJSON();
var features_date2020011722_21_40_obs379track_points_1 = format_date2020011722_21_40_obs379track_points_1.readFeatures(json_date2020011722_21_40_obs379track_points_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_date2020011722_21_40_obs379track_points_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_date2020011722_21_40_obs379track_points_1.addFeatures(features_date2020011722_21_40_obs379track_points_1);
var lyr_date2020011722_21_40_obs379track_points_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_date2020011722_21_40_obs379track_points_1, 
                style: style_date2020011722_21_40_obs379track_points_1,
                interactive: true,
                title: '<img src="styles/legend/date2020011722_21_40_obs379track_points_1.png" /> date-2020-01-17-22_21_40_obs-379 track_points'
            });
var format_date2020012016_22_56_obs527GPS_2 = new ol.format.GeoJSON();
var features_date2020012016_22_56_obs527GPS_2 = format_date2020012016_22_56_obs527GPS_2.readFeatures(json_date2020012016_22_56_obs527GPS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_date2020012016_22_56_obs527GPS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_date2020012016_22_56_obs527GPS_2.addFeatures(features_date2020012016_22_56_obs527GPS_2);
var lyr_date2020012016_22_56_obs527GPS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_date2020012016_22_56_obs527GPS_2, 
                style: style_date2020012016_22_56_obs527GPS_2,
                interactive: true,
                title: '<img src="styles/legend/date2020012016_22_56_obs527GPS_2.png" /> date-2020-01-20-16_22_56_obs-527 GPS'
            });
var format_Rutas_3 = new ol.format.GeoJSON();
var features_Rutas_3 = format_Rutas_3.readFeatures(json_Rutas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rutas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutas_3.addFeatures(features_Rutas_3);
var lyr_Rutas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rutas_3, 
                style: style_Rutas_3,
                interactive: true,
                title: '<img src="styles/legend/Rutas_3.png" /> Rutas'
            });
var format_Rutas_4 = new ol.format.GeoJSON();
var features_Rutas_4 = format_Rutas_4.readFeatures(json_Rutas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rutas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutas_4.addFeatures(features_Rutas_4);
var lyr_Rutas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rutas_4, 
                style: style_Rutas_4,
                interactive: true,
                title: '<img src="styles/legend/Rutas_4.png" /> Rutas'
            });

lyr_OSMStandard_0.setVisible(true);lyr_date2020011722_21_40_obs379track_points_1.setVisible(true);lyr_date2020012016_22_56_obs527GPS_2.setVisible(true);lyr_Rutas_3.setVisible(true);lyr_Rutas_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_date2020011722_21_40_obs379track_points_1,lyr_date2020012016_22_56_obs527GPS_2,lyr_Rutas_3,lyr_Rutas_4];
lyr_date2020011722_21_40_obs379track_points_1.set('fieldAliases', {'track_fid': 'track_fid', 'track_seg_id': 'track_seg_id', 'track_seg_point_id': 'track_seg_point_id', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_date2020012016_22_56_obs527GPS_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Wi_Fis': 'Wi_Fis', 'Cells': 'Cells', 'Track_segment': 'Track_segment', });
lyr_Rutas_3.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Rutas_4.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_date2020011722_21_40_obs379track_points_1.set('fieldImages', {'track_fid': 'Range', 'track_seg_id': 'Range', 'track_seg_point_id': 'Range', 'ele': 'TextEdit', 'time': 'DateTime', 'magvar': 'TextEdit', 'geoidheight': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'Range', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsdata': 'TextEdit', 'dgpsid': 'Range', });
lyr_date2020012016_22_56_obs527GPS_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Wi_Fis': 'TextEdit', 'Cells': 'TextEdit', 'Track_segment': 'TextEdit', });
lyr_Rutas_3.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Rutas_4.set('fieldImages', {'begin': 'DateTime', 'end': 'DateTime', });
lyr_date2020011722_21_40_obs379track_points_1.set('fieldLabels', {'track_fid': 'no label', 'track_seg_id': 'no label', 'track_seg_point_id': 'no label', 'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_date2020012016_22_56_obs527GPS_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Wi_Fis': 'no label', 'Cells': 'no label', 'Track_segment': 'no label', });
lyr_Rutas_3.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Rutas_4.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Rutas_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});