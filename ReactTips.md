---

Suggested File Structure:
public/
-index.html
-logo192.png
-logo512.png
-favicon.ico
-manifest.json
src/
components/
layout/
-WebHeader.js
-WebFooter.js
-Episode.js
pages/
-Home.js
-Episodes.js

---

React Frontend Development Tips:

1. jquery is not necessary

2. Setup a Router (react-router-dom) [ https://www.npmjs.com/package/react-router-dom ] in App.js

    <React.StrictMode>
    <Page>
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/episodes" element={<Episodes/>}/>
    </Routes>
    </Router>
    </Page>
    </React.StrictMode>

3. Create a <Page/> or <Layout/> component to wrap the matching route in router. (shown above)

    const Page = ({children}) => (  
     <> // components accept a props object that may be destructured to select particular
    <Header/> // items using {}, e.g ( props.children == {children} )
    <main>{children}</main> // main = current page as determined by Router
    </Footer/>
    </>
    );

    // This is a functional component. Consider using functional components with hooks, e.g (useState, useEffect)
    // rather than Class Components

4. Try to keep components as small as possible. If you find yourself rewriting code, turn it into a component.

    const Nav = () => (
    <nav>
    <div>
    <a href="/">Home</a>
    <img src="home.svg"/>
    </div>
    <div>
    <a href="/about">About</a>
    <img src="about.svg"/>
    </div>
    <div>
    <a href="/contact">Contact</a>
    <img src="contact.svg"/>
    </div>
      </nav>
    )

    TURN INTO

    const Nav = () => {
    const links = [
    { path: "/", name: "Home", image: "home.svg" },
    { path: "/about", name: "About", image: "about.svg"},
    { path: "/contact", name: "Contact", image: "contact.svg"}
    ];
    return (
    <nav>
    {links.map((link, index) => (
    <div key={index}> // all children of array.map() must have unique 'key' attribute
    <a href={link.path}>{link.name}</a>
    <img src={link.image} alt={`${link.name} image`}/>
    </div>
    ))}
    </nav>
    );
    }
