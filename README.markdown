# VULCHECK :lock: :ribbon:

![GitHub CI](https://github.com/angeldollface/vulcheck/actions/workflows/node.yml/badge.svg)

***A package that implements my own algorithm to check the security of a password. :lock: :ribbon:***

## ABOUT :books:

Roughly a year ago, I implemented my own algorithm to check the strength of a password in Dart. *Vulcheck* is my port of this package to Node.js. *Vulcheck* is a combination of the words *Vul*nerability and *Check*er. You can find the original algorithm [here](https://github.com/angeldollface/securitycheck). Enjoy! :heart_on_fire:

## USAGE :hammer:

## The Algorithm

The algorithm measures the distance between neighbouring characters. If the two characters being compared are of a different type, then the score is increased. If not, it is diminished. If two characters are compared and the distance is large, then the score is increased. At the end everything is totalled up.

### Use *Vulcheck* in a Node.js project

To use *Vulcheck* in a Node.js project, run this command in your project's root directory:

```bash
$ npm install --save-dev vulcheck
```

Be sure to also add the `"type":"module"` flag to your project's manifest, `package.json`.

### Use *Vulcheck* in a Node.js project with Typescript

Add a file called `vulcheck.d.ts` to your project and put the following code inside it:

```Typescript
declare module 'vulcheck';
```

### APIs

*Vulcheck* offers the following functions:

- `getCharPositon(character)`: Returns the position of a character in the alphabet.
- `getCharSpace(characterOne, characterTwo)`: Returns the distance between two alphabetic characters.
- `getNumberSpace(numberOne, numberTwo)`: Returns the distance between two numbers.
- `stringType(character)`: Returns the type of string.
    - `int`: Character is an integer.
    - `normChar`: Character is an alphabetic character.
    - `specialChar`: Character is a special symbol.
- `isInt(expr)`: Returns a boolean telling you whether `expr` is an integer or not.
- `passwordStrength(password)`: Returns a score that says how secure your password is.
- `isSecure(password)`: Returns a boolean telling you if your password is secure or not. If the score is larger than eight, then it will return `true`.
- `generatePassword(length)`: Returns a password as a string of the length supplied.
- `testAll()`: Tests all of the above.

### Example

Here's a small example:

- 1.) Initialize a new Node.js project with the following command in a directory of your choosing:

```bash
$ npm init -y 
```

- 2.) Install *Vulcheck*:

```bash
$ npm install --save-dev vulcheck
```

- 3.) Be sure to add this line to your project's `package.json`:

```JSON
"type":"module",
```

- 4.) Create your `index.js` and put the following code inside it:

```js
// index.js
import * as vulcheck from 'vulcheck';

function main(){
  var pwd = '1969HoglinSteak';
  console.log(vulcheck.isSecure(pwd).toString());
}

main();
```

- 5.) Run the project:

```bash
$ node .
```

- 6.) This should print `false` to the console. :wink:
- 7.) Optional: If you're not sure how to use this project, check out the example project.

## CHANGELOG :black_nib:

### Version 1.0.0

- Initial release.
- Upload to GitHub.

### Version 1.1.0

- Upload to NPM.
- Fixing confusion between CJS and ESM.

### Version 1.2.0

- Added an example.
- More extensive documentation.

### Version 1.3.0

- Fixed some typos.
- Added a function to generate a password of user-supplied length.

### Version 1.4.0

- Fixed some ciritical issues.
- Updated documentation.

### Version 1.5.0

- Minor fixes.
- Speed improvements.

### Version 1.6.0

- Updated documentation.
- Updated, published, and uploaded under my new name.

### Version 1.7.0

- Fixed some administrative issues.
- Fixed some formatting.

### Version 1.8.0

- Updated `export` statement.
- Updated documentation for Typescript.

## NOTE :scroll:

- *Vulcheck :lock: :ribbon:* by Alexander Abraham :black_heart: a.k.a. *"Angel Dollface" :dolls: :ribbon:*
- Licensed under the MIT license.
