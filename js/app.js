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
var app = angular.module('deporteApp', ['dx']);

app.directive('statusBadge', function() {
    return {
        restrict: 'E',
        scope: { status: '=' },
        template: '<span class="status-badge {{badgeClass}}">{{status}}</span>',
        link: function(scope) {
            var s = scope.status ? scope.status.toLowerCase() : '';
            if (s === 'completado') scope.badgeClass = 'bg-completado';
            else if (s === 'pendiente') scope.badgeClass = 'bg-pendiente';
            else scope.badgeClass = 'bg-desconocido';
        }
    };
});

app.controller('MainController', function($scope, $http) {
    $scope.dataSource = [];
    $scope.chartData = [];

    $http.get('data/datos.json').then(function(response) {
        $scope.dataSource = response.data;
        $scope.chartData = angular.copy($scope.dataSource);

        // Configuración de la Tabla (DataGrid)
        $scope.gridOptions = {
            dataSource: $scope.dataSource,
            selection: { mode: "single" },
            showBorders: true,
            rowAlternationEnabled: true,
            searchPanel: { visible: true, width: 250, placeholder: "Buscar atleta..." },
            columns: [
                { dataField: "id", caption: "ID", width: 60 },
                { dataField: "atleta", caption: "Atleta" },
                { dataField: "deporte", caption: "Deporte" },
                { dataField: "puntaje", caption: "Puntaje", dataType: "number" },
                { dataField: "fecha", caption: "Fecha", dataType: "date", format: "dd/MM/yyyy" },
                { 
                    dataField: "estado", 
                    caption: "Estado (Custom)",
                    alignment: "center",
                    cellTemplate: function(container, options) {
                        var html = '<status-badge status="\'' + options.value + '\'"></status-badge>';
                        container.append(html);
                    }
                }
            ],
            onSelectionChanged: function(selectedItems) {
                var data = selectedItems.selectedRowsData[0];
                $scope.chartData = data ? [data] : angular.copy($scope.dataSource);
                $scope.$apply();
            }
        };

        $scope.chartOptions = {
            bindingOptions: { dataSource: 'chartData' },
            series: {
                argumentField: "atleta",
                valueField: "puntaje",
                type: "bar",
                color: "#1e88e5"
            },
            title: "Análisis de Rendimiento",
            legend: { visible: false },
            argumentAxis: { label: { overlappingBehavior: "rotate", rotationAngle: 45 } }
        };
    });
});
