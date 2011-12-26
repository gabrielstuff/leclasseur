# LeClasseurApp

This is a draft for a future app in node.js

We'll use heroku to deploy and cloud9 to edit.

Please note that Heroku need the *package.json* file formatted like this :

```
{
  "name": "node-example",
  "version": "0.0.1",
  "dependencies": {
    "express": "2.2.0"
  }
}
```

and the *Procfile* that indicate which file has to be run :

`web: node server.js`

Also note, that the cloud9 ide need the node_modules in his repo in order to be run easily inside the cloud9 project.

