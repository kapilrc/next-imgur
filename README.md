This is a [Next.js](https://nextjs.org/) assignment to 
- Display top images of the week
- Search imgur gallery by keyword

## Getting Started

create .env.local file in the root folder

add environment variables as emailed 

NEXT_PUBLIC_IMGUR_BASEURL=<api url>
NEXT_PUBLIC_IMGUR_CLIENT_ID=<client id.
NEXT_PUBLIC_IMGUR_CLIENT_SECRET=<client secret>

Now, install dependencies

```bash
npm install
# or
yarn
```

run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see homepage.

In the default navigation `app/page.tsx`, nothing is added (to showcase the routing on top navbar) 

### dependencies added

- redux/toolkit
- react-redux
- material ui
- moment

### journey tested
home -> go to gallery -> see the top images of the week
- display grid/list
- search for anything (the input state is maintained) when you navigate back and forth from the navbar
- search component can also be place on the navbar (commented)

### Screenshots

![Desktop view](https://github.com/kapilrc/next-imgur/blob/master/docs/Desktop.png)

![Mobile view search result](https://github.com/kapilrc/next-imgur/blob/master/docs/mobile-search-by-key.png)