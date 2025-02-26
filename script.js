const thumbs = document.querySelectorAll('.thumb li');
const items = document.querySelectorAll('.item');
let currentIndex = 0;

thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        if (index === currentIndex) return;
        
        // Update thumbnails
        document.querySelector('.thumb .selected').classList.remove('selected');
        thumb.classList.add('selected');
        
        // Update items
        const currentItem = document.querySelector('.item.active');
        const nextItem = items[index];
        
        currentItem.classList.remove('active');
        currentItem.classList.add('previous-active');
        
        nextItem.classList.add('active');
        nextItem.classList.add('next-active');
        
        // Handle transitions
        setTimeout(() => {
            currentItem.classList.remove('previous-active');
            nextItem.classList.remove('next-active');
        }, 600);
        
        currentIndex = index;
    });
});