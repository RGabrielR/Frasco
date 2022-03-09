# Frasco

## Intro
El proyecto busca mostrar habilidades en desarrollo web. Se desarrollo esta pagina con Next.js (framework js de React), GSAP y Tailwind. 

## Maquetación
Para el desarrollo de este proyecto se realizo una maqueta utilizando Figma. Esta maqueta buscaba tener en claro:
- el diseño
- los colores
- la estructura de la información
- como iba a verse tanto en celulares como en monitores

A partir de ahí se prosiguio en el desarrollo de la web. Esta es la maqueta diseñada:


[Maquetación  web frasco.pdf](https://github.com/RGabrielR/Frasco/files/8210061/Maquetacion.web.frasco.pdf)

### Estructura del codigo

### CSS principalmente por Tailwind
Para uniformar lo mas posible el uso de estilos se decide que todos los estilos sean realizados por Tailwind. En aquellos casos donde la librería no presenta un estilo en particular se lo extiende a travez del archivo de Tailwind.config.js. La unica excepción a este principio es en el caso del carrousel: en ese caso se usan los CSS precargados por EMBLA (una librería de carrouseles) para no cambiar la estructura que la librería tiene prestablecida. Los CSS de la librería en particular se las hace modulos y se las importa de esa manera cosa que no afecten otros componentes.

### Componentes reutilizables
Se busca ahorrar lo mas posible el uso de codigo repetitivo por lo cual se trato de generar la mayor cantidad de componentes reutilizables posibles. Ciertas paginas tienen mas ciertas paginas tienen menos pero mas que todo se debe a que en ciertos escenarios era mas perjudicial que beneficioso el desarrollo de componentes puesto terminaba mas engorroso.

## vista

Vista que se obtiene en la pc

https://user-images.githubusercontent.com/63560574/157350693-a866a3f2-7b3f-44dc-a808-dea25ca9af09.mp4

Vista que se obtiene en celulares

https://user-images.githubusercontent.com/63560574/157350697-c3d2c8d9-ba90-43f6-b566-f83c897c84e1.mp4

