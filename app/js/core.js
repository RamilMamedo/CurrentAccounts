document.addEventListener('DOMContentLoaded', function() {
  // Welcome Console
  console.log(
    '%cReady for Development!',
    'color: #99160a; font-size: 38px; text-shadow: -1px 0 #94969a, 0 1px #94969a, 1px 0 #94969a, 0 -1px #94969a;'
  );
  // Hamburger
  $('.hamburger').click(function() {
    $(this).toggleClass('active');
    return false;
  });
  // Filter
  $('#filter').change(function() {
    let selectedID = $(this)[0].selectedIndex;
    let $selected = $(this).children(
      'option:nth-child(' + (selectedID + 1) + ')'
    );
    let option = $selected.attr('value').replace('option-', '');
    filterRowsBy(option);
  });
  // Question Accordion
  $('.question .toggle-icon').click(function() {
    $(this)
      .parent()
      .next('.content')
      .slideToggle();
    $(this).text($(this).text() == '+' ? '-' : '+');
  });
  // Sticky Sidebar
  $('.sticky-sidebar').theiaStickySidebar({
    containerSelector: '.sticky-sidebar-parent',
    additionalMarginTop: 10,
    additionalMarginBottom: 20
  });

  // Filtering reviews - function
  function filterRowsBy(options) {
    $('.partners-table--item').each(function() {
      if (options !== 'all' && options.length > 0) {
        let reviewShow = false,
          reviewCats = $(this)
            .data('options')
            .split(',');
        // Display apposite elements
        for (i = 0; i < reviewCats.length; i++) {
          if (options.indexOf(reviewCats[i]) != -1) {
            $(this).show(0);
            reviewShow = true;
            break;
          }
        }
        if (!reviewShow) $(this).hide(0);
      } else {
        $(this).show(0);
      }
    });
  }
});
