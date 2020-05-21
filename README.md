# marksblog

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
  

### Deploy to netlify
```
npm run deploy
```

#
## **Adding a blog post**

1. Add blog info to ./static/blogs.ts - e.g
```typescript
export default [
	{
		name: string, 				// Name of markdown file
		componentName: string,		// Lowercase name referenced in template
		title: string				// Blog title refrenced in blog list
	}
]
```
2. Add markdown blog to ./markdowns (name must conform to markdown file name)

Help writing markdown can be found using this [markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) or [here](https://www.markdownguide.org/basic-syntax/)
