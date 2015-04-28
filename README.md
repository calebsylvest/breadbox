Breadbox
========

A quick and simple splashpage for launching a product idea and collecting emails

Check out the [Breadbox Demo](http://calebsylvest.github.io/breadbox/)


## Why Breadbox?

Breadbox is a super simple product splashpage. Breadbox is a great way to throw up a landing page, drive traffic, and capture interest and emails to test a market and validate an idea.

In it's base form, Breadbox is nothing more than a logo, product name, tagline, and email form. The page can be used as is, or easily be extended to include further information.

### In the Wild

The landing page method of Breadbox has been tested with interesting results. Using the base form with a logo, product name, and intriguing tagline accompanied with dispersal to a target market, Breadbox has returned a 30% conversion rate in email signups.

#### Example

Here is an example of using the Breadbox splashpage. Initially for my [HelixPowered](http://helixpowered.com/) product I threw up a simple splash page, added a catchy tagline and posted to a relevant community ([Designer News](https://news.layervault.com/) in this case). In less than 24 hours the site had just over 600 vistors and 197 email signups (so about a 30% conversion). While I know many people dislike product pages asking for emails with limited (or no) explanation or information, the thing is, it *does* work. And it's a good way to test and validate an idea before investing too much time and money on a product  that may not have a solid market. 

Haters gonna hate, so it's up to you whether you choose to use this method. What I did was use the intial splashpage, receive some email signups, send out an email, get some feedback, then when I had input on the product (and validatation) I built out an extended version of the landing/marketing page for [HelixPowered](http://helixpowered.com/). IMHO, this is a great early path to starting a new product.

![Helix Powered Example](assets/img/example.png?raw=true "Helix Powered Example")

Another example of Breadbox in action, the splashpage for [CourseMakers](http://coursemakers.com/), an online teaching platform for designers and developers to build and sell digital classes.

![CourseMakers Example](assets/img/example-coursemakers.png?raw=true "CourseMakers Example")

## How to Use

1. [Clone](https://github.com/calebsylvest/breadbox.git), [Download](https://github.com/calebsylvest/breadbox/archive/master.zip), or [Fork](https://github.com/calebsylvest/breadbox/fork) Breadbox
2. Change relevant site content in the `index.html` file
	- Logo
	- Site Title
	- Tagline (this needs to be short, sweet, relevant, and intriguing)
	- Favicon
	- Header Meta
	- Footer info
3. Change any site styles, styles are built with Sass and Compass, so change variables in the `style.scss` file before making any code changes
	- Background Color
	- Font (be sure to link any CDN fonts in the site header)
	- Any other custom changes (check button text color, text color, etc)
4. Add email newsletter info. I prefer and use MailChimp, so the email form skeleton is straight from MailChimp. Simply add your unique list code to the `form` action to properly setup the signup field.
5. Add Google Analytics. Cause if there ain't analytics, then it didn't happen!
6. Launch into the real world.

## What Next?

Well, that's for you to decide. I hope Breadbox is a useful tool for you, or at least a jumping off point to assist in research. Feel free to [log an issue](https://github.com/calebsylvest/breadbox/issues) or [create a pull request](https://github.com/calebsylvest/breadbox/pulls) or shoot me a [tweet](https://twitter.com/calebsylvest)!

## License

Copyright (c) 2015 Caleb Sylvest. See the LICENSE file for license rights and
limitations (MIT).