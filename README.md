# Remix [Learn with Jason video]

- Fast because lots of things are done on the server side
- Declarative and imperative ways of dealing with data
- Nothing needs to be funnelled through context or global state management (ie if something is removed, Remix knows when to GET/POST)
- Remix knows when to update action asychronously through GET (read) and POST (write)
- cmd + shift + p in network tab
- Loader only runs on the server
- useLoaderData hook
- Example:

```
import { useLoaderData } from 'remix'

export const loader = async () => {
 return ['one', 'two']
}

export default function Example() {
  const data = useLoaderData()
  return(
    <div>
    <h1>Some data</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
```

The code above will show {data} as [one, two]

The data is not in the bundle it's all on the server

- Checkout sanity.io

- Returning a fetch example:

```
export const loader = async () => {
  return fetch('your-url')
}
```

- No CORs, auth, headers etc. issues because the server deals with this part (best to do this with res rather than just fetch, so you're just sending the headers)
- Mapping/filtering etc. over the data can be done within the loader
- Remix automatically gets errors and sends them to the nearest router error boundary; so you don't really need to error check
- Checkout mdn formdata
- formData example:

```
export const action = async({request}) => {
  const formData = await request.formData()
  const title = formData.get('title')
}

```

- If you try to interact with an API and can't execute code/finish rendering the component (access issues, deleted record etc.) in remix you can throw in the loader and remix with catch it in catch boundary
