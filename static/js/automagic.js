String.prototype.rotX = function(key){
  return this.replace(/[a-zA-Z]/g, function(c){
    return String.fromCharCode(c.charCodeAt(0)-key < 97 ? c.charCodeAt(0)-key+26 : c.charCodeAt(0)-key);
  });
};
$(document).ready(function() {
  encodedEmail = $('#email').text();
  var re = new RegExp('(.*?)\@([a-z]*)\.([a-z]*)$');
  var m = re.exec(encodedEmail);
  $('#email').replaceWith("<td id='email'>" + m[1].rotX(11) + '@' + m[2].rotX(12) + '.' + m[3]+ "</td>");

  var refs = '';
  $('.reference').each(function() {
    refs += '<span>' + $(this).attr('title') + '</span> - ' + $(this).attr('href') + '<br />\n';
  });
  $('#references').html('<ul>' + refs + '</ul>');

  var fn = $('#fn').text();
  var adr = $('#adr').text();
  var tel = $('#tel').text().replace(/ /g, '').replace('+','%2B');
  var email = $('#email').text();
  var url = $('#url').text();
  var vcard = "MECARD:N:" + fn + ";TEL:" + tel + ";URL:" + url + ";EMAIL:" + email + ";ADR:" + adr+ ";";
  $('.qrcode').html("<img class='pc' src='https://chart.googleapis.com/chart?chs=100x100&cht=qr&chld=L|0&chl=" + vcard + "' /><div class='pc'>Add contact to the phonebook</div><div class='mobile'><a href='http:/.periloso.com/vcf/AlessioPeriloso.vcf'>Add contact to the phonebook</a></div>");
  // This doesn't show the QR-Code when printing the page - need to be fixed
  //$('.qrcode').html("<img src='images/transparent.png' class='sprite spr_vcfen'/><div class='pc'>Add contact to the phonebook</div><div class='mobile'><a href='http:/.periloso.com/vcf/AlessioPeriloso.vcf'>Add contact to the phonebook</a></div>");
});
var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-31274323-1']);_gaq.push(['_trackPageview']);(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src='http://www.google-analytics.com/ga.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s)})();