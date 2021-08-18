// Customer List
// https://www.testdome.com/questions/javascript/customer-list/49798?visibility=3&skillId=2

function showCustomers(customers, targetList) {
  // Your code goes here
  customers.forEach(({ name, email }) => {
    const li = document.createElement('li');

    const pName = document.createElement('p');
    pName.innerText = name;
    li.insertAdjacentElement('beforeend', pName);

    pName.addEventListener('click', () => {
      const next = pName.nextElementSibling;
      if (!next) {
        const pEmail = document.createElement('p');
        pEmail.innerText = email;
        li.insertAdjacentElement('beforeend', pEmail);
      } else li.removeChild(next);
    });

    targetList.insertAdjacentElement('beforeend', li);
  });
}

document.body.innerHTML = `
  <div>
    <ul id="customers">
    </ul>
  </div>
  `;
let customers = [
  { name: 'John', email: 'john@example.com' },
  { name: 'Mary', email: 'mary@example.com' },
];
showCustomers(customers, document.getElementById('customers'));

let customerParagraph = document.querySelectorAll('li > p')[0];
if (customerParagraph) {
  customerParagraph.click();
}
console.log(document.body.innerHTML);
