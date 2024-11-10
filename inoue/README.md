# Inoue
This nested folder structure is based on the order of appearance of the story on the main page of this site. You can see the name of the story in the `root/index.html`.

# Directory Structure

It can be said that this is a pretty simple and not very effective folder structure/nesting. Anyhow, more folders can be add according to the following folder tree:

```
./inoue
    |-- {numberedFolder}
    |   |-- assets
    |   |   |-- css
    |   |       - style.css
    |   |   |-- js
    |   |       - brain.js
    |   |   |-- img
    |   |       - img1.jpg
    |   |       - img2.png
    |   |       - img3.gif
    |   - index.html
    |-- {numberedFolder}
        .
        .
        .
    |-- {numberedFolder}
        .
        .
        .
```
# Footnote Css
| Class                     | Description                                                               |
| ---                       | ---                                                                       |
| `footnote-divider`        | The "Footnote & Resources" title to be distinguished from other elements  |
| `footnote-ref`            | for subscript that linked to the reference down below                     |

| ID                        | Description                                                               |
| ---                       | ---                                                                       |
| `footnote-{uniquePhrase}` | unique phrase for footnote ID                                             |
| `ref_{num}`               | reference back to the subscript that indicate footnote is available       |