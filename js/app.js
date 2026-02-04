var app = angular.module('deporteApp', ['dx']);

app.controller('MainController', function($scope, $http) {
    $http.get('data/datos.json').then(function(response) {
        $scope.dataSource = response.data;

        $scope.gridOptions = {
            dataSource: $scope.dataSource,
            columns: [
                { dataField: "id", caption: "ID", width: 50 },
                { dataField: "atleta", caption: "Nombre del Atleta" },
                { dataField: "deporte", caption: "Disciplina" },
                { dataField: "puntaje", caption: "Puntaje", dataType: "number" },
                { dataField: "fecha", caption: "Fecha de Registro", dataType: "date" },
                { dataField: "estado", caption: "Estado" }
            ],
            searchPanel: { visible: true, width: 240, placeholder: "Buscar atleta..." },
            showBorders: true,
            rowAlternationEnabled: true
        };

        $scope.chartOptions = {
            dataSource: $scope.dataSource,
            series: {
                argumentField: "atleta",
                valueField: "puntaje",
                name: "Puntaje por Atleta",
                type: "bar",
                color: "#1e88e5"
            },
            title: "Rendimiento de Atletas",
            legend: { visible: false },
            export: { enabled: true }
        };
    });
});
