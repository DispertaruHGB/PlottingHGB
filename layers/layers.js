var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_GABUNGAN_1 = new ol.format.GeoJSON();
var features_GABUNGAN_1 = format_GABUNGAN_1.readFeatures(json_GABUNGAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GABUNGAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GABUNGAN_1.addFeatures(features_GABUNGAN_1);
var lyr_GABUNGAN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GABUNGAN_1, 
                style: style_GABUNGAN_1,
                interactive: true,
                title: '<img src="styles/legend/GABUNGAN_1.png" /> GABUNGAN'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GABUNGAN_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GABUNGAN_1];
lyr_GABUNGAN_1.set('fieldAliases', {'Id': 'Id', 'No. Arsip': 'No. Arsip', 'No. Urut': 'No. Urut', 'No. Surat': 'No. Surat', 'Tgl. Surat': 'Tgl. Surat', 'Pemohon': 'Pemohon', 'Uraian': 'Uraian', 'Jenis Hak': 'Jenis Hak', 'No. Hak': 'No. Hak', 'Kel/Kal': 'Kel/Kal', 'Kem/Kap': 'Kem/Kap', 'Kota/Kab': 'Kota/Kab', 'Berakhir H': 'Berakhir H', 'Dasar SK': 'Dasar SK', 'Penunjuk': 'Penunjuk', 'Tgl. Rapat': 'Tgl. Rapat', 'Asal-Usul': 'Asal-Usul', 'Kelompok': 'Kelompok', 'Tindak Lan': 'Tindak Lan', 'Plotting': 'Plotting', 'Tahun': 'Tahun', 'Status': 'Status', 'Tgl. Tangg': 'Tgl. Tangg', 'layer': 'layer', 'path': 'path', 'Tgl. Terim': 'Tgl. Terim', 'Koordinat': 'Koordinat', 'No. Telp': 'No. Telp', 'Jenis': 'Jenis', 'Deadline': 'Deadline', 'Progres Su': 'Progres Su', 'Status Sur': 'Status Sur', 'Penerima': 'Penerima', 'Tgl. Ambil': 'Tgl. Ambil', 'Lama Prose': 'Lama Prose', });
lyr_GABUNGAN_1.set('fieldImages', {'Id': 'TextEdit', 'No. Arsip': 'TextEdit', 'No. Urut': 'TextEdit', 'No. Surat': 'TextEdit', 'Tgl. Surat': 'TextEdit', 'Pemohon': 'TextEdit', 'Uraian': 'TextEdit', 'Jenis Hak': 'TextEdit', 'No. Hak': 'TextEdit', 'Kel/Kal': 'TextEdit', 'Kem/Kap': 'TextEdit', 'Kota/Kab': 'TextEdit', 'Berakhir H': 'TextEdit', 'Dasar SK': 'TextEdit', 'Penunjuk': 'TextEdit', 'Tgl. Rapat': 'TextEdit', 'Asal-Usul': 'TextEdit', 'Kelompok': 'TextEdit', 'Tindak Lan': 'TextEdit', 'Plotting': 'TextEdit', 'Tahun': 'TextEdit', 'Status': 'TextEdit', 'Tgl. Tangg': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Tgl. Terim': 'TextEdit', 'Koordinat': 'TextEdit', 'No. Telp': 'TextEdit', 'Jenis': 'TextEdit', 'Deadline': 'TextEdit', 'Progres Su': 'TextEdit', 'Status Sur': 'TextEdit', 'Penerima': 'TextEdit', 'Tgl. Ambil': 'TextEdit', 'Lama Prose': 'TextEdit', });
lyr_GABUNGAN_1.set('fieldLabels', {'Id': 'inline label', 'No. Arsip': 'inline label', 'No. Urut': 'inline label', 'No. Surat': 'inline label', 'Tgl. Surat': 'inline label', 'Pemohon': 'inline label', 'Uraian': 'inline label', 'Jenis Hak': 'inline label', 'No. Hak': 'inline label', 'Kel/Kal': 'inline label', 'Kem/Kap': 'inline label', 'Kota/Kab': 'inline label', 'Berakhir H': 'inline label', 'Dasar SK': 'inline label', 'Penunjuk': 'inline label', 'Tgl. Rapat': 'inline label', 'Asal-Usul': 'inline label', 'Kelompok': 'inline label', 'Tindak Lan': 'inline label', 'Plotting': 'inline label', 'Tahun': 'inline label', 'Status': 'inline label', 'Tgl. Tangg': 'inline label', 'layer': 'inline label', 'path': 'inline label', 'Tgl. Terim': 'inline label', 'Koordinat': 'inline label', 'No. Telp': 'inline label', 'Jenis': 'inline label', 'Deadline': 'inline label', 'Progres Su': 'inline label', 'Status Sur': 'inline label', 'Penerima': 'inline label', 'Tgl. Ambil': 'inline label', 'Lama Prose': 'inline label', });
lyr_GABUNGAN_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});