var app = angular.module('deporteApp', ['dx']);

app.controller('MainController', function($scope, $http) {
    $scope.dataSource = [];
    $scope.chartData = [];

    $http.get('data/datos.json').then(function(response) {
        $scope.dataSource = response.data;
        $scope.chartData = angular.copy($scope.dataSource);
        
        $scope.gridOptions = {
            dataSource: $scope.dataSource,
            selection: { mode: "single" },
            columns: [
                { dataField: "id", caption: "ID", width: 50 },
                { dataField: "atleta", caption: "Nombre del Atleta" },
                { dataField: "deporte", caption: "Disciplina" },
                { dataField: "puntaje", caption: "Puntaje", dataType: "number" },
                { dataField: "fecha", caption: "Fecha de Registro", dataType: "date" },
                { dataField: "estado", caption: "Estado" }
            ],
            onSelectionChanged: function(selectedItems) {
                var data = selectedItems.selectedRowsData[0];
                if (data) {
                    $scope.chartData = [data];
                } else {
                    $scope.chartData = angular.copy($scope.dataSource);
                }
                $scope.$apply(); 
            },
            searchPanel: { visible: true, width: 240 },
            showBorders: true
        };

        $scope.chartOptions = {
            bindingOptions: {
                dataSource: 'chartData'
            },
            series: {
                argumentField: "atleta",
                valueField: "puntaje",
                name: "Puntaje",
                type: "bar",
                color: "#ff5722"
            },
            title: "Detalle de Rendimiento Seleccionado",
            legend: { visible: false }
        };
    });
});
