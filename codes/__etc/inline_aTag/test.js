function clickRedirectHandler(e) {
  console.log(e);
  if (!confirm('ask')) e.preventDefault();
  return true;
}

// Example case
document.body.innerHTML = `
    <a href='#' onclick='${(e) => clickRedirectHandler(e)}'> 
        <span>*</span>
        <span>*</span>
        <span>*</span>
        <span>*</span>
        <span>*</span>
    </a>`;
console.log(document.body.innerHTML);