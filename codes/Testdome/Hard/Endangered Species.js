// Endangered Species
// https://www.testdome.com/questions/javascript/endangered-species/46758?visibility=3&skillId=2

function endangeredSpecies(continent, species) {
  // Your code goes here

  // 부모들 다 가져옴 (dataset.continent가 있는 태그들)
  const parents = Array.from(document.querySelectorAll('[data-continent]'));

  // 부모들의 dataset.continent중에 매개변수 continent의 값과 비교하여 값이 같은 부모를 찾음
  const findParent = parents.find((parent) => parent.dataset.continent === continent);
  if (!findParent) return;

  // 자식들 dataset.species중에 매개변수 species의 값과 비교하여 값이 같은 자식을 찾음
  const children = Array.from(findParent.children);
  const findChild = children.find((child) => child.dataset.species === species);
  if (!findChild) return;

  return findChild.innerText;
}

// Example case
document.body.innerHTML = `<div>
    <ul data-continent="North America">
      <li data-species="California condor">Critically Endangered</li>
      <li data-species="American bison">Near Threatened</li>
    </ul>
    <ul data-continent="Europe">
      <li data-species="Cave bear">Extinct</li>
    </ul>
  </div>`;

console.log(endangeredSpecies('North America', 'American bison')); // should print 'Near Threatened'
