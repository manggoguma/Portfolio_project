window.addEventListener('load', () => {
  let portfolioContainer = document.querySelector('.portfolio-container');
  let portfolioItems = document.querySelectorAll('.portfolio-item');
  let portfolioIsotope = null;
  let currentFilter = '*';

  if (portfolioContainer) {
      portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: '.portfolio-item',
          layoutMode: 'fitRows'
      });

      let portfolioFilters = document.querySelectorAll('#portfolio-flters li');

      portfolioFilters.forEach(filter => {
          filter.addEventListener('click', function(e) {
              e.preventDefault();
              portfolioFilters.forEach(el => el.classList.remove('filter-active'));
              this.classList.add('filter-active');

              currentFilter = this.getAttribute('data-filter');
              portfolioIsotope.arrange({
                  filter: currentFilter
              });

              showItems(Infinity); // 필터 변경 시 모든 항목을 표시하도록 함

              // 필터링된 항목의 수를 계산하여 표시
              let filteredItemCount = portfolioIsotope.getFilteredItemElements().length;
              document.getElementById('item-count-info').innerText = "총 : " + filteredItemCount + " 건";
          });
      });

      document.getElementById('show-all').addEventListener('click', () => {
          showItems(Infinity);
      });

      document.getElementById('show-3').addEventListener('click', () => {
          showItems(3);
      });

      document.getElementById('show-6').addEventListener('click', () => {
          showItems(6);
      });

      document.getElementById('show-9').addEventListener('click', () => {
          showItems(9);
      });
  }

  function showItems(number) {
      let filteredItems = portfolioIsotope.getFilteredItemElements();

      filteredItems.forEach((item, index) => {
          if (index < number) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      });
      portfolioIsotope.layout(); // 레이아웃 업데이트
  }

  // 초기 로드 시 모든 항목 표시
  showItems(Infinity);
});
