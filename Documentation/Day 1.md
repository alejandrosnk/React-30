1) ¿Qué es React en una frase útil?
-----------------------------------

React es una librería para construir interfaces de usuario usando **componentes** que renderizan **HTML (JSX)** en función de **estado y props**.

En React, no “manipulas el DOM” directamente. Tú describes “cómo se ve” la UI según los datos, y React se encarga de actualizarla cuando cambian.

2) ¿Qué construimos hoy?
------------------------

Montaste el esqueleto de una **SPA (Single Page Application)** con rutas:

*   / (Dashboard)
    
*   /day/:n (Día n)
    
*   /roadmap
    
*   /projects
    

Eso significa que el usuario navega entre pantallas **sin recargar** el navegador, pero viendo URLs distintas.

3) Vite: por qué lo usamos
--------------------------

Vite es el “tooling” de desarrollo: crea el proyecto, levanta el servidor local, compila y construye para producción.

*   npm run dev → entorno de desarrollo (rápido, hot reload)
    
*   npm run build → crea versión final para producción en dist/
    
*   npm run preview → sirve la build localmente para probar como producción
    

La razón práctica: Vite es más simple y rápido para este tipo de apps que otras configuraciones.

4) React Router: qué problema resuelve
--------------------------------------

En una SPA, si no usas un router:

*   tienes una sola página y tendrías que “simular” navegación con condicionales
    
*   el URL no cambia, y no puedes compartir un link directo a una pantalla
    

React Router resuelve esto:

*   mapea **URL → componente**
    
*   permite links internos () sin recargar
    
*   permite rutas dinámicas como /day/10 con :n
    

### Conceptos clave (los que ya usaste)

*   : habilita el routing usando el historial del navegador.
    
*   : contenedor de rutas (elige una ruta que haga match).
    
*   : regla que dice “si el path coincide, renderiza este componente”.
    
*   **/day/:n**: :n es un parámetro dinámico (ej.: 1, 2, 30).
    

5) ¿Qué es una ruta dinámica /day/:n?
-------------------------------------

Es una plantilla de URL.

*   /day/:n “acepta” /day/1, /day/2, /day/30, etc.
    
*   Dentro del componente DayPage, luego vamos a leer n con useParams().
    

Esto es clave para tu app: no vas a crear 30 páginas manualmente. Tendrás **una sola** DayPage que cambia según el número.

6) ¿Por qué ya pensamos en Vercel con rewrites?
-----------------------------------------------

En desarrollo funciona porque Vite/Router manejan la navegación.Pero en producción, si alguien entra directo a:

/day/10

El servidor intenta buscar un archivo real /day/10 y puede dar 404.

La solución en Vercel para SPAs: **reescribir todas las rutas a index.html**, y que React Router decida qué renderizar.

Por eso luego usaremos:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   {    "rewrites": [{ "source": "/(.*)", "destination": "/" }]  }   `

7) Git hoy: qué significa el commit que hiciste
-----------------------------------------------

*   git init creó un repositorio **local** (carpeta .git)
    
*   git add . preparó los archivos para guardarlos en el historial
    
*   git commit creó un “punto de control” con un mensaje
    

A partir de ahora, al final de cada clase:

*   **guardamos el avance**
    
*   **subimos a GitHub** (push)
    

Eso hace tu progreso auditable y publicable.

8) Resumen conceptual del Día 1 (lo que debes retener)
------------------------------------------------------

1.  React app = componentes.
    
2.  SPA = navega sin recargar.
    
3.  Router = URL → componente (y rutas dinámicas).
    
4.  Vite = desarrollo/build.
    
5.  Producción necesita rewrites para rutas.
    
6.  Git = evidencia diaria.