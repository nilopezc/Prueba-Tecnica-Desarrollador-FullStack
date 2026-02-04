# 🏅 Dashboard de Rendimiento Deportivo - DEPORTE VIRTUAL®

Proyecto desarrollado como prueba técnica para la posición de Desarrollador Full-Stack. La aplicación permite visualizar, filtrar y analizar el rendimiento de atletas mediante una interfaz interactiva y moderna.

## 🚀 Demo en Vivo
Puedes ver la aplicación funcionando aquí:
👉 [https://nilopezc.github.io/Prueba-Tecnica-Desarrollador-FullStack/](https://nilopezc.github.io/Prueba-Tecnica-Desarrollador-FullStack/)

## 🛠️ Tecnologías Utilizadas
- **AngularJS 1.5.11**: Framework base para la lógica y creación de directivas personalizadas.
- **DevExtreme 22.2.6**: Componentes de UI de alto rendimiento (DataGrid y Chart).
- **jQuery 3.5.1**: Dependencia necesaria para los componentes DevExtreme.
- **CSS3 Personalizado**: Diseño responsivo y visualización semántica (badges).

## 📁 Estructura del Proyecto
- `/data`: Archivo `datos.json` con la información estática de los atletas (mínimo 5 campos).
- `/js`: Lógica de la aplicación en `app.js`, incluyendo el controlador y la directiva.
- `/css`: Estilos personalizados en `styles.css`.
- `index.html`: Punto de entrada principal y estructura del Dashboard.

## 🌟 Características Implementadas
1. **Nivel 1 (Fundamental)**: Carga de datos JSON, DataGrid con búsqueda/filtro y Gráfico de rendimiento.
2. **Nivel 2 (Intermedio)**: Interacción entre componentes (Two-way binding); al seleccionar un atleta en la tabla, el gráfico se actualiza dinámicamente.
3. **Nivel 3 (Avanzado)**: Creación de una **Directiva Personalizada** (`statusBadge`) inyectada mediante un `cellTemplate` en el DataGrid para la gestión visual de estados.

## 💻 Instrucciones de Ejecución
Como es una aplicación estática, no requiere servidores ni instalaciones:
1. Clona este repositorio: `git clone https://github.com/nilopezc/Prueba-Tecnica-Desarrollador-FullStack.git`
2. Abre el archivo `index.html` en cualquier navegador moderno.
