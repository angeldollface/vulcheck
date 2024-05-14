# VULCHECK :lock: :ribbon:

![GitHub CI](https://github.com/angeldollface/vulcheck/actions/workflows/node.yml/badge.svg)

***A package that implements my own algorithm to check the security of a password. :lock: :ribbon:***

## ABOUT :books:

Roughly a year ago, I implemented my own algorithm to check the strength of a password in Dart. *Vulcheck* is my port of this package to Typescript. *Vulcheck* is a combination of the words *Vul*nerability and *Check*er. You can find the original algorithm [here](https://github.com/angeldollface/securitycheck). Enjoy! :heart_on_fire:

## THE ALGORTHM :abacus:

The algorithm measures the distance between neighbouring characters. If the two characters being compared are of a different type, then the score is increased. If not, it is diminished. If two characters are compared and the distance is large, then the score is increased. Finally, all the distances are tallied and summed.

## USAGE :hammer:

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

### Example

- 1.) Create a new Typescript file.
- 2.) Import *Vulcheck* from Deno's module repository:

```Typescript
import * as vulcheck from 'https://deno.land/x/zeppo/mod.ts';
```

- 3.) You can now use any of the function signatures above by prepending `vulcheck.`:

- 4.) You can then run the Typescript file with Deno using this command:

```bash
deno run your_script.ts
```

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

### Version 1.9.0

- Rewrote the project in Typescript.
- Migrated the project from Node.js to Deno.
- Removed the `testAll` function.
- Added unit tests for Deno.
- Relicensed the project under the [DSL v1](https://github.com/angeldollface/doll-software-license).

## NOTE :scroll:

- *Vulcheck :lock: :ribbon:* by Alexander Abraham :black_heart: a.k.a. *"Angel Dollface" :dolls: :ribbon:*
- Licensed under the DSL v1.
