// Food Ranking
// https://www.testdome.com/questions/javascript/food-ranking/46764?visibility=3&skillId=2

function setup() {
  // Write your code here
  const parent = document.querySelector('ol');
  const children = Array.from(parent.children);

  if (!children || children.length <= 0) return;
  children.forEach((li) => {
    const currBtns = li.querySelectorAll('button');
    if (!currBtns || currBtns.length <= 0) return;

    currBtns.forEach((btn) =>
      btn.addEventListener('click', () => {
        const currType = btn.innerText.toLowerCase().startsWith('up') ? 'U' : 'D';
        if (currType !== 'U' && currType !== 'D') return;
        if (currType === 'U') {
          const prevNode = li.previousElementSibling;
          if (!prevNode) return;
          prevNode.insertAdjacentElement("beforebegin", li);
        } else {
          const nextNode = li.nextElementSibling;
          if (!nextNode) return;
          nextNode.insertAdjacentElement("afterend", li);
        }
      }),
    );
  });
}

// Example case
document.body.innerHTML = `<ol>
    <li><button>Up!</button>Taco<button>Down!</button></li>
    <li><button>Up!</button>Pizza<button>Down!</button></li>
    <li><button>Up!</button>Eggs<button>Down!</button></li>
  </ol>`;

setup();
document.getElementsByTagName('button')[2].click();

console.log(document.body.innerHTML);
