Day 2 Theory — JSX + Components + Basic Layout (React)
------------------------------------------------------

Today’s theory focuses on how React “thinks” about UI: **JSX**, **components**, and **composition**, plus how to structure a simple layout/navigation for your app.

1) JSX: what it is (and what it is not)
---------------------------------------

**JSX** is a syntax extension that lets you write UI that looks like HTML inside JavaScript.

*   It is **not HTML**.
    
*   It gets compiled into JavaScript function calls that create React elements.
    

### Key rules you must know

*   Use **one parent element** (or a fragment <>...).
    
*   Use className instead of class.
    
*   Use htmlFor instead of for.
    
*   JavaScript expressions go inside { }.
    

Example:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   const name = "Luisa";  return (            Hello {name} ============  );   `

2) Components: the basic building block
---------------------------------------

A React component is a **function** that returns JSX.

### Why components matter

*   They split UI into reusable pieces.
    
*   They make your code easier to maintain and scale.
    

Example:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   function Title() {    return   Dashboard =========  ;  }   `

### Naming rule

Component names must start with a **capital letter**:

*   Dashboard ✅
    
*   dashboard ❌ (React treats it like an HTML tag)
    

3) Composition: “build UI by nesting components”
------------------------------------------------

React encourages composition rather than inheritance.

Instead of one massive page component, you combine smaller components:

*   Layout (header + nav + main)
    
*   Page content inside Layout
    

This is the foundation of professional React structure.

4) Props: how components receive data
-------------------------------------

**Props** are inputs passed from parent to child components.

*   Props are **read-only** (the child should not mutate them).
    
*   They let one component become reusable with different values.
    

Example:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   function DayCard({ day, title }) {    return   Day {day}: {title}  ;  }   `

5) children: the most important composition prop
------------------------------------------------

Every component can receive children automatically: whatever is placed inside its opening/closing tags.

Example:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   function Card({ children }) {    return   {children}  ;  }      Inside the card ---------------   `

This is how you create reusable wrappers (cards, layouts, panels).

6) Layout in a Router-based app: where navigation usually lives
---------------------------------------------------------------

Since your app has multiple routes (/, /day/:n, etc.), you want a consistent layout:

*   Header (title)
    
*   Navigation links
    
*   Main content area
    

In Day 2, the key concept is: **your layout is shared UI**, and your pages are the changing parts.

Practically, you’ll create something like:

*   Layout.jsx (shared)
    
*   Pages render inside it
    

7)  vs in React Router
----------------------

When navigating inside your app:

*   Use Roadmap ✅
    
*   Avoid [Roadmap](/roadmap) ❌ (forces a full reload)
    

**Why this matters:** Link keeps SPA navigation fast and preserves state.

8) The mental model you should keep from Day 2
----------------------------------------------

*   JSX is how we write UI in React.
    
*   Components are functions that return JSX.
    
*   Props pass data into components.
    
*   children enables composition.
    
*   Shared layout + navigation is built once and reused across pages.
    
*   Use  for internal navigation.