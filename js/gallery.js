let gallery = new Vue({
    el: '#gallery',
    data: {
        activePhoto: 0,
        photos: [{
                id: 1,
                url: '/images/product/detail-show/1.jpg',
                thumb: '/images/product/detail-show/thumb-1.jpg'
            },
            {
                id: 2,
                url: '/images/product/detail-show/2.jpg',
                thumb: '/images/product/detail-show/thumb-2.jpg'
            },
            {
                id: 3,
                url: '/images/product/detail-show/3.jpg',
                thumb: '/images/product/detail-show/thumb-3.jpg'
            },
            {
                id: 4,
                url: '/images/product/detail-show/4.jpg',
                thumb: '/images/product/detail-show/thumb-4.jpg'
            }
        ]
    },
    mounted() {
        AOS.init({
        disable: function() {
            var maxWidth = 992;
            return window.innerWidth < maxWidth;
        }
    });
    },
    methods: {
        changeActive(id) {
            this.activePhoto = id
        }
    }
})