/**
 * gooders.share.js
 * @version: v0.1
 * @author: Wilson Cavalcante (@wilnaweb)
 *
 * Created by Wilson Cavalcante on 2020-03-01. Please report any bug at github.com/####
 *
 * Copyright (c) 2020 Wilson Cavalcante http://wilnaweb.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
 'use strict';

const Gooders = {
		// Customized Parameters
		asset_image: 'assets/logo.png',
		asset_color: '#f8ae12',
		asset_height: '25px',		
		asset_padding: '5px',				
		// System Parameters
		facebookurl: 'https://www.facebook.com/sharer.php?u=',
		goodersurl: 'http://appweb-gooders-dev.s3-website.eu-central-1.amazonaws.com/Compartilhe?news=',
		buttonclass: 'gooders-share-button',	
		buttonclass_ready: 'gooders-share-button-ready',	
		buttons: null,
		init: function(){			
			this.style();
			this.get();
			this.render();
		},
		get: function(){
			this.buttons = document.getElementsByClassName(this.buttonclass);			
		},
		render: function(){
			for (var i = 0; i < this.buttons.length; ++i) {
			    var item = this.buttons[i];  
			    this.addClass(item,'gooders-share-button-ready');
				item.children[0].style.display = 'none';
				
				var elem = document.createElement('a');
				elem.href='#goodersModal';
				elem.innerHTML = '<img src="'+this.asset_image+'">';				
				item.appendChild(elem);
				
				var url = item.getAttribute('data-href');
				url = this.goodersurl+encodeURIComponent(this.facebookurl+url+'&utm_source=gooders&utm_campaign=gooders-share');
				console.log(url);
				item.onclick = function(){				
					window.open(url,'goodersShareWindow', 'height=450, width=550, top=' + (window.innerHeight / 2 - 275) + ', left=' + (window.innerWidth / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
				}
			}			
		},
		hasClass: function(el, className){
		    if (el.classList)
		        return el.classList.contains(className);
		    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));		    
		},
		addClass: function(el, className){
		    if (el.classList)
		        el.classList.add(className)
		    else if (!hasClass(el, className))
		        el.className += " " + className;
		},
		removeClass: function(el, className){
		    if (el.classList)
		        el.classList.remove(className)
		    else if (hasClass(el, className))
		    {
		        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
		        el.className = el.className.replace(reg, ' ');
		    }
		},
		addStyle: function(styles) { 
              
            /* Create style document */ 
            var css = document.createElement('style'); 
            css.type = 'text/css'; 
          
            if (css.styleSheet)  
                css.styleSheet.cssText = styles; 
            else  
                css.appendChild(document.createTextNode(styles)); 
              
            /* Append style to the tag name */ 
            document.getElementsByTagName("head")[0].appendChild(css); 
        },	
		style: function(){
			var style_string = 'body div.gooders-share-button-ready{ background-color:'+this.asset_color+'; padding:'+this.asset_padding+'; display:inline-block; position:relative;}';
			style_string += 'body div.gooders-share-button-ready > a{text-decoration:none;}';
			style_string += 'body div.gooders-share-button-ready > a > img{height:'+this.asset_height+'; width:auto; margin:0px; padding:0px; display:block;}';  
  			this.addStyle(style_string);
		},
}


function goodersReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}    

goodersReady(function(){ Gooders.init(); });
