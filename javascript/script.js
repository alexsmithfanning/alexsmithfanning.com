/*
 *  Copyright © 2016 Alex Smith-Fanning and others
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

// Used for generating the mobile fly-out menu
$(document).ready(function() {
  $(".button-collapse").sideNav();
});

// This is for the Twitter button
! function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'script', 'twitter-wjs');

// Used for identifying ScrollFire classes
var options = [{
  selector: '.welcome-text-large',
  offset: 200,
  callback: 'globalFunction()'
}, {
  selector: '.welcome-text-small',
  offset: 200,
  callback: 'globalFunction()'
}, ];
Materialize.scrollFire(options);

// Gets the document prepared for ScrollSpy
$(document).ready(function() {
  $('.scrollspy').scrollSpy();
});
