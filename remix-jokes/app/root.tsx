import { LiveReload, Outlet } from "remix";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

// This is where we put the root component for our application. You render the <html> element here.

//The <LiveReload /> component is useful during development to auto-refresh our browser whenever we make a change. Because our build server is so fast, the reload will often happen before you even notice ⚡
