# Github Saved Replies

This repo will help to build github saved replies like the following:

![](./assets/preview.png)

## Usage

- Open [Saved replies](https://github.com/settings/replies)
- Open your browser's console (`F12`)
- Copy raw content of your preferred style and running in console
  - Abbr version, like `LGTM`: [abbr.js](./dist/abbr.js)
  - Full version, like `Look good to me`: [full.js](./dist/full.js)

After setting up, you can use `Ctrl+.` to trigger saved reply in issues or PR!

## Safety

Our code in `utils.js` is simple and safe, none of your data will be leaked.

## Development

Install dependencies: `npm install`
Build dist: `npm run build`

## Acknowledgment

Highly inspired by [@junnplus](https://twitter.com/junnplus)'s [tweet](https://twitter.com/junnplus/status/1523294594871439360).
