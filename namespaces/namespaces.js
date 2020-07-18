var Geometria;
(function (Geometria) {
    var Area;
    (function (Area) {
        var PI = 3.14;
        function Circuferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.Circuferencia = Circuferencia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
var Geometria;
(function (Geometria) {
    var Area;
    (function (Area) {
        function Retangulo(base, altura) {
            return base * altura;
        }
        Area.Retangulo = Retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
///<reference path="geometriaCirc.ts" />
///<reference path="geometriaRect.ts" />
console.log(Geometria.Area.Circuferencia(10));
console.log(Geometria.Area.Retangulo(10, 5));
