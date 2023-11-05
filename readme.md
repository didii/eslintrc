# ESLint

A simple repo with some custom eslint rules I would like to share since I don't like eslint taking up so much time in terms of configuration.

The main logic of these configuration files is that eslint should be a developer tool, not a developer chore.
In practice, this means most rules are set to `'warn'` since my personal opinion is that errors should be reserved for critical errors such as compiler errors.
Other rules are set to `'off'` since they either make sense in some circumstances and don't require an explanation or they are already handled by for example the TypeScript compiler.

All other additional rules that were added are to make merge conflicts easier to handle.
For example: import rules were added that expect the order of imports to be the same as the TS order imports command.
Merging imports gets just that slight bit easier when they are sorted in the same manner.
The same logic applies to trailing comma's, requiring `;`, etc.

To install all required packages as dev dependencies, use the following script.
```bash
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks
```

Recommendation: add the following in `.vscode/settings.json` so eslint auto-fixes a lot of small issues for you on every save.
```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```
