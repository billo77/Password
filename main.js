function sembol(width, sembols) {

  var mask = '';
  if (sembols.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
  if (sembols.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (sembols.indexOf('0') > -1) mask += '0123456789';
  if (sembols.indexOf('#') > -1) mask += '~`!@#$%^&*()_+={}[]:";\'<>?,./|\\';
  var result = '';
  for (var i = width; i > 0; --i) {
    result += mask[Math.floor(Math.random() * mask.length)];
  }
  document.querySelector('#input').value = result;


}