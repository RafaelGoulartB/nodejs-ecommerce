function open_menu() {
  const menu = document.getElementById('menu-mobile');

  menu.style.opacity = 1;
  menu.style.zIndex = 99;
  
}
function close_menu() {
  const menu = document.getElementById('menu-mobile');
  
  menu.style.opacity = 0;
  menu.style.zIndex = -1;

}

function toogleItemListCurrency() {
  const itemList = document.getElementById('content-currency');

  if(itemList.style.display == 'flex') itemList.style.display = 'none';
  else itemList.style.display = 'flex';
}
function toogleItemListLanguage() {
  const itemList = document.getElementById('content-language');

  if(itemList.style.display == 'flex') itemList.style.display = 'none';
  else itemList.style.display = 'flex';
}