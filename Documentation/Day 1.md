Day 1 Theory
------------

### 1) What is React (in a practical sentence)?

React is a library for building user interfaces using **components** that render **UI (JSX)** based on **data, props, and state**.

In React, you usually do not manipulate the DOM directly. You describe how the UI should look for a given state, and React updates the UI when that state changes.

### 2) What did we build today?

You created the foundation of a **Single Page Application (SPA)** with these routes:

*   / → Dashboard
    
*   /day/:n → Day N screen
    
*   /roadmap → 30-day plan overview
    
*   /projects → portfolio projects + links
    

This means users can navigate between pages **without full page reloads**, while still having clean, shareable URLs.

### 3) Why we use Vite

Vite is the build tool and dev server that powers your React project.

*   npm run dev → development mode (fast, hot reload)
    
*   npm run build → production build output in dist/
    
*   npm run preview → serve the production build locally to test it
    

Main reason: Vite is lightweight and fast, which is ideal for this 30-day learning project.

### 4) What problem React Router solves

Without a router in an SPA:

*   you would “fake” navigation with conditionals
    
*   URLs would not change
    
*   you could not share a direct link to a specific screen (like Day 10)
    

React Router solves this by:

*   mapping **URL → component**
    
*   enabling navigation without reloads using 
    
*   supporting dynamic routes like /day/10 via route params
    

### 5) What is a dynamic route like /day/:n?

It is a URL pattern.

*   /day/:n matches /day/1, /day/2, /day/30, etc.
    
*   later, inside DayPage, you will read n with useParams()
    

This is a core design decision: you do **not** create 30 separate pages. You create **one** DayPage that changes based on the number in the URL.

### 6) Why we need Vercel rewrites for production

In development, React Router handles routing. In production, if a user opens:

/day/10

the server might look for a real file/folder /day/10 and return **404**.

To fix this for SPAs on Vercel, you configure rewrites so that **all routes serve index.html**, and React Router decides what to render.

That is why we later add:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   {    "rewrites": [{ "source": "/(.*)", "destination": "/" }]  }   `

### 7) What your Git commit means (Day 1)

*   git init created a **local Git repository** (.git folder)
    
*   git add . staged the project files
    
*   git commit created a saved checkpoint in your history
    

From now on, at the end of every class:

*   we save progress with Git
    
*   we push to GitHub as evidence and portfolio-ready history
    

### 8) Day 1 key takeaways

1.  React apps are built with components.
    
2.  An SPA navigates without full reloads.
    
3.  React Router maps URL → component (including dynamic params).
    
4.  Vite runs dev server and builds production output.
    
5.  Production needs rewrites to avoid 404 on deep links.
    
6.  Git + GitHub gives you daily evidence and a clean portfolio trail.