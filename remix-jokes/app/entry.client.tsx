import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

hydrate(<RemixBrowser />, document);

// This is the first bit of your JavaScript that will run when the app loads in the browser. We use this file to hydrate our React components.

// https://reactjs.org/docs/react-dom.html#hydrate
