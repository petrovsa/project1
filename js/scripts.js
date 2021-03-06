const header = document.querySelector('.section-header');
const mainNavigation = document.getElementById('main-navigation');
document.querySelector('.faq-accordion').addEventListener('click', (event)=>{
    if (event.target.closest('.faq-accordion_item')) {
        event.target.closest('.faq-accordion_item').classList.toggle('faq-accordion_item--active');
    }
});

document.querySelector('.btn-burger').addEventListener('click', (event)=>{
       header.classList.toggle('section-header-active-nav');

       if (header.classList.contains('section-header-active-nav')) {
        hideScroll();
       } else {
        showScroll();
       }
    });

    const hideScroll = () => {
        const scrollWidth = `${getScrollbarWidth()}px`;
        document.body.style.paddingRight = scrollWidth;
        document.body.style.overflow = 'hidden';

        mainNavigation.style.paddingRight = scrollWidth;
    };

    const showScroll = () => {
        document.body.style.paddingRight = '';
        document.body.style.overflow = 'visible';

        mainNavigation.style.paddingRight = '';

        const ressetScroll = () =>{
            header.classList.remove('section-header-active-nav');
            showScroll();
        };

        window.addEventListener('resize', ressetScroll);
    };

    const getScrollbarWidth = () => {
        const outer = document.createElement('div');
        outer.style.position = 'absolute';
        outer.style.top = '-99999px';
        outer.style.width = '50px';
        outer.style.height = '50px';
        outer.style.overflow = 'scroll';
        outer.style.visibility = 'hidden';

        document.body.appendChild(outer);
        const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
        document.body.removeChild(outer);

        return scrollBarWidth;

    };

    new Swiper('.hero-image', {     
        // If we need pagination
        pagination: {
            el: '.hero-image .swiper-pagination',
            clickable: true,
          },

      });

      new Swiper('.slider-blog-container', {
         loop: true,
      
        // If we need pagination
        pagination: {
            el: '.blog .dots',
            clickable: true,
          },
      
        // Navigation arrows
        navigation: {
          nextEl: '.btn-blog-next',
          prevEl: '.btn-blog-prev',
        },
      
      });

      new Swiper('.slider-quotes-container', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        slidesPerView: 'auto',
      spaceBetween: 30,
      
        // If we need pagination
        pagination: {
            el: '.quotes .dots',
            clickable: true,
          },
      
      });


      