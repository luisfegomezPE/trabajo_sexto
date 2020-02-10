var wms_layers = [];

var format_date2020011722_21_40_obs379track_points_0 = new ol.format.GeoJSON();
var features_date2020011722_21_40_obs379track_points_0 = format_date2020011722_21_40_obs379track_points_0.readFeatures(json_date2020011722_21_40_obs379track_points_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_date2020011722_21_40_obs379track_points_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_date2020011722_21_40_obs379track_points_0.addFeatures(features_date2020011722_21_40_obs379track_points_0);
var lyr_date2020011722_21_40_obs379track_points_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_date2020011722_21_40_obs379track_points_0, 
                style: style_date2020011722_21_40_obs379track_points_0,
                interactive: true,
                title: '<img src="styles/legend/date2020011722_21_40_obs379track_points_0.png" /> date-2020-01-17-22_21_40_obs-379 track_points'
            });
var format_date2020012016_22_28_obs527track_points_1 = new ol.format.GeoJSON();
var features_date2020012016_22_28_obs527track_points_1 = format_date2020012016_22_28_obs527track_points_1.readFeatures(json_date2020012016_22_28_obs527track_points_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_date2020012016_22_28_obs527track_points_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_date2020012016_22_28_obs527track_points_1.addFeatures(features_date2020012016_22_28_obs527track_points_1);
var lyr_date2020012016_22_28_obs527track_points_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_date2020012016_22_28_obs527track_points_1, 
                style: style_date2020012016_22_28_obs527track_points_1,
                interactive: true,
                title: '<img src="styles/legend/date2020012016_22_28_obs527track_points_1.png" /> date-2020-01-20-16_22_28_obs-527 track_points'
            });

lyr_date2020011722_21_40_obs379track_points_0.setVisible(true);lyr_date2020012016_22_28_obs527track_points_1.setVisible(true);
var layersList = [lyr_date2020011722_21_40_obs379track_points_0,lyr_date2020012016_22_28_obs527track_points_1];
lyr_date2020011722_21_40_obs379track_points_0.set('fieldAliases', {'track_fid': 'track_fid', 'track_seg_id': 'track_seg_id', 'track_seg_point_id': 'track_seg_point_id', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_date2020012016_22_28_obs527track_points_1.set('fieldAliases', {'track_fid': 'track_fid', 'track_seg_id': 'track_seg_id', 'track_seg_point_id': 'track_seg_point_id', 'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_date2020011722_21_40_obs379track_points_0.set('fieldImages', {'track_fid': '', 'track_seg_id': '', 'track_seg_point_id': '', 'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_date2020012016_22_28_obs527track_points_1.set('fieldImages', {'track_fid': '', 'track_seg_id': '', 'track_seg_point_id': '', 'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_date2020011722_21_40_obs379track_points_0.set('fieldLabels', {'track_fid': 'no label', 'track_seg_id': 'no label', 'track_seg_point_id': 'no label', 'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_date2020012016_22_28_obs527track_points_1.set('fieldLabels', {'track_fid': 'no label', 'track_seg_id': 'no label', 'track_seg_point_id': 'no label', 'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_date2020012016_22_28_obs527track_points_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});