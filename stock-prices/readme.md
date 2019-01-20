# Stock Prices Kata

This is a variation on finding the maximum difference between to elements in an
unsorted array. The question is inspired by a post on [StackOverflow][so].

Given an array of stock prices, find the pair of indexes which yield the
greatest margin. Short selling is not permitted.

## Example

Given the following array if prices:
`55.39 109.23 48.29 81.59 105.53 94.45 12.24`. The greatest possible margin would be made buying at the third price (`48.29`) and selling at the fifth price (`105.53`). Options buying is not permitted.

[so]:
  https://stackoverflow.com/questions/1663545/find-buy-sell-prices-in-array-of-stock-values-to-maximize-positive-difference
