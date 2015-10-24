# BDD 99 Bottles of Beer on the Wall Code Review

##### Written for the Summer 2015 Intro to Programming class, 10/23/2015

#### By Midori Bowen

## Description

This is a spec test written in order to make a page that, when prompted with a number, returns the lyrics of the popular road trip song, "99 Bottles of Beer on Wall", starting at the number input and going all the way down to 0.

The code is repetitive and could obviously be shorter and simpler. I ran out of time and was not able to DRY as much as I wanted to. The variable nextRounds could have been much shorter if I didn't nitpick about the lines with 1 bottle in them. I wanted to write in line breaks, either for the console or for an html, but I couldn't figure out a good way to do it, so I got rid of the code. On the positive side, I think I understand pretty well how BDD works, even though I don't understand how Javascript works.

(Self grade: B-)

## Setup

* Enter beerCountdown

## Technologies Used

* JQuery - uncompressed, development jQuery 1.11.3
* Bootstrap v.3.3.5
* Javascript
* Mocha
* Chai

### Links

https://midoribowen.github.io/beer-counter

### Legal

Copyright (c) 2015 Midori Bowen

This software is licensed under the Epicodus Student License.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
