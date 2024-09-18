//Selects all the elemetns with class .tab and .tab-content
const tabItems = document.querySelectorAll('.tab');
const tabContentItems = document.querySelectorAll('.tab-content')

function selectItems(e) {
  removeActive();
  this.classList.add('active');
  removeShow();
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}

tabItems.forEach(item => {
  item.addEventListener('click', selectItems);
  });


function removeActive() {
  tabItems.forEach(item => {
    item.classList.remove('active');
    });
}

function removeShow() {
  tabContentItems.forEach(item => {
  item.classList.remove('show')
  });
}

function removeFade() {
  tabContentItems.forEach(item => {
  item.classList.remove('fade')
  });
}
